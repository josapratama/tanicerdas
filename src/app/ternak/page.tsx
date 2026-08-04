"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  Bird,
  Egg,
  X,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Pencil,
  Search,
  Trash2,
  Download,
} from "lucide-react";
import { Kandang, ProduksiTelur, PemberianPakan } from "@/lib/types";
import { useAppStore, generateId } from "@/lib/store";
import { parseDate, formatShortDate, todayString } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, subDays } from "date-fns";
import { id } from "date-fns/locale";
import { showToast } from "@/components/ui/toast";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const statusCls = {
  baik: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  perlu_perhatian:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  kritis: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};
const jenisLabel = {
  petelur: "Petelur",
  pedaging: "Pedaging",
  kampung: "Kampung",
};
const jenisColor = {
  petelur: "bg-yellow-100 text-yellow-700",
  pedaging: "bg-orange-100 text-orange-700",
  kampung: "bg-lime-100 text-lime-700",
};

export default function TernakPage() {
  // ─── Zustand ──────────────────────────────────────────────────────────────
  const kandang = useAppStore((s) => s.kandang);
  const setKandang = useAppStore((s) => s.setKandang);
  const produksi = useAppStore((s) => s.produksiTelur);
  const setProduksi = useAppStore((s) => s.setProduksiTelur);
  const pakan = useAppStore((s) => s.pemberianPakan);
  const setPakan = useAppStore((s) => s.setPemberianPakan);
  const insidenList = useAppStore((s) => s.insidenPenyakit);
  const setInsidenList = useAppStore((s) => s.setInsidenPenyakit);

  const today = todayString();

  // ─── UI State ─────────────────────────────────────────────────────────────
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showKandangForm, setShowKandangForm] = useState(false);
  const [showTelurForm, setShowTelurForm] = useState(false);
  const [showPakanForm, setShowPakanForm] = useState(false);
  const [activeTab, setActiveTab] = useState<"telur" | "pakan">("telur");
  const [showAllRiwayat, setShowAllRiwayat] = useState(false);
  const [filterRiwayatPeriode, setFilterRiwayatPeriode] = useState<
    "semua" | "7hari" | "30hari"
  >("7hari");
  const [confirmDeleteProduksi, setConfirmDeleteProduksi] = useState<
    string | null
  >(null);
  const [confirmDeletePakanId, setConfirmDeletePakanId] = useState<
    string | null
  >(null);
  const [editProduksiId, setEditProduksiId] = useState<string | null>(null);
  const [editProduksiForm, setEditProduksiForm] = useState({
    jumlahTelur: "",
    catatan: "",
    tanggal: "",
  });
  const [editPakanId, setEditPakanId] = useState<string | null>(null);
  const [editPakanForm, setEditPakanForm] = useState({
    jenisPakan: "",
    jumlahKg: "",
    biaya: "",
    tanggal: "",
  });
  const [editKandangId, setEditKandangId] = useState<string | null>(null);
  const [showEditKandang, setShowEditKandang] = useState(false);
  const [editKandangForm, setEditKandangForm] = useState({
    jumlahAyam: "",
    statusKesehatan: "baik" as Kandang["statusKesehatan"],
  });
  const [confirmDeleteKandang, setConfirmDeleteKandang] = useState<
    string | null
  >(null);
  const [kandangErrors, setKandangErrors] = useState<Record<string, string>>(
    {},
  );
  const [telurErrors, setTelurErrors] = useState<Record<string, string>>({});
  const [pakanErrors, setPakanErrors] = useState<Record<string, string>>({});
  const [kandangForm, setKandangForm] = useState({
    nama: "",
    kapasitas: "",
    jumlahAyam: "",
    jenisAyam: "petelur" as Kandang["jenisAyam"],
    statusKesehatan: "baik" as Kandang["statusKesehatan"],
  });
  const [telurForm, setTelurForm] = useState({
    kandangId: "",
    tanggal: format(new Date(), "yyyy-MM-dd"),
    jumlahTelur: "",
    catatan: "",
  });
  const [pakanForm, setPakanForm] = useState({
    kandangId: "",
    tanggal: format(new Date(), "yyyy-MM-dd"),
    jenisPakan: "",
    jumlahKg: "",
    biaya: "",
  });

  const selected = kandang.find((k) => k.id === selectedId);

  function inRiwayatPeriode(tanggal: string): boolean {
    if (filterRiwayatPeriode === "semua") return true;
    const d = parseDate(tanggal);
    const now = new Date();
    const days = filterRiwayatPeriode === "7hari" ? 6 : 29;
    const cutoff = subDays(now, days);
    cutoff.setHours(0, 0, 0, 0);
    return d >= cutoff;
  }

  const chartData = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = format(subDays(new Date(), 6 - i), "yyyy-MM-dd");
        const label = format(subDays(new Date(), 6 - i), "EEE", { locale: id });
        const total = produksi
          .filter(
            (p) =>
              (selectedId ? p.kandangId === selectedId : true) &&
              p.tanggal === d,
          )
          .reduce((s, p) => s + p.jumlahTelur, 0);
        return { hari: label, telur: total };
      }),
    [produksi, selectedId],
  );

  // ─── Handlers ─────────────────────────────────────────────────────────────
  function handleAddKandang() {
    const errors: Record<string, string> = {};
    if (!kandangForm.nama.trim()) errors.nama = "Nama kandang wajib diisi";
    const kap = Number(kandangForm.kapasitas) || 100;
    const ayam = Number(kandangForm.jumlahAyam) || 0;
    if (ayam > kap)
      errors.jumlahAyam = `Jumlah ayam tidak boleh melebihi kapasitas (${kap})`;
    if (ayam < 0) errors.jumlahAyam = "Jumlah ayam tidak boleh negatif";
    setKandangErrors(errors);
    if (Object.keys(errors).length > 0) return;
    const nk: Kandang = {
      id: generateId(),
      nama: kandangForm.nama,
      kapasitas: kap,
      jumlahAyam: ayam,
      jenisAyam: kandangForm.jenisAyam,
      statusKesehatan: kandangForm.statusKesehatan,
      createdAt: new Date().toISOString(),
    };
    setKandang([...kandang, nk]);
    setShowKandangForm(false);
    setKandangErrors({});
    setKandangForm({
      nama: "",
      kapasitas: "",
      jumlahAyam: "",
      jenisAyam: "petelur",
      statusKesehatan: "baik",
    });
    showToast(`Kandang "${nk.nama}" berhasil ditambahkan`, "success");
  }

  function openEditKandang(k: Kandang) {
    setEditKandangId(k.id);
    setEditKandangForm({
      jumlahAyam: String(k.jumlahAyam),
      statusKesehatan: k.statusKesehatan,
    });
    setShowEditKandang(true);
  }

  function handleSaveEditKandang() {
    if (!editKandangId) return;
    const ayam = Number(editKandangForm.jumlahAyam);
    const k = kandang.find((k) => k.id === editKandangId);
    if (k && ayam > k.kapasitas) {
      showToast(`Jumlah ayam melebihi kapasitas (${k.kapasitas})`, "error");
      return;
    }
    if (ayam < 0) {
      showToast("Jumlah ayam tidak boleh negatif", "error");
      return;
    }
    setKandang(
      kandang.map((k) =>
        k.id === editKandangId
          ? {
              ...k,
              jumlahAyam: isNaN(ayam) ? k.jumlahAyam : ayam,
              statusKesehatan: editKandangForm.statusKesehatan,
            }
          : k,
      ),
    );
    setShowEditKandang(false);
    setEditKandangId(null);
    showToast("Data kandang diperbarui", "success");
  }

  function handleAddTelur() {
    const errors: Record<string, string> = {};
    if (!telurForm.kandangId) errors.kandangId = "Pilih kandang";
    const n = Number(telurForm.jumlahTelur);
    if (!telurForm.jumlahTelur || isNaN(n) || n <= 0)
      errors.jumlahTelur = "Jumlah wajib > 0";
    setTelurErrors(errors);
    if (Object.keys(errors).length > 0) return;
    const nt: ProduksiTelur = {
      id: generateId(),
      kandangId: telurForm.kandangId,
      tanggal: telurForm.tanggal,
      jumlahTelur: n,
      catatan: telurForm.catatan,
    };
    setProduksi([...produksi, nt]);
    setShowTelurForm(false);
    setTelurErrors({});
    setTelurForm({
      kandangId: "",
      tanggal: format(new Date(), "yyyy-MM-dd"),
      jumlahTelur: "",
      catatan: "",
    });
    showToast(`${nt.jumlahTelur} butir telur berhasil dicatat`, "success");
  }

  function handleAddPakan() {
    const errors: Record<string, string> = {};
    if (!pakanForm.kandangId) errors.kandangId = "Pilih kandang";
    if (!pakanForm.jenisPakan.trim())
      errors.jenisPakan = "Jenis pakan wajib diisi";
    const kg = Number(pakanForm.jumlahKg);
    if (pakanForm.jumlahKg && (isNaN(kg) || kg < 0))
      errors.jumlahKg = "Jumlah tidak boleh negatif";
    setPakanErrors(errors);
    if (Object.keys(errors).length > 0) return;
    const np: PemberianPakan = {
      id: generateId(),
      kandangId: pakanForm.kandangId,
      tanggal: pakanForm.tanggal,
      jenisPakan: pakanForm.jenisPakan,
      jumlahKg: Math.max(0, kg || 0),
      biaya: Math.max(0, Number(pakanForm.biaya) || 0),
    };
    setPakan([...pakan, np]);
    setShowPakanForm(false);
    setPakanErrors({});
    setPakanForm({
      kandangId: "",
      tanggal: format(new Date(), "yyyy-MM-dd"),
      jenisPakan: "",
      jumlahKg: "",
      biaya: "",
    });
    showToast("Pemberian pakan berhasil dicatat", "success");
  }

  function doDeleteKandang() {
    if (!confirmDeleteKandang) return;
    setKandang(kandang.filter((k) => k.id !== confirmDeleteKandang));
    setProduksi(produksi.filter((p) => p.kandangId !== confirmDeleteKandang));
    setPakan(pakan.filter((p) => p.kandangId !== confirmDeleteKandang));
    // Hapus insiden penyakit terkait agar tidak orphan
    setInsidenList(
      insidenList.filter(
        (i) =>
          !(i.targetId === confirmDeleteKandang && i.targetTipe === "kandang"),
      ),
    );
    if (selectedId === confirmDeleteKandang) setSelectedId(null);
    setConfirmDeleteKandang(null);
    showToast("Kandang berhasil dihapus", "success");
  }

  function doDeleteProduksi() {
    if (!confirmDeleteProduksi) return;
    setProduksi(produksi.filter((p) => p.id !== confirmDeleteProduksi));
    setConfirmDeleteProduksi(null);
    showToast("Data produksi telur dihapus", "success");
  }

  function doDeletePakan() {
    if (!confirmDeletePakanId) return;
    setPakan(pakan.filter((p) => p.id !== confirmDeletePakanId));
    setConfirmDeletePakanId(null);
    showToast("Data pakan dihapus", "success");
  }

  function openEditProduksi(p: ProduksiTelur) {
    setEditProduksiId(p.id);
    setEditProduksiForm({
      jumlahTelur: String(p.jumlahTelur),
      catatan: p.catatan ?? "",
      tanggal: p.tanggal,
    });
  }

  function handleSaveEditProduksi() {
    if (!editProduksiId) return;
    const n = Number(editProduksiForm.jumlahTelur);
    if (isNaN(n) || n <= 0) {
      showToast("Jumlah telur harus lebih dari 0", "error");
      return;
    }
    setProduksi(
      produksi.map((p) =>
        p.id === editProduksiId
          ? {
              ...p,
              jumlahTelur: n,
              catatan: editProduksiForm.catatan || undefined,
              tanggal: editProduksiForm.tanggal,
            }
          : p,
      ),
    );
    setEditProduksiId(null);
    showToast("Data produksi telur diperbarui", "success");
  }

  function openEditPakan(p: PemberianPakan) {
    setEditPakanId(p.id);
    setEditPakanForm({
      jenisPakan: p.jenisPakan,
      jumlahKg: String(p.jumlahKg),
      biaya: String(p.biaya),
      tanggal: p.tanggal,
    });
  }

  function handleSaveEditPakan() {
    if (!editPakanId) return;
    const kg = Number(editPakanForm.jumlahKg);
    const biaya = Number(editPakanForm.biaya);
    if (!editPakanForm.jenisPakan.trim()) {
      showToast("Jenis pakan wajib diisi", "error");
      return;
    }
    setPakan(
      pakan.map((p) =>
        p.id === editPakanId
          ? {
              ...p,
              jenisPakan: editPakanForm.jenisPakan,
              jumlahKg: isNaN(kg) ? p.jumlahKg : Math.max(0, kg),
              biaya: isNaN(biaya) ? p.biaya : Math.max(0, biaya),
              tanggal: editPakanForm.tanggal,
            }
          : p,
      ),
    );
    setEditPakanId(null);
    showToast("Data pakan diperbarui", "success");
  }

  function exportKandangCSV() {
    const headers = ["Kandang", "Jenis", "Jumlah Ayam", "Kapasitas", "Status"];
    const rows = kandang.map((k) => [
      `"${k.nama}"`,
      k.jenisAyam,
      k.jumlahAyam,
      k.kapasitas,
      k.statusKesehatan,
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kandang-${today}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Export CSV berhasil", "success");
  }

  function exportProduksiCSV() {
    const headers = ["Kandang", "Tanggal", "Jumlah Telur", "Catatan"];
    const rows = [...produksi]
      .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
      .map((p) => {
        const k = kandang.find((k) => k.id === p.kandangId);
        return [
          `"${k?.nama ?? p.kandangId}"`,
          p.tanggal,
          p.jumlahTelur,
          `"${(p.catatan ?? "").replace(/"/g, '""')}"`,
        ];
      });
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `produksi-telur-${today}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Export CSV berhasil", "success");
  }

  const totalAyam = kandang.reduce((s, k) => s + k.jumlahAyam, 0);
  const totalTelurHariIni = produksi
    .filter((p) => p.tanggal === today)
    .reduce((s, p) => s + p.jumlahTelur, 0);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          {
            label: "Total Kandang",
            val: kandang.length,
            sub: "kandang aktif",
            color:
              "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
          },
          {
            label: "Total Ayam",
            val: totalAyam.toLocaleString("id"),
            sub: "ekor",
            color:
              "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400",
          },
          {
            label: "Telur Hari Ini",
            val: totalTelurHariIni.toLocaleString("id"),
            sub: "butir",
            color: "bg-primary/10 text-primary",
          },
          {
            label: "Perlu Perhatian",
            val: kandang.filter((k) => k.statusKesehatan !== "baik").length,
            sub: "kandang",
            color:
              "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-card rounded-2xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex p-2.5 rounded-xl mb-2 ${s.color}`}>
              <Bird className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide leading-tight">
              {s.label}
            </p>
            <p className="text-2xl font-extrabold text-foreground mt-0.5">
              {s.val}
            </p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
        <h3 className="font-semibold text-foreground mb-1">
          Produksi Telur 7 Hari{" "}
          {selectedId ? `– ${selected?.nama}` : "(Semua Kandang)"}
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="oklch(0.65 0.18 55)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="oklch(0.65 0.18 55)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 120)" />
            <XAxis dataKey="hari" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(v) => [`${v} butir`, "Telur"]} />
            <Area
              type="monotone"
              dataKey="telur"
              stroke="oklch(0.65 0.18 55)"
              strokeWidth={2.5}
              fill="url(#grad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Action Bar — responsive: wrap gracefully on mobile */}
      <div className="space-y-2">
        {/* Row 1: search + primary actions */}
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari kandang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 rounded-xl border border-input bg-background text-sm w-36 sm:w-44 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            onClick={() => setShowKandangForm(true)}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden xs:inline">Tambah</span>
            <span className="hidden sm:inline"> Kandang</span>
          </button>
          <button
            onClick={() => setShowTelurForm(true)}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-yellow-500 text-white rounded-xl text-sm font-medium hover:bg-yellow-600"
          >
            <Egg className="w-4 h-4" />
            <span className="hidden sm:inline">Catat Produksi Telur</span>
            <span className="sm:hidden">Telur</span>
          </button>
          <button
            onClick={() => setShowPakanForm(true)}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Catat Pemberian Pakan</span>
            <span className="sm:hidden">Pakan</span>
          </button>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={exportProduksiCSV}
              className="flex items-center gap-1.5 px-3 py-2 bg-card border border-border text-foreground rounded-xl text-sm hover:bg-muted"
              title="Export produksi telur CSV"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Telur CSV</span>
            </button>
            <button
              onClick={exportKandangCSV}
              className="flex items-center gap-1.5 px-3 py-2 bg-card border border-border text-foreground rounded-xl text-sm hover:bg-muted"
              title="Export data kandang CSV"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Kandang CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Kandang Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {kandang
          .filter(
            (k) =>
              search === "" ||
              k.nama.toLowerCase().includes(search.toLowerCase()) ||
              k.jenisAyam.toLowerCase().includes(search.toLowerCase()),
          )
          .map((k) => {
            const pct =
              k.kapasitas > 0
                ? Math.min(100, Math.round((k.jumlahAyam / k.kapasitas) * 100))
                : 0;
            const telurKandang = produksi
              .filter((p) => p.kandangId === k.id && p.tanggal === today)
              .reduce((s, p) => s + p.jumlahTelur, 0);
            return (
              <div
                key={k.id}
                onClick={() => setSelectedId(k.id === selectedId ? null : k.id)}
                className={`bg-card border rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all ${selectedId === k.id ? "border-primary ring-1 ring-primary/20 shadow-md" : "border-border"}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">{k.nama}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${jenisColor[k.jenisAyam]}`}
                    >
                      {jenisLabel[k.jenisAyam]}
                    </span>
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${statusCls[k.statusKesehatan]}`}
                  >
                    {k.statusKesehatan === "baik" ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : k.statusKesehatan === "kritis" ? (
                      <AlertTriangle className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {k.statusKesehatan.replaceAll("_", " ")}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                  <div className="bg-muted/50 rounded-xl p-2">
                    <p className="text-lg font-bold text-foreground">
                      {k.jumlahAyam}
                    </p>
                    <p className="text-xs text-muted-foreground">Ekor</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-2">
                    <p className="text-lg font-bold text-foreground">
                      {k.kapasitas}
                    </p>
                    <p className="text-xs text-muted-foreground">Kapasitas</p>
                  </div>
                  {k.jenisAyam === "petelur" ? (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-2">
                      <p className="text-lg font-bold text-yellow-600">
                        {telurKandang}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Telur/Hari
                      </p>
                    </div>
                  ) : (
                    <div className="bg-muted/50 rounded-xl p-2">
                      <p className="text-lg font-bold text-foreground">
                        {Math.round((k.jumlahAyam / k.kapasitas) * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Isi</p>
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Kapasitas</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-3 pt-2 border-t border-border">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditKandang(k);
                    }}
                    className="flex items-center gap-1 text-xs text-primary hover:text-primary/80"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirmDeleteKandang(k.id);
                    }}
                    className="text-xs text-red-500 hover:text-red-600"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* Riwayat produksi & pakan */}
      {selectedId && (
        <div className="bg-card rounded-2xl border border-border p-5">
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            {(["telur", "pakan"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setShowAllRiwayat(false);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === tab ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                {tab === "telur" ? "Produksi Telur" : "Pemberian Pakan"}
              </button>
            ))}
            <div className="flex gap-1 ml-auto">
              {(["7hari", "30hari", "semua"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterRiwayatPeriode(p)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${filterRiwayatPeriode === p ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {p === "7hari"
                    ? "7 Hari"
                    : p === "30hari"
                      ? "30 Hari"
                      : "Semua"}
                </button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {selected?.nama}
            </span>
          </div>

          {activeTab === "telur" &&
            (() => {
              const rows = produksi
                .filter(
                  (p) =>
                    p.kandangId === selectedId && inRiwayatPeriode(p.tanggal),
                )
                .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
              const displayed = showAllRiwayat ? rows : rows.slice(0, 10);
              const totalTelur = rows.reduce((s, p) => s + p.jumlahTelur, 0);
              return (
                <div className="space-y-2">
                  {rows.length > 0 && (
                    <div className="flex justify-between items-center px-3 py-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl text-sm mb-3">
                      <span className="text-muted-foreground">
                        Total periode ini
                      </span>
                      <span className="font-bold text-yellow-600">
                        {totalTelur.toLocaleString("id")} butir
                      </span>
                    </div>
                  )}
                  {displayed.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-xl text-sm"
                    >
                      {editProduksiId === p.id ? (
                        // ── inline edit form ──
                        <div className="flex-1 flex flex-wrap items-center gap-2">
                          <input
                            type="date"
                            value={editProduksiForm.tanggal}
                            onChange={(e) =>
                              setEditProduksiForm({
                                ...editProduksiForm,
                                tanggal: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs w-32"
                          />
                          <input
                            type="number"
                            min="1"
                            value={editProduksiForm.jumlahTelur}
                            onChange={(e) =>
                              setEditProduksiForm({
                                ...editProduksiForm,
                                jumlahTelur: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs w-20"
                            placeholder="Butir"
                          />
                          <input
                            type="text"
                            value={editProduksiForm.catatan}
                            onChange={(e) =>
                              setEditProduksiForm({
                                ...editProduksiForm,
                                catatan: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs flex-1 min-w-20"
                            placeholder="Catatan"
                          />
                          <button
                            onClick={handleSaveEditProduksi}
                            className="px-2.5 py-1 bg-primary text-primary-foreground rounded-lg text-xs font-medium"
                          >
                            Simpan
                          </button>
                          <button
                            onClick={() => setEditProduksiId(null)}
                            className="px-2.5 py-1 bg-muted text-muted-foreground rounded-lg text-xs"
                          >
                            Batal
                          </button>
                        </div>
                      ) : (
                        <>
                          <span className="text-muted-foreground">
                            {formatShortDate(p.tanggal)}
                          </span>
                          <span className="font-semibold text-yellow-600">
                            {p.jumlahTelur} butir
                          </span>
                          {p.catatan && (
                            <span className="text-xs text-muted-foreground truncate max-w-24">
                              {p.catatan}
                            </span>
                          )}
                          <div className="flex gap-1 ml-2">
                            <button
                              onClick={() => openEditProduksi(p)}
                              className="p-1 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setConfirmDeleteProduksi(p.id)}
                              className="p-1 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Hapus"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  {rows.length === 0 && (
                    <p className="text-center text-muted-foreground py-4 text-sm">
                      Belum ada data produksi
                    </p>
                  )}
                  {!showAllRiwayat && rows.length > 10 && (
                    <button
                      onClick={() => setShowAllRiwayat(true)}
                      className="w-full text-xs text-primary hover:underline py-2"
                    >
                      Lihat semua ({rows.length} data)
                    </button>
                  )}
                </div>
              );
            })()}

          {activeTab === "pakan" &&
            (() => {
              const rows = pakan
                .filter(
                  (p) =>
                    p.kandangId === selectedId && inRiwayatPeriode(p.tanggal),
                )
                .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
              const displayed = showAllRiwayat ? rows : rows.slice(0, 10);
              const totalKg = rows.reduce((s, p) => s + p.jumlahKg, 0);
              const totalBiaya = rows.reduce((s, p) => s + p.biaya, 0);
              return (
                <div className="space-y-2">
                  {rows.length > 0 && (
                    <div className="flex justify-between items-center px-3 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-sm mb-3">
                      <span className="text-muted-foreground">
                        Total periode ini
                      </span>
                      <span className="font-semibold text-foreground">
                        {totalKg.toLocaleString("id")} kg
                      </span>
                      <span className="font-bold text-orange-600">
                        Rp {totalBiaya.toLocaleString("id")}
                      </span>
                    </div>
                  )}
                  {displayed.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-xl text-sm"
                    >
                      {editPakanId === p.id ? (
                        // ── inline edit form ──
                        <div className="flex-1 flex flex-wrap items-center gap-2">
                          <input
                            type="date"
                            value={editPakanForm.tanggal}
                            onChange={(e) =>
                              setEditPakanForm({
                                ...editPakanForm,
                                tanggal: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs w-32"
                          />
                          <input
                            type="text"
                            value={editPakanForm.jenisPakan}
                            onChange={(e) =>
                              setEditPakanForm({
                                ...editPakanForm,
                                jenisPakan: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs flex-1 min-w-24"
                            placeholder="Jenis pakan"
                          />
                          <input
                            type="number"
                            min="0"
                            value={editPakanForm.jumlahKg}
                            onChange={(e) =>
                              setEditPakanForm({
                                ...editPakanForm,
                                jumlahKg: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs w-16"
                            placeholder="kg"
                          />
                          <input
                            type="number"
                            min="0"
                            value={editPakanForm.biaya}
                            onChange={(e) =>
                              setEditPakanForm({
                                ...editPakanForm,
                                biaya: e.target.value,
                              })
                            }
                            className="px-2 py-1 rounded-lg border border-input bg-background text-xs w-24"
                            placeholder="Biaya Rp"
                          />
                          <button
                            onClick={handleSaveEditPakan}
                            className="px-2.5 py-1 bg-primary text-primary-foreground rounded-lg text-xs font-medium"
                          >
                            Simpan
                          </button>
                          <button
                            onClick={() => setEditPakanId(null)}
                            className="px-2.5 py-1 bg-muted text-muted-foreground rounded-lg text-xs"
                          >
                            Batal
                          </button>
                        </div>
                      ) : (
                        <>
                          <div>
                            <p className="font-medium text-foreground">
                              {p.jenisPakan}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatShortDate(p.tanggal)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-foreground">
                              {p.jumlahKg} kg
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Rp {p.biaya.toLocaleString("id")}
                            </p>
                          </div>
                          <div className="flex gap-1 ml-2">
                            <button
                              onClick={() => openEditPakan(p)}
                              className="p-1 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setConfirmDeletePakanId(p.id)}
                              className="p-1 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Hapus"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  {rows.length === 0 && (
                    <p className="text-center text-muted-foreground py-4 text-sm">
                      Belum ada data pakan
                    </p>
                  )}
                  {!showAllRiwayat && rows.length > 10 && (
                    <button
                      onClick={() => setShowAllRiwayat(true)}
                      className="w-full text-xs text-primary hover:underline py-2"
                    >
                      Lihat semua ({rows.length} data)
                    </button>
                  )}
                </div>
              );
            })()}
        </div>
      )}

      {/* Modal Tambah Kandang */}
      {showKandangForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Tambah Kandang Baru</h3>
              <button onClick={() => setShowKandangForm(false)}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Nama Kandang *
                </label>
                <input
                  placeholder="cth: Kandang E – Layer 3"
                  value={kandangForm.nama}
                  onChange={(e) => {
                    setKandangForm({ ...kandangForm, nama: e.target.value });
                    setKandangErrors({ ...kandangErrors, nama: "" });
                  }}
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${kandangErrors.nama ? "border-red-400" : "border-input"}`}
                />
                {kandangErrors.nama && (
                  <p className="text-xs text-red-500 mt-1">
                    {kandangErrors.nama}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Kapasitas (ekor)
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="500"
                    value={kandangForm.kapasitas}
                    onChange={(e) =>
                      setKandangForm({
                        ...kandangForm,
                        kapasitas: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Jumlah Ayam
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="480"
                    value={kandangForm.jumlahAyam}
                    onChange={(e) => {
                      setKandangForm({
                        ...kandangForm,
                        jumlahAyam: e.target.value,
                      });
                      setKandangErrors({ ...kandangErrors, jumlahAyam: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${kandangErrors.jumlahAyam ? "border-red-400" : "border-input"}`}
                  />
                  {kandangErrors.jumlahAyam && (
                    <p className="text-xs text-red-500 mt-1">
                      {kandangErrors.jumlahAyam}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Jenis Ayam
                  </label>
                  <select
                    value={kandangForm.jenisAyam}
                    onChange={(e) =>
                      setKandangForm({
                        ...kandangForm,
                        jenisAyam: e.target.value as Kandang["jenisAyam"],
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  >
                    <option value="petelur">Petelur</option>
                    <option value="pedaging">Pedaging</option>
                    <option value="kampung">Kampung</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Status Kesehatan
                  </label>
                  <select
                    value={kandangForm.statusKesehatan}
                    onChange={(e) =>
                      setKandangForm({
                        ...kandangForm,
                        statusKesehatan: e.target
                          .value as Kandang["statusKesehatan"],
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  >
                    <option value="baik">Baik</option>
                    <option value="perlu_perhatian">Perlu Perhatian</option>
                    <option value="kritis">Kritis</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleAddKandang}
                className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90"
              >
                Simpan
              </button>
              <button
                onClick={() => setShowKandangForm(false)}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Catat Telur */}
      {showTelurForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">
                Catat Produksi Telur
              </h3>
              <button onClick={() => setShowTelurForm(false)}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Kandang *
                </label>
                <select
                  value={telurForm.kandangId}
                  onChange={(e) => {
                    setTelurForm({ ...telurForm, kandangId: e.target.value });
                    setTelurErrors({ ...telurErrors, kandangId: "" });
                  }}
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${telurErrors.kandangId ? "border-red-400" : "border-input"}`}
                >
                  <option value="">-- Pilih Kandang --</option>
                  {kandang.map((k) => (
                    <option key={k.id} value={k.id}>
                      {k.nama}
                    </option>
                  ))}
                </select>
                {telurErrors.kandangId && (
                  <p className="text-xs text-red-500 mt-1">
                    {telurErrors.kandangId}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={telurForm.tanggal}
                    onChange={(e) =>
                      setTelurForm({ ...telurForm, tanggal: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Jumlah Telur *
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="420"
                    value={telurForm.jumlahTelur}
                    onChange={(e) => {
                      setTelurForm({
                        ...telurForm,
                        jumlahTelur: e.target.value,
                      });
                      setTelurErrors({ ...telurErrors, jumlahTelur: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${telurErrors.jumlahTelur ? "border-red-400" : "border-input"}`}
                  />
                  {telurErrors.jumlahTelur && (
                    <p className="text-xs text-red-500 mt-1">
                      {telurErrors.jumlahTelur}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Catatan
                </label>
                <input
                  placeholder="Opsional..."
                  value={telurForm.catatan}
                  onChange={(e) =>
                    setTelurForm({ ...telurForm, catatan: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleAddTelur}
                className="flex-1 py-2.5 bg-yellow-500 text-white rounded-xl font-medium text-sm hover:bg-yellow-600"
              >
                Simpan
              </button>
              <button
                onClick={() => setShowTelurForm(false)}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Catat Pakan */}
      {showPakanForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">
                Catat Pemberian Pakan
              </h3>
              <button onClick={() => setShowPakanForm(false)}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Kandang *
                </label>
                <select
                  value={pakanForm.kandangId}
                  onChange={(e) => {
                    setPakanForm({ ...pakanForm, kandangId: e.target.value });
                    setPakanErrors({ ...pakanErrors, kandangId: "" });
                  }}
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${pakanErrors.kandangId ? "border-red-400" : "border-input"}`}
                >
                  <option value="">-- Pilih Kandang --</option>
                  {kandang.map((k) => (
                    <option key={k.id} value={k.id}>
                      {k.nama}
                    </option>
                  ))}
                </select>
                {pakanErrors.kandangId && (
                  <p className="text-xs text-red-500 mt-1">
                    {pakanErrors.kandangId}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={pakanForm.tanggal}
                    onChange={(e) =>
                      setPakanForm({ ...pakanForm, tanggal: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Jenis Pakan *
                  </label>
                  <input
                    placeholder="cth: BR1 Layer"
                    value={pakanForm.jenisPakan}
                    onChange={(e) => {
                      setPakanForm({
                        ...pakanForm,
                        jenisPakan: e.target.value,
                      });
                      setPakanErrors({ ...pakanErrors, jenisPakan: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${pakanErrors.jenisPakan ? "border-red-400" : "border-input"}`}
                  />
                  {pakanErrors.jenisPakan && (
                    <p className="text-xs text-red-500 mt-1">
                      {pakanErrors.jenisPakan}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Jumlah (kg)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="50"
                    value={pakanForm.jumlahKg}
                    onChange={(e) => {
                      setPakanForm({ ...pakanForm, jumlahKg: e.target.value });
                      setPakanErrors({ ...pakanErrors, jumlahKg: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${pakanErrors.jumlahKg ? "border-red-400" : "border-input"}`}
                  />
                  {pakanErrors.jumlahKg && (
                    <p className="text-xs text-red-500 mt-1">
                      {pakanErrors.jumlahKg}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Biaya (Rp)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="375000"
                    value={pakanForm.biaya}
                    onChange={(e) =>
                      setPakanForm({ ...pakanForm, biaya: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleAddPakan}
                className="flex-1 py-2.5 bg-orange-500 text-white rounded-xl font-medium text-sm hover:bg-orange-600"
              >
                Simpan
              </button>
              <button
                onClick={() => setShowPakanForm(false)}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit Kandang */}
      {showEditKandang && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Edit Kandang</h3>
              <button onClick={() => setShowEditKandang(false)}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Jumlah Ayam Saat Ini
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="480"
                  value={editKandangForm.jumlahAyam}
                  onChange={(e) =>
                    setEditKandangForm({
                      ...editKandangForm,
                      jumlahAyam: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Update setelah ada kematian, pembelian ayam baru, dll.
                </p>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Status Kesehatan
                </label>
                <select
                  value={editKandangForm.statusKesehatan}
                  onChange={(e) =>
                    setEditKandangForm({
                      ...editKandangForm,
                      statusKesehatan: e.target
                        .value as Kandang["statusKesehatan"],
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                >
                  <option value="baik">Baik</option>
                  <option value="perlu_perhatian">Perlu Perhatian</option>
                  <option value="kritis">Kritis</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleSaveEditKandang}
                className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90"
              >
                Simpan Perubahan
              </button>
              <button
                onClick={() => setShowEditKandang(false)}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={confirmDeleteKandang !== null}
        title="Hapus Kandang"
        message="Yakin hapus kandang ini? Semua data produksi telur dan pakan terkait juga akan dihapus."
        onConfirm={doDeleteKandang}
        onCancel={() => setConfirmDeleteKandang(null)}
      />
      <ConfirmDialog
        open={confirmDeleteProduksi !== null}
        title="Hapus Data Produksi"
        message="Yakin hapus catatan produksi telur ini?"
        onConfirm={doDeleteProduksi}
        onCancel={() => setConfirmDeleteProduksi(null)}
      />
      <ConfirmDialog
        open={confirmDeletePakanId !== null}
        title="Hapus Data Pakan"
        message="Yakin hapus catatan pemberian pakan ini?"
        onConfirm={doDeletePakan}
        onCancel={() => setConfirmDeletePakanId(null)}
      />
    </div>
  );
}
