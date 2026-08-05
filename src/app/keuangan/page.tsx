"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  X,
  TrendingUp,
  TrendingDown,
  Wallet,
  Filter,
  Download,
  Pencil,
  Search,
} from "lucide-react";
import { Transaksi, TipeTransaksi, KategoriTransaksi } from "@/lib/types";
import { useAppStore, generateId } from "@/lib/store";
import {
  parseDate,
  formatShortDate,
  todayString,
  downloadCsv,
} from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { format, subMonths, startOfMonth, endOfMonth, subDays } from "date-fns";
import { id } from "date-fns/locale";
import { showToast } from "@/components/ui/toast";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { Modal } from "@/components/ui/modal";

const kategoriConfig: Record<
  KategoriTransaksi,
  { label: string; tipe: TipeTransaksi; emoji: string }
> = {
  // Pemasukan
  penjualan_tanaman: {
    label: "Penjualan Hasil Kebun",
    tipe: "pemasukan",
    emoji: "🌿",
  },
  penjualan_telur: { label: "Penjualan Telur", tipe: "pemasukan", emoji: "🥚" },
  penjualan_ayam: { label: "Penjualan Ayam", tipe: "pemasukan", emoji: "🐔" },
  // Pengeluaran
  bibit: { label: "Bibit & Benih", tipe: "pengeluaran", emoji: "🌱" },
  pupuk: { label: "Pupuk", tipe: "pengeluaran", emoji: "🧪" },
  pestisida: {
    label: "Pestisida / Fungisida",
    tipe: "pengeluaran",
    emoji: "🔬",
  },
  pakan: { label: "Pakan Ternak", tipe: "pengeluaran", emoji: "🌾" },
  obat: { label: "Obat & Vaksin", tipe: "pengeluaran", emoji: "💊" },
  sewa_lahan: { label: "Sewa Lahan", tipe: "pengeluaran", emoji: "🏡" },
  tenaga_kerja: { label: "Tenaga Kerja", tipe: "pengeluaran", emoji: "👷" },
  lainnya: { label: "Lainnya", tipe: "pengeluaran", emoji: "📦" },
};

const CHART_COLORS = [
  "#22c55e",
  "#f97316",
  "#eab308",
  "#3b82f6",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#6b7280",
];

export default function KeuanganPage() {
  // ─── Zustand ──────────────────────────────────────────────────────────────
  const transaksi = useAppStore((s) => s.transaksi);
  const setTransaksi = useAppStore((s) => s.setTransaksi);

  // ─── UI State ─────────────────────────────────────────────────────────────
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [filterTipe, setFilterTipe] = useState<"semua" | TipeTransaksi>(
    "semua",
  );
  const [filterKategori, setFilterKategori] = useState<
    KategoriTransaksi | "semua"
  >("semua");
  const [filterPeriode, setFilterPeriode] = useState<
    "semua" | "minggu" | "bulan" | "tahun"
  >("semua");
  const [activeTab, setActiveTab] = useState<"ringkasan" | "transaksi">(
    "ringkasan",
  );
  const [searchTransaksi, setSearchTransaksi] = useState("");
  const [form, setForm] = useState({
    tanggal: "",
    tipe: "pemasukan" as TipeTransaksi,
    kategori: "penjualan_tanaman" as KategoriTransaksi,
    jumlah: "",
    deskripsi: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ─── Aggregates (all-time) ────────────────────────────────────────────────
  const pemasukan = useMemo(
    () =>
      transaksi
        .filter((t) => t.tipe === "pemasukan")
        .reduce((s, t) => s + t.jumlah, 0),
    [transaksi],
  );
  const pengeluaran = useMemo(
    () =>
      transaksi
        .filter((t) => t.tipe === "pengeluaran")
        .reduce((s, t) => s + t.jumlah, 0),
    [transaksi],
  );
  const laba = pemasukan - pengeluaran;

  // ─── Charts ───────────────────────────────────────────────────────────────
  const monthlyData = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const m = subMonths(new Date(), 5 - i);
        const mStr = format(m, "yyyy-MM");
        const masuk = transaksi
          .filter((t) => t.tanggal.startsWith(mStr) && t.tipe === "pemasukan")
          .reduce((s, t) => s + t.jumlah, 0);
        const keluar = transaksi
          .filter((t) => t.tanggal.startsWith(mStr) && t.tipe === "pengeluaran")
          .reduce((s, t) => s + t.jumlah, 0);
        return {
          bulan: format(m, "MMM", { locale: id }),
          pemasukan: masuk / 1000,
          pengeluaran: keluar / 1000,
        };
      }),
    [transaksi],
  );

  const pengeluaranByKat = useMemo(
    () =>
      Object.entries(kategoriConfig)
        .filter(([, cfg]) => cfg.tipe === "pengeluaran")
        .map(([key, cfg]) => ({
          name: cfg.label,
          value: transaksi
            .filter((t) => t.kategori === key)
            .reduce((s, t) => s + t.jumlah, 0),
        }))
        .filter((d) => d.value > 0),
    [transaksi],
  );

  const pemasukanByKat = useMemo(
    () =>
      Object.entries(kategoriConfig)
        .filter(([, cfg]) => cfg.tipe === "pemasukan")
        .map(([key, cfg]) => ({
          name: cfg.label,
          value: transaksi
            .filter((t) => t.kategori === key)
            .reduce((s, t) => s + t.jumlah, 0),
        }))
        .filter((d) => d.value > 0),
    [transaksi],
  );

  // ─── Filter ───────────────────────────────────────────────────────────────
  const filteredTransaksi = useMemo(() => {
    const now = new Date();
    return transaksi
      .filter((t) => filterTipe === "semua" || t.tipe === filterTipe)
      .filter(
        (t) => filterKategori === "semua" || t.kategori === filterKategori,
      )
      .filter((t) => {
        if (filterPeriode === "semua") return true;
        const d = parseDate(t.tanggal);
        if (filterPeriode === "minggu") {
          const cutoff = subDays(now, 6);
          cutoff.setHours(0, 0, 0, 0);
          return d >= cutoff;
        }
        if (filterPeriode === "bulan") {
          return d >= startOfMonth(now) && d <= endOfMonth(now);
        }
        if (filterPeriode === "tahun")
          return d.getFullYear() === now.getFullYear();
        return true;
      })
      .filter(
        (t) =>
          searchTransaksi === "" ||
          t.deskripsi.toLowerCase().includes(searchTransaksi.toLowerCase()),
      )
      .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  }, [transaksi, filterTipe, filterKategori, filterPeriode, searchTransaksi]);

  // Ringkasan angka berdasarkan filter aktif
  const filteredPemasukan = useMemo(
    () =>
      filteredTransaksi
        .filter((t) => t.tipe === "pemasukan")
        .reduce((s, t) => s + t.jumlah, 0),
    [filteredTransaksi],
  );
  const filteredPengeluaran = useMemo(
    () =>
      filteredTransaksi
        .filter((t) => t.tipe === "pengeluaran")
        .reduce((s, t) => s + t.jumlah, 0),
    [filteredTransaksi],
  );

  const kategoriOptions = Object.entries(kategoriConfig).filter(
    ([, cfg]) => filterTipe === "semua" || cfg.tipe === filterTipe,
  );

  // ─── CRUD ─────────────────────────────────────────────────────────────────
  function openAdd() {
    setEditId(null);
    setForm({
      tanggal: todayString(),
      tipe: "pemasukan",
      kategori: "penjualan_tanaman",
      jumlah: "",
      deskripsi: "",
    });
    setErrors({});
    setShowForm(true);
  }

  function openEdit(t: Transaksi) {
    setEditId(t.id);
    setForm({
      tanggal: t.tanggal,
      tipe: t.tipe,
      kategori: t.kategori,
      jumlah: String(t.jumlah),
      deskripsi: t.deskripsi,
    });
    setErrors({});
    setShowForm(true);
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.deskripsi.trim()) e.deskripsi = "Deskripsi wajib diisi";
    const n = Number(form.jumlah);
    if (!form.jumlah || isNaN(n) || n <= 0)
      e.jumlah = "Jumlah harus lebih dari 0";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    const jumlah = Number(form.jumlah);
    if (editId) {
      setTransaksi(
        transaksi.map((t) =>
          t.id === editId
            ? {
                ...t,
                tanggal: form.tanggal,
                tipe: form.tipe,
                kategori: form.kategori,
                jumlah,
                deskripsi: form.deskripsi,
              }
            : t,
        ),
      );
      showToast("Transaksi berhasil diperbarui", "success");
    } else {
      const nw: Transaksi = {
        id: generateId(),
        tanggal: form.tanggal,
        tipe: form.tipe,
        kategori: form.kategori,
        jumlah,
        deskripsi: form.deskripsi,
        createdAt: new Date().toISOString(),
      };
      setTransaksi([...transaksi, nw]);
      showToast("Transaksi berhasil ditambahkan", "success");
    }
    setShowForm(false);
    setEditId(null);
    setForm({
      tanggal: todayString(),
      tipe: "pemasukan",
      kategori: "penjualan_tanaman",
      jumlah: "",
      deskripsi: "",
    });
    setErrors({});
  }

  function doDelete() {
    if (!confirmDeleteId) return;
    setTransaksi(transaksi.filter((t) => t.id !== confirmDeleteId));
    setConfirmDeleteId(null);
    showToast("Transaksi berhasil dihapus", "success");
  }

  function exportCSV() {
    const headers = ["Tanggal", "Tipe", "Kategori", "Jumlah", "Deskripsi"].join(
      ",",
    );
    const rows = [...filteredTransaksi].map((t) =>
      [
        t.tanggal,
        t.tipe,
        kategoriConfig[t.kategori]?.label ?? t.kategori,
        t.jumlah,
        `"${t.deskripsi.replace(/"/g, '""')}"`,
      ].join(","),
    );
    downloadCsv(`keuangan-${todayString()}.csv`, [headers], rows);
    showToast(
      `Export CSV berhasil (${filteredTransaksi.length} transaksi)`,
      "success",
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Total Pemasukan
            </span>
          </div>
          <p className="text-2xl font-extrabold text-green-600">
            Rp {pemasukan.toLocaleString("id")}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Semua waktu</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400">
              <TrendingDown className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Total Pengeluaran
            </span>
          </div>
          <p className="text-2xl font-extrabold text-red-500">
            Rp {pengeluaran.toLocaleString("id")}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Semua waktu</p>
        </div>
        <div
          className={`border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow ${laba >= 0 ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`p-2.5 rounded-xl ${laba >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
            >
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Laba / Rugi
            </span>
          </div>
          <p
            className={`text-2xl font-extrabold ${laba >= 0 ? "text-green-700 dark:text-green-400" : "text-red-600"}`}
          >
            {laba >= 0 ? "+" : "-"}Rp {Math.abs(laba).toLocaleString("id")}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {transaksi.length} transaksi total
          </p>
        </div>
      </div>

      {/* Tab + Actions */}
      <div className="flex items-center gap-2 flex-wrap">
        {(["ringkasan", "transaksi"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors capitalize ${activeTab === t ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
          >
            {t === "ringkasan" ? "📊 Ringkasan" : "📋 Transaksi"}
          </button>
        ))}
        <button
          onClick={openAdd}
          className="ml-auto flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" /> Tambah Transaksi
        </button>
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border text-foreground rounded-xl text-sm font-medium hover:bg-muted"
        >
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Tab Ringkasan */}
      {activeTab === "ringkasan" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-1">
              Arus Kas 6 Bulan Terakhir
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              dalam ribuan rupiah (Rp rb)
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.9 0.01 120)"
                />
                <XAxis dataKey="bulan" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(v) => [
                    `Rp ${(Number(v) * 1000).toLocaleString("id")}`,
                    "",
                  ]}
                />
                <Legend />
                <Bar
                  dataKey="pemasukan"
                  name="Pemasukan"
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="pengeluaran"
                  name="Pengeluaran"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">
                Sumber Pemasukan
              </h3>
              {pemasukanByKat.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pemasukanByKat}
                      cx="50%"
                      cy="50%"
                      outerRadius={75}
                      dataKey="value"
                      label={({ name: n, percent }) =>
                        `${n} ${((percent ?? 0) * 100).toFixed(0)}%`
                      }
                    >
                      {pemasukanByKat.map((_, i) => (
                        <Cell
                          key={i}
                          fill={CHART_COLORS[i % CHART_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v) => [
                        `Rp ${Number(v).toLocaleString("id")}`,
                        "",
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Belum ada data
                </p>
              )}
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">
                Rincian Pengeluaran
              </h3>
              {pengeluaranByKat.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pengeluaranByKat}
                      cx="50%"
                      cy="50%"
                      outerRadius={75}
                      dataKey="value"
                      label={({ percent }) =>
                        `${((percent ?? 0) * 100).toFixed(0)}%`
                      }
                    >
                      {pengeluaranByKat.map((_, i) => (
                        <Cell
                          key={i}
                          fill={CHART_COLORS[i % CHART_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v) => [
                        `Rp ${Number(v).toLocaleString("id")}`,
                        "",
                      ]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Belum ada data
                </p>
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">
              Rincian Per Kategori
            </h3>
            <div className="space-y-2">
              {Object.entries(kategoriConfig).map(([key, cfg]) => {
                const total = transaksi
                  .filter((t) => t.kategori === key)
                  .reduce((s, t) => s + t.jumlah, 0);
                if (total === 0) return null;
                return (
                  <div
                    key={key}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <span>{cfg.emoji}</span>
                      <span className="text-sm font-medium text-foreground">
                        {cfg.label}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${cfg.tipe === "pemasukan" ? "text-green-600" : "text-red-500"}`}
                    >
                      {cfg.tipe === "pemasukan" ? "+" : "-"}Rp{" "}
                      {total.toLocaleString("id")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab Transaksi */}
      {activeTab === "transaksi" && (
        <div className="space-y-4">
          {/* Filter bar — responsive: stack rows on mobile */}
          <div className="bg-card border border-border rounded-2xl p-3 sm:p-4 space-y-2.5">
            {/* Row 1: Search + jumlah */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari deskripsi..."
                  value={searchTransaksi}
                  onChange={(e) => setSearchTransaksi(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-input bg-background text-xs w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <span className="text-xs text-muted-foreground ml-auto">
                {filteredTransaksi.length} transaksi
              </span>
            </div>
            {/* Row 2: Periode filter */}
            <div className="flex gap-1.5 flex-wrap">
              {(["semua", "minggu", "bulan", "tahun"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterPeriode(p)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${filterPeriode === p ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {p === "semua"
                    ? "Semua"
                    : p === "minggu"
                      ? "7 Hari"
                      : p === "bulan"
                        ? "Bulan Ini"
                        : "Tahun Ini"}
                </button>
              ))}
              <div className="hidden sm:block w-px h-5 bg-border self-center" />
              {(["semua", "pemasukan", "pengeluaran"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setFilterTipe(t);
                    setFilterKategori("semua");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${filterTipe === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {t === "semua"
                    ? "Semua"
                    : t === "pemasukan"
                      ? "Pemasukan"
                      : "Pengeluaran"}
                </button>
              ))}
            </div>
            {/* Row 3: Kategori + ringkasan */}
            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={filterKategori}
                onChange={(e) =>
                  setFilterKategori(
                    e.target.value as KategoriTransaksi | "semua",
                  )
                }
                className="px-3 py-1.5 rounded-xl border border-input bg-background text-xs flex-1 sm:flex-none"
              >
                <option value="semua">Semua Kategori</option>
                {filterTipe === "semua" ? (
                  <>
                    <optgroup label="── Pemasukan ──">
                      {Object.entries(kategoriConfig)
                        .filter(([, v]) => v.tipe === "pemasukan")
                        .map(([k, v]) => (
                          <option key={k} value={k}>
                            {v.emoji} {v.label}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="── Pengeluaran ──">
                      {Object.entries(kategoriConfig)
                        .filter(([, v]) => v.tipe === "pengeluaran")
                        .map(([k, v]) => (
                          <option key={k} value={k}>
                            {v.emoji} {v.label}
                          </option>
                        ))}
                    </optgroup>
                  </>
                ) : (
                  kategoriOptions.map(([k, v]) => (
                    <option key={k} value={k}>
                      {v.emoji} {v.label}
                    </option>
                  ))
                )}
              </select>
              {filterPeriode !== "semua" && (
                <div className="flex gap-3 text-xs ml-auto">
                  <span className="text-green-600 font-semibold">
                    +Rp {filteredPemasukan.toLocaleString("id")}
                  </span>
                  <span className="text-red-500 font-semibold">
                    -Rp {filteredPengeluaran.toLocaleString("id")}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            {filteredTransaksi.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Wallet className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Belum ada transaksi</p>
              </div>
            )}
            {filteredTransaksi.map((t) => {
              const kat = kategoriConfig[t.kategori];
              return (
                <div
                  key={t.id}
                  className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${t.tipe === "pemasukan" ? "bg-green-100" : "bg-red-100"}`}
                  >
                    {kat.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {t.deskripsi}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-muted-foreground">
                        {formatShortDate(t.tanggal)}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {kat.label}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p
                      className={`font-bold text-base ${t.tipe === "pemasukan" ? "text-green-600" : "text-red-500"}`}
                    >
                      {t.tipe === "pemasukan" ? "+" : "-"}Rp{" "}
                      {t.jumlah.toLocaleString("id")}
                    </p>
                  </div>
                  <button
                    onClick={() => openEdit(t)}
                    className="shrink-0 p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setConfirmDeleteId(t.id)}
                    className="shrink-0 p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal Tambah/Edit Transaksi */}
      <Modal
        open={showForm}
        title={editId ? "Edit Transaksi" : "Tambah Transaksi"}
        onClose={() => {
          setShowForm(false);
          setEditId(null);
          setErrors({});
          setForm({
            tanggal: todayString(),
            tipe: "pemasukan",
            kategori: "penjualan_tanaman",
            jumlah: "",
            deskripsi: "",
          });
        }}
      >
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                Tipe
              </label>
              <select
                value={form.tipe}
                onChange={(e) => {
                  const tipe = e.target.value as TipeTransaksi;
                  const firstKat = Object.entries(kategoriConfig).find(
                    ([, v]) => v.tipe === tipe,
                  )?.[0] as KategoriTransaksi | undefined;
                  if (firstKat) {
                    setForm({ ...form, tipe, kategori: firstKat });
                  } else {
                    setForm({ ...form, tipe });
                  }
                }}
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
              >
                <option value="pemasukan">Pemasukan</option>
                <option value="pengeluaran">Pengeluaran</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">
                Tanggal
              </label>
              <input
                type="date"
                value={form.tanggal}
                onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              Kategori
            </label>
            <select
              value={form.kategori}
              onChange={(e) =>
                setForm({
                  ...form,
                  kategori: e.target.value as KategoriTransaksi,
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
            >
              {Object.entries(kategoriConfig)
                .filter(([, v]) => v.tipe === form.tipe)
                .map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.emoji} {v.label}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              Jumlah (Rp) *
            </label>
            <input
              type="number"
              min="1"
              placeholder="500000"
              value={form.jumlah}
              onChange={(e) => {
                setForm({ ...form, jumlah: e.target.value });
                setErrors({ ...errors, jumlah: "" });
              }}
              className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${errors.jumlah ? "border-red-400" : "border-input"}`}
            />
            {errors.jumlah && (
              <p className="text-xs text-red-500 mt-1">{errors.jumlah}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              Deskripsi *
            </label>
            <input
              placeholder="cth: Penjualan cabai merah 50 kg"
              value={form.deskripsi}
              onChange={(e) => {
                setForm({ ...form, deskripsi: e.target.value });
                setErrors({ ...errors, deskripsi: "" });
              }}
              className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${errors.deskripsi ? "border-red-400" : "border-input"}`}
            />
            {errors.deskripsi && (
              <p className="text-xs text-red-500 mt-1">{errors.deskripsi}</p>
            )}
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90"
          >
            {editId ? "Simpan Perubahan" : "Tambah"}
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
          >
            Batal
          </button>
        </div>
      </Modal>

      <ConfirmDialog
        open={confirmDeleteId !== null}
        title="Hapus Transaksi"
        message="Yakin ingin menghapus transaksi ini? Aksi ini tidak bisa dibatalkan."
        onConfirm={doDelete}
        onCancel={() => setConfirmDeleteId(null)}
      />
    </div>
  );
}
