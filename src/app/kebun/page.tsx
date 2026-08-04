"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  Leaf,
  MapPin,
  Calendar,
  X,
  Check,
  Pencil,
  Search,
  Download,
  ArrowUpDown,
  BarChart2,
  Sprout,
  Trash2,
} from "lucide-react";
import {
  Tanaman,
  FaseTanaman,
  CatatanTanaman,
  PanenRecord,
  Transaksi,
  KategoriTransaksi,
} from "@/lib/types";
import { useAppStore, generateId } from "@/lib/store";
import { formatShortDate } from "@/lib/utils";
import { format } from "date-fns";
import { showToast } from "@/components/ui/toast";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const faseList: FaseTanaman[] = [
  "semai",
  "pindah_tanam",
  "berbunga",
  "berbuah",
  "panen",
];
const faseLabel: Record<FaseTanaman, string> = {
  semai: "Semai",
  pindah_tanam: "Pindah Tanam",
  berbunga: "Berbunga",
  berbuah: "Berbuah",
  panen: "Panen",
};
const fasePct: Record<FaseTanaman, number> = {
  semai: 10,
  pindah_tanam: 30,
  berbunga: 55,
  berbuah: 78,
  panen: 100,
};
const faseColor: Record<FaseTanaman, string> = {
  semai: "bg-sky-500",
  pindah_tanam: "bg-blue-500",
  berbunga: "bg-purple-500",
  berbuah: "bg-orange-500",
  panen: "bg-green-500",
};
const faseBadge: Record<FaseTanaman, string> = {
  semai: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  pindah_tanam:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  berbunga:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  berbuah:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  panen: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};
const kondisiColor = {
  sehat: "text-green-600",
  kurang_sehat: "text-yellow-600",
  sakit: "text-red-500",
};
const kondisiLabel = {
  sehat: "Sehat",
  kurang_sehat: "Kurang Sehat",
  sakit: "Sakit",
};

const JENIS_TANAMAN_OPTIONS = [
  "Cabai",
  "Tomat",
  "Terong",
  "Semangka",
  "Melon",
  "Timun",
  "Paria / Pare",
  "Labu Siam",
  "Jagung Manis",
  "Kangkung",
  "Bayam",
  "Singkong",
  "Ubi Jalar",
  "Lainnya",
];

const emptyTanamanForm = () => ({
  nama: "",
  jenisTanaman: "Cabai",
  varietas: "",
  fase: "semai" as FaseTanaman,
  tanggalSemai: format(new Date(), "yyyy-MM-dd"),
  luasLahan: "",
  lokasiKebun: "",
});
const emptyCatatanForm = () => ({
  tanggal: format(new Date(), "yyyy-MM-dd"),
  tinggi: "",
  kondisi: "sehat" as CatatanTanaman["kondisi"],
  catatan: "",
  fotoUrl: "",
});

export default function KebunPage() {
  // ─── Zustand ──────────────────────────────────────────────────────────────
  const tanaman = useAppStore((s) => s.tanaman);
  const setTanaman = useAppStore((s) => s.setTanaman);
  const catatan = useAppStore((s) => s.catatanTanaman);
  const setCatatan = useAppStore((s) => s.setCatatanTanaman);
  const panenList = useAppStore((s) => s.panenRecord);
  const setPanenList = useAppStore((s) => s.setPanenRecord);
  const insidenList = useAppStore((s) => s.insidenPenyakit);
  const setInsidenList = useAppStore((s) => s.setInsidenPenyakit);
  const transaksi = useAppStore((s) => s.transaksi);
  const setTransaksi = useAppStore((s) => s.setTransaksi);

  // ─── UI State ─────────────────────────────────────────────────────────────
  const [filterFase, setFilterFase] = useState<FaseTanaman | "semua">("semua");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editTanamanId, setEditTanamanId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showCatatanForm, setShowCatatanForm] = useState(false);
  const [editCatatanId, setEditCatatanId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [confirmDeleteCatatanId, setConfirmDeleteCatatanId] = useState<
    string | null
  >(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [catatanErrors, setCatatanErrors] = useState<Record<string, string>>(
    {},
  );
  const [sortBy, setSortBy] = useState<"nama" | "fase" | "tanggal">("tanggal");
  const [showStats, setShowStats] = useState(false);
  const [showPanenForm, setShowPanenForm] = useState(false);
  const [panenTanamanId, setPanenTanamanId] = useState<string | null>(null);
  const [panenErrors, setPanenErrors] = useState<Record<string, string>>({});
  const [confirmDeletePanenId, setConfirmDeletePanenId] = useState<
    string | null
  >(null);
  const [panenForm, setPanenForm] = useState({
    tanggal: format(new Date(), "yyyy-MM-dd"),
    beratKg: "",
    hargaPerKg: "",
    catatan: "",
  });
  const [form, setForm] = useState(emptyTanamanForm());
  const [catatanForm, setCatatanForm] = useState(emptyCatatanForm());

  // ─── Derived ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const base = tanaman
      .filter((t) => filterFase === "semua" || t.fase === filterFase)
      .filter(
        (t) =>
          search === "" ||
          t.nama.toLowerCase().includes(search.toLowerCase()) ||
          t.varietas.toLowerCase().includes(search.toLowerCase()) ||
          t.lokasiKebun.toLowerCase().includes(search.toLowerCase()),
      );
    return [...base].sort((a, b) => {
      if (sortBy === "nama") return a.nama.localeCompare(b.nama);
      if (sortBy === "fase")
        return faseList.indexOf(a.fase) - faseList.indexOf(b.fase);
      return b.createdAt.localeCompare(a.createdAt);
    });
  }, [tanaman, filterFase, search, sortBy]);

  const stats = useMemo(() => {
    const totalLuas = tanaman.reduce((s, t) => s + t.luasLahan, 0);
    const perFase = faseList.map((f) => ({
      fase: f,
      label: faseLabel[f],
      count: tanaman.filter((t) => t.fase === f).length,
    }));
    const kondisiMap = tanaman.map((t) => {
      const latest = catatan
        .filter((c) => c.tanamanId === t.id)
        .sort((a, b) => b.tanggal.localeCompare(a.tanggal))[0];
      return latest?.kondisi ?? "sehat";
    });
    const sakit = kondisiMap.filter((k) => k === "sakit").length;
    const kurangSehat = kondisiMap.filter((k) => k === "kurang_sehat").length;
    const totalPanen = panenList.reduce((s, p) => s + p.beratKg, 0);
    const totalNilaiPanen = panenList.reduce(
      (s, p) => s + p.beratKg * p.hargaPerKg,
      0,
    );
    return {
      totalLuas,
      perFase,
      sakit,
      kurangSehat,
      totalPanen,
      totalNilaiPanen,
    };
  }, [tanaman, catatan, panenList]);

  const selected = tanaman.find((t) => t.id === selectedId);
  const selectedCatatan = useMemo(
    () =>
      catatan
        .filter((c) => c.tanamanId === selectedId)
        .sort((a, b) => b.tanggal.localeCompare(a.tanggal)),
    [catatan, selectedId],
  );

  // ─── Handlers ─────────────────────────────────────────────────────────────
  function openAddTanaman() {
    setEditTanamanId(null);
    setForm(emptyTanamanForm());
    setFormErrors({});
    setShowForm(true);
  }
  function openEditTanaman(t: Tanaman) {
    setEditTanamanId(t.id);
    setForm({
      nama: t.nama,
      jenisTanaman: t.jenisTanaman ?? "Cabai",
      varietas: t.varietas,
      fase: t.fase,
      tanggalSemai: t.tanggalSemai,
      luasLahan: String(t.luasLahan),
      lokasiKebun: t.lokasiKebun,
    });
    setFormErrors({});
    setShowForm(true);
  }

  function handleSaveTanaman() {
    const errors: Record<string, string> = {};
    if (!form.nama.trim()) errors.nama = "Nama wajib diisi";
    if (!form.varietas.trim()) errors.varietas = "Varietas wajib diisi";
    if (!form.lokasiKebun.trim()) errors.lokasiKebun = "Lokasi wajib diisi";
    const luas = Number(form.luasLahan);
    if (form.luasLahan && (isNaN(luas) || luas <= 0))
      errors.luasLahan = "Luas harus > 0";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    if (editTanamanId) {
      const updated = tanaman.map((t) =>
        t.id === editTanamanId
          ? {
              ...t,
              nama: form.nama,
              jenisTanaman: form.jenisTanaman,
              varietas: form.varietas,
              fase: form.fase,
              tanggalSemai: form.tanggalSemai,
              luasLahan: luas || t.luasLahan,
              lokasiKebun: form.lokasiKebun,
            }
          : t,
      );
      setTanaman(updated);
      showToast("Data tanaman berhasil diperbarui", "success");
    } else {
      const newT: Tanaman = {
        id: generateId(),
        nama: form.nama,
        jenisTanaman: form.jenisTanaman,
        varietas: form.varietas,
        fase: form.fase,
        tanggalSemai: form.tanggalSemai,
        luasLahan: isNaN(luas) || luas <= 0 ? 100 : luas,
        lokasiKebun: form.lokasiKebun,
        catatan: [],
        createdAt: new Date().toISOString(),
      };
      setTanaman([...tanaman, newT]);
      showToast(`Tanaman "${newT.nama}" berhasil ditambahkan`, "success");
    }
    setShowForm(false);
    setFormErrors({});
    setForm(emptyTanamanForm());
  }

  function doDelete() {
    if (!confirmDeleteId) return;
    setTanaman(tanaman.filter((t) => t.id !== confirmDeleteId));
    setCatatan(catatan.filter((c) => c.tanamanId !== confirmDeleteId));
    setPanenList(panenList.filter((p) => p.tanamanId !== confirmDeleteId));
    // Hapus insiden penyakit terkait agar tidak orphan
    setInsidenList(
      insidenList.filter(
        (i) => !(i.targetId === confirmDeleteId && i.targetTipe === "tanaman"),
      ),
    );
    if (selectedId === confirmDeleteId) setSelectedId(null);
    setConfirmDeleteId(null);
    showToast("Tanaman berhasil dihapus", "success");
  }

  function handleFaseChange(tId: string, fase: FaseTanaman) {
    setTanaman(tanaman.map((t) => (t.id === tId ? { ...t, fase } : t)));
    showToast(`Fase diubah ke ${faseLabel[fase]}`, "success");
  }

  function openAddCatatan() {
    setEditCatatanId(null);
    setCatatanForm(emptyCatatanForm());
    setCatatanErrors({});
    setShowCatatanForm(true);
  }
  function openEditCatatan(c: CatatanTanaman) {
    setEditCatatanId(c.id);
    setCatatanForm({
      tanggal: c.tanggal,
      tinggi: c.tinggi > 0 ? String(c.tinggi) : "",
      kondisi: c.kondisi,
      catatan: c.catatan,
      fotoUrl: c.fotoUrl ?? "",
    });
    setCatatanErrors({});
    setShowCatatanForm(true);
  }

  function handleSaveCatatan() {
    const errors: Record<string, string> = {};
    if (!catatanForm.catatan.trim()) errors.catatan = "Catatan wajib diisi";
    setCatatanErrors(errors);
    if (!selectedId || Object.keys(errors).length > 0) return;
    if (editCatatanId) {
      const updated = catatan.map((c) =>
        c.id === editCatatanId
          ? {
              ...c,
              tanggal: catatanForm.tanggal,
              tinggi: Number(catatanForm.tinggi) || 0,
              kondisi: catatanForm.kondisi,
              catatan: catatanForm.catatan,
              fotoUrl: catatanForm.fotoUrl || undefined,
            }
          : c,
      );
      setCatatan(updated);
      showToast("Catatan berhasil diperbarui", "success");
    } else {
      const nc: CatatanTanaman = {
        id: generateId(),
        tanamanId: selectedId,
        tanggal: catatanForm.tanggal,
        tinggi: Number(catatanForm.tinggi) || 0,
        kondisi: catatanForm.kondisi,
        catatan: catatanForm.catatan,
        fotoUrl: catatanForm.fotoUrl || undefined,
      };
      setCatatan([...catatan, nc]);
      showToast("Catatan berhasil disimpan", "success");
    }
    setShowCatatanForm(false);
    setCatatanErrors({});
    setCatatanForm(emptyCatatanForm());
    setEditCatatanId(null);
  }

  function doDeleteCatatan() {
    if (!confirmDeleteCatatanId) return;
    setCatatan(catatan.filter((c) => c.id !== confirmDeleteCatatanId));
    setConfirmDeleteCatatanId(null);
    showToast("Catatan berhasil dihapus", "success");
  }

  function openPanen(tId: string) {
    setPanenTanamanId(tId);
    setPanenForm({
      tanggal: format(new Date(), "yyyy-MM-dd"),
      beratKg: "",
      hargaPerKg: "",
      catatan: "",
    });
    setPanenErrors({});
    setShowPanenForm(true);
  }

  function handleSavePanen() {
    const errors: Record<string, string> = {};
    const berat = Number(panenForm.beratKg);
    const harga = Number(panenForm.hargaPerKg);
    if (!panenForm.beratKg || isNaN(berat) || berat <= 0)
      errors.beratKg = "Berat wajib > 0";
    if (!panenForm.hargaPerKg || isNaN(harga) || harga <= 0)
      errors.hargaPerKg = "Harga wajib > 0";
    setPanenErrors(errors);
    if (!panenTanamanId || Object.keys(errors).length > 0) return;
    const record: PanenRecord = {
      id: generateId(),
      tanamanId: panenTanamanId,
      tanggal: panenForm.tanggal,
      beratKg: berat,
      hargaPerKg: harga,
      catatan: panenForm.catatan || undefined,
      createdAt: new Date().toISOString(),
    };
    setPanenList([...panenList, record]);
    // Otomatis tambah transaksi penjualan ke keuangan
    const tNama = tanaman.find((t) => t.id === panenTanamanId)?.nama ?? "Panen";
    const newTx: Transaksi = {
      id: generateId(),
      tanggal: panenForm.tanggal,
      tipe: "pemasukan",
      kategori: "penjualan_tanaman" as KategoriTransaksi,
      jumlah: Math.round(berat * harga),
      deskripsi: `Panen ${tNama} – ${berat} kg @ Rp ${harga.toLocaleString("id")}/kg`,
      createdAt: new Date().toISOString(),
    };
    setTransaksi([...transaksi, newTx]);
    setShowPanenForm(false);
    setPanenTanamanId(null);
    showToast(
      `Panen ${berat} kg dicatat · Rp ${(berat * harga).toLocaleString("id")} ditambah ke Keuangan`,
      "success",
    );
  }

  function doDeletePanen() {
    if (!confirmDeletePanenId) return;
    setPanenList(panenList.filter((p) => p.id !== confirmDeletePanenId));
    setConfirmDeletePanenId(null);
    showToast("Data panen dihapus", "success");
  }

  function exportKebunCSV() {
    const headers = [
      "Jenis",
      "Nama",
      "Varietas",
      "Fase",
      "Lokasi",
      "Luas (m²)",
      "Tanggal Semai",
    ];
    const rows = tanaman.map((t) => [
      `"${t.jenisTanaman ?? ""}"`,
      `"${t.nama}"`,
      `"${t.varietas}"`,
      faseLabel[t.fase],
      `"${t.lokasiKebun}"`,
      t.luasLahan,
      t.tanggalSemai,
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kebun-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Export CSV berhasil", "success");
  }

  function exportPanenCSV() {
    const headers = [
      "Tanaman",
      "Tanggal",
      "Berat (kg)",
      "Harga/kg",
      "Total (Rp)",
      "Catatan",
    ];
    const rows = panenList.map((p) => {
      const t = tanaman.find((t) => t.id === p.tanamanId);
      return [
        `"${t?.nama ?? p.tanamanId}"`,
        p.tanggal,
        p.beratKg,
        p.hargaPerKg,
        p.beratKg * p.hargaPerKg,
        `"${(p.catatan ?? "").replace(/"/g, '""')}"`,
      ];
    });
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `panen-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Export CSV panen berhasil", "success");
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────
  return (
    <div className="flex gap-6 h-full">
      {/* Panel kiri */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Toolbar — Row 1: search + tambah */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari tanaman..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-3 py-1.5 rounded-xl border border-input bg-background text-sm w-full sm:w-44 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          {/* Sort + stats + export — collapsed on mobile */}
          <div className="hidden sm:flex items-center gap-1 border border-border rounded-xl overflow-hidden">
            <ArrowUpDown className="w-3.5 h-3.5 ml-2 text-muted-foreground shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="text-xs py-1.5 pr-2 bg-transparent text-muted-foreground focus:outline-none"
            >
              <option value="tanggal">Terbaru</option>
              <option value="nama">Nama A-Z</option>
              <option value="fase">Fase</option>
            </select>
          </div>
          <button
            onClick={() => setShowStats(!showStats)}
            title="Statistik"
            className={`p-2 rounded-xl border border-border transition-colors hidden sm:flex ${showStats ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
          >
            <BarChart2 className="w-4 h-4" />
          </button>
          <div className="hidden sm:flex gap-1">
            <button
              onClick={exportKebunCSV}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-card border border-border text-muted-foreground rounded-xl text-xs hover:bg-muted"
              title="Export kebun CSV"
            >
              <Download className="w-3.5 h-3.5" /> Kebun
            </button>
            {panenList.length > 0 && (
              <button
                onClick={exportPanenCSV}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-card border border-border text-muted-foreground rounded-xl text-xs hover:bg-muted"
                title="Export panen CSV"
              >
                <Download className="w-3.5 h-3.5" /> Panen
              </button>
            )}
          </div>
          <button
            onClick={openAddTanaman}
            className="ml-auto flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Tambah Tanaman</span>
            <span className="sm:hidden">Tambah</span>
          </button>
        </div>
        {/* Toolbar — Row 2: fase filter (scrollable on mobile) */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {(["semua", ...faseList] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilterFase(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${filterFase === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
            >
              {f === "semua" ? "Semua" : faseLabel[f as FaseTanaman]}
            </button>
          ))}
          {/* Mobile-only: sort inline */}
          <div className="sm:hidden flex items-center gap-1 border border-border rounded-xl overflow-hidden shrink-0 ml-auto">
            <ArrowUpDown className="w-3.5 h-3.5 ml-2 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="text-xs py-1.5 pr-2 bg-transparent text-muted-foreground focus:outline-none"
            >
              <option value="tanggal">Terbaru</option>
              <option value="nama">Nama A-Z</option>
              <option value="fase">Fase</option>
            </select>
          </div>
        </div>

        {/* Stats panel */}
        {showStats && (
          <div className="bg-card border border-border rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Total Tanaman</p>
              <p className="text-2xl font-bold text-foreground">
                {tanaman.length}
              </p>
              <p className="text-xs text-muted-foreground">
                {stats.totalLuas.toLocaleString("id")} m² lahan
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Perlu Perhatian</p>
              <p className="text-2xl font-bold text-red-500">{stats.sakit}</p>
              <p className="text-xs text-muted-foreground">
                {stats.kurangSehat} kurang sehat
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Panen</p>
              <p className="text-2xl font-bold text-green-600">
                {stats.totalPanen.toLocaleString("id")} kg
              </p>
              <p className="text-xs text-muted-foreground">
                Rp {stats.totalNilaiPanen.toLocaleString("id")}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Distribusi Fase
              </p>
              {stats.perFase
                .filter((f) => f.count > 0)
                .map((f) => (
                  <div
                    key={f.fase}
                    className="flex items-center justify-between text-xs mb-0.5"
                  >
                    <span
                      className={`px-1.5 py-0.5 rounded-full ${faseBadge[f.fase as FaseTanaman]}`}
                    >
                      {f.label}
                    </span>
                    <span className="font-semibold text-foreground">
                      {f.count}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Tanaman Cards */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <Leaf className="w-12 h-12 mb-3 opacity-30" />
            <p className="font-medium">
              {search || filterFase !== "semua"
                ? "Tidak ada tanaman yang cocok"
                : "Belum ada tanaman"}
            </p>
            <p className="text-sm">
              {search || filterFase !== "semua"
                ? "Coba ubah filter"
                : ` Klik "Tambah Tanaman" untuk mulai`}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedId(t.id === selectedId ? null : t.id)}
              className={`bg-card border rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md ${selectedId === t.id ? "border-primary shadow-md ring-1 ring-primary/20" : "border-border"}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {t.jenisTanaman && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0">
                        {t.jenisTanaman}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-foreground truncate">
                    {t.nama}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.varietas}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ml-2 ${faseBadge[t.fase]}`}
                >
                  {faseLabel[t.fase]}
                </span>
              </div>
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {t.lokasiKebun} · {t.luasLahan} m²
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Semai: {formatShortDate(t.tanggalSemai)}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{fasePct[t.fase]}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${faseColor[t.fase]}`}
                    style={{ width: `${fasePct[t.fase]}%` }}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-3">
                {faseList.map((f, i) => {
                  const cur = faseList.indexOf(t.fase);
                  return (
                    <button
                      key={f}
                      title={faseLabel[f]}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFaseChange(t.id, f);
                      }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${i <= cur ? `${faseColor[f]} text-white` : "bg-muted text-muted-foreground"}`}
                    >
                      {i < cur ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <span className="text-xs">{i + 1}</span>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-3 mt-3 pt-3 border-t border-border">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditTanaman(t);
                  }}
                  className="flex items-center gap-1 text-xs text-primary hover:text-primary/80"
                >
                  <Pencil className="w-3.5 h-3.5" /> Edit
                </button>
                {(t.fase === "panen" || t.fase === "berbuah") && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPanen(t.id);
                    }}
                    className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700"
                  >
                    <Sprout className="w-3.5 h-3.5" /> Catat Panen
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmDeleteId(t.id);
                  }}
                  className="text-xs text-red-500 hover:text-red-600"
                >
                  Hapus
                </button>
                {panenList.filter((p) => p.tanamanId === t.id).length > 0 && (
                  <span className="ml-auto text-xs text-green-600 font-medium">
                    {panenList
                      .filter((p) => p.tanamanId === t.id)
                      .reduce((s, p) => s + p.beratKg, 0)}{" "}
                    kg dipanen
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel kanan – detail: modal di mobile, side panel di desktop */}
      {selected && (
        <>
          {/* Mobile overlay backdrop */}
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setSelectedId(null)}
          />
          {/* Panel — drawer bawah di mobile, side panel di desktop */}
          <div
            className={[
              "fixed bottom-0 left-0 right-0 z-40 max-h-[80vh] overflow-y-auto rounded-t-2xl",
              "lg:static lg:max-h-none lg:z-auto lg:rounded-none lg:overflow-visible",
              "w-full lg:w-80 lg:shrink-0",
              "bg-card lg:bg-transparent",
              "shadow-2xl lg:shadow-none",
              "space-y-4 p-4 lg:p-0",
            ].join(" ")}
          >
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-foreground">{selected.nama}</h3>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2 text-sm">
                {selected.jenisTanaman && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jenis</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary">
                      {selected.jenisTanaman}
                    </span>
                  </div>
                )}
                {[
                  ["Varietas", selected.varietas],
                  ["Luas", `${selected.luasLahan} m²`],
                  ["Lokasi", selected.lokasiKebun],
                  ["Semai", formatShortDate(selected.tanggalSemai)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fase</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${faseBadge[selected.fase]}`}
                  >
                    {faseLabel[selected.fase]}
                  </span>
                </div>
              </div>
            </div>

            {/* Riwayat Panen */}
            {panenList.filter((p) => p.tanamanId === selected.id).length >
              0 && (
              <div className="bg-card border border-border rounded-2xl p-4">
                <h4 className="font-semibold text-sm text-foreground mb-3">
                  Riwayat Panen
                </h4>
                <div className="space-y-2">
                  {panenList
                    .filter((p) => p.tanamanId === selected.id)
                    .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
                    .map((p) => (
                      <div
                        key={p.id}
                        className="flex justify-between text-xs p-2 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-foreground">
                            {p.beratKg} kg
                          </p>
                          <p className="text-muted-foreground">
                            {formatShortDate(p.tanggal)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">
                            Rp {(p.beratKg * p.hargaPerKg).toLocaleString("id")}
                          </p>
                          <p className="text-muted-foreground">
                            Rp {p.hargaPerKg.toLocaleString("id")}/kg
                          </p>
                        </div>
                        <button
                          onClick={() => setConfirmDeletePanenId(p.id)}
                          className="ml-2 p-1 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors self-center"
                          title="Hapus panen"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Catatan Harian */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground text-sm">
                  Catatan Harian
                </h4>
                <button
                  onClick={openAddCatatan}
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah
                </button>
              </div>
              {showCatatanForm && (
                <div className="space-y-2 mb-4 p-3 bg-muted/50 rounded-xl">
                  <p className="text-xs font-semibold text-muted-foreground">
                    {editCatatanId ? "Edit Catatan" : "Catatan Baru"}
                  </p>
                  <input
                    type="date"
                    value={catatanForm.tanggal}
                    onChange={(e) =>
                      setCatatanForm({
                        ...catatanForm,
                        tanggal: e.target.value,
                      })
                    }
                    className="w-full text-xs px-3 py-2 rounded-lg border border-input bg-background"
                  />
                  <input
                    type="number"
                    min="0"
                    placeholder="Tinggi (cm)"
                    value={catatanForm.tinggi}
                    onChange={(e) =>
                      setCatatanForm({ ...catatanForm, tinggi: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2 rounded-lg border border-input bg-background"
                  />
                  <select
                    value={catatanForm.kondisi}
                    onChange={(e) =>
                      setCatatanForm({
                        ...catatanForm,
                        kondisi: e.target.value as CatatanTanaman["kondisi"],
                      })
                    }
                    className="w-full text-xs px-3 py-2 rounded-lg border border-input bg-background"
                  >
                    <option value="sehat">Sehat</option>
                    <option value="kurang_sehat">Kurang Sehat</option>
                    <option value="sakit">Sakit</option>
                  </select>
                  <textarea
                    placeholder="Catatan..."
                    value={catatanForm.catatan}
                    onChange={(e) => {
                      setCatatanForm({
                        ...catatanForm,
                        catatan: e.target.value,
                      });
                      setCatatanErrors({ ...catatanErrors, catatan: "" });
                    }}
                    rows={2}
                    className={`w-full text-xs px-3 py-2 rounded-lg border bg-background resize-none ${catatanErrors.catatan ? "border-red-400" : "border-input"}`}
                  />
                  {catatanErrors.catatan && (
                    <p className="text-xs text-red-500">
                      {catatanErrors.catatan}
                    </p>
                  )}
                  <input
                    type="url"
                    placeholder="URL foto (opsional)"
                    value={catatanForm.fotoUrl}
                    onChange={(e) =>
                      setCatatanForm({
                        ...catatanForm,
                        fotoUrl: e.target.value,
                      })
                    }
                    className="w-full text-xs px-3 py-2 rounded-lg border border-input bg-background"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveCatatan}
                      className="flex-1 text-xs py-1.5 bg-primary text-primary-foreground rounded-lg"
                    >
                      {editCatatanId ? "Perbarui" : "Simpan"}
                    </button>
                    <button
                      onClick={() => {
                        setShowCatatanForm(false);
                        setEditCatatanId(null);
                        setCatatanErrors({});
                      }}
                      className="flex-1 text-xs py-1.5 bg-muted text-muted-foreground rounded-lg"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {selectedCatatan.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4">
                    Belum ada catatan
                  </p>
                )}
                {selectedCatatan.map((c) => (
                  <div
                    key={c.id}
                    className="p-3 rounded-xl bg-muted/50 text-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-muted-foreground">
                        {formatShortDate(c.tanggal)}
                      </span>
                      <span
                        className={`font-semibold ${kondisiColor[c.kondisi]}`}
                      >
                        {kondisiLabel[c.kondisi]}
                      </span>
                    </div>
                    {c.tinggi > 0 && (
                      <p className="text-muted-foreground">
                        Tinggi: {c.tinggi} cm
                      </p>
                    )}
                    <p className="text-foreground mt-1">{c.catatan}</p>
                    {c.fotoUrl && (
                      <a
                        href={c.fotoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.fotoUrl}
                          alt="foto tanaman"
                          className="w-full max-h-32 object-cover rounded-lg border border-border"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </a>
                    )}
                    <div className="flex gap-3 mt-2 pt-2 border-t border-border/50">
                      <button
                        onClick={() => openEditCatatan(c)}
                        className="flex items-center gap-1 text-primary hover:text-primary/80"
                      >
                        <Pencil className="w-3 h-3" />
                        Edit
                      </button>
                      <button
                        onClick={() => setConfirmDeleteCatatanId(c.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </> /* end mobile overlay + panel */
      )}

      {/* Modal Tambah/Edit Tanaman */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">
                {editTanamanId ? "Edit Tanaman" : "Tambah Tanaman Baru"}
              </h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditTanamanId(null);
                  setFormErrors({});
                  setForm(emptyTanamanForm());
                }}
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              {/* Jenis Tanaman — dropdown */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Jenis Tanaman *
                </label>
                <select
                  value={form.jenisTanaman}
                  onChange={(e) =>
                    setForm({ ...form, jenisTanaman: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                >
                  {JENIS_TANAMAN_OPTIONS.map((j) => (
                    <option key={j} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
              </div>
              {[
                {
                  label: "Nama Tanaman *",
                  field: "nama",
                  placeholder: "cth: Semangka Blok A / Melon Blok B",
                },
                {
                  label: "Varietas *",
                  field: "varietas",
                  placeholder: "cth: Semangka Non-Biji, Melon Golden",
                },
                {
                  label: "Lokasi Kebun *",
                  field: "lokasiKebun",
                  placeholder: "cth: Kebun Utara",
                },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    {label}
                  </label>
                  <input
                    placeholder={placeholder}
                    value={form[field as keyof typeof form] as string}
                    onChange={(e) => {
                      setForm({ ...form, [field]: e.target.value });
                      setFormErrors({ ...formErrors, [field]: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${formErrors[field] ? "border-red-400" : "border-input"}`}
                  />
                  {formErrors[field] && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors[field]}
                    </p>
                  )}
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Fase Awal
                  </label>
                  <select
                    value={form.fase}
                    onChange={(e) =>
                      setForm({ ...form, fase: e.target.value as FaseTanaman })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  >
                    {faseList.map((f) => (
                      <option key={f} value={f}>
                        {faseLabel[f]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Luas (m²)
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="100"
                    value={form.luasLahan}
                    onChange={(e) =>
                      setForm({ ...form, luasLahan: e.target.value })
                    }
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${formErrors.luasLahan ? "border-red-400" : "border-input"}`}
                  />
                  {formErrors.luasLahan && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.luasLahan}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Tanggal Semai
                </label>
                <input
                  type="date"
                  value={form.tanggalSemai}
                  onChange={(e) =>
                    setForm({ ...form, tanggalSemai: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleSaveTanaman}
                className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90"
              >
                {editTanamanId ? "Simpan Perubahan" : "Simpan"}
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditTanamanId(null);
                  setFormErrors({});
                  setForm(emptyTanamanForm());
                }}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Catat Panen */}
      {showPanenForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-foreground">Catat Hasil Panen</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {tanaman.find((t) => t.id === panenTanamanId)?.nama}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowPanenForm(false);
                  setPanenTanamanId(null);
                  setPanenErrors({});
                }}
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Tanggal Panen
                </label>
                <input
                  type="date"
                  value={panenForm.tanggal}
                  onChange={(e) =>
                    setPanenForm({ ...panenForm, tanggal: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Berat (kg) *
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="50"
                    value={panenForm.beratKg}
                    onChange={(e) => {
                      setPanenForm({ ...panenForm, beratKg: e.target.value });
                      setPanenErrors({ ...panenErrors, beratKg: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${panenErrors.beratKg ? "border-red-400" : "border-input"}`}
                  />
                  {panenErrors.beratKg && (
                    <p className="text-xs text-red-500 mt-1">
                      {panenErrors.beratKg}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Harga/kg (Rp) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="25000"
                    value={panenForm.hargaPerKg}
                    onChange={(e) => {
                      setPanenForm({
                        ...panenForm,
                        hargaPerKg: e.target.value,
                      });
                      setPanenErrors({ ...panenErrors, hargaPerKg: "" });
                    }}
                    className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${panenErrors.hargaPerKg ? "border-red-400" : "border-input"}`}
                  />
                  {panenErrors.hargaPerKg && (
                    <p className="text-xs text-red-500 mt-1">
                      {panenErrors.hargaPerKg}
                    </p>
                  )}
                </div>
              </div>
              {panenForm.beratKg &&
                panenForm.hargaPerKg &&
                Number(panenForm.beratKg) > 0 &&
                Number(panenForm.hargaPerKg) > 0 && (
                  <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <p className="text-xs text-muted-foreground">
                      Estimasi Nilai
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      Rp{" "}
                      {(
                        Number(panenForm.beratKg) * Number(panenForm.hargaPerKg)
                      ).toLocaleString("id")}
                    </p>
                  </div>
                )}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Catatan (opsional)
                </label>
                <input
                  placeholder="cth: Kualitas baik, ukuran besar"
                  value={panenForm.catatan}
                  onChange={(e) =>
                    setPanenForm({ ...panenForm, catatan: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleSavePanen}
                className="flex-1 py-2.5 bg-green-600 text-white rounded-xl font-medium text-sm hover:bg-green-700"
              >
                Simpan
              </button>
              <button
                onClick={() => {
                  setShowPanenForm(false);
                  setPanenTanamanId(null);
                  setPanenErrors({});
                }}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={confirmDeleteId !== null}
        title="Hapus Tanaman"
        message="Yakin hapus tanaman ini? Semua catatan dan data panen terkait juga akan dihapus."
        onConfirm={doDelete}
        onCancel={() => setConfirmDeleteId(null)}
      />
      <ConfirmDialog
        open={confirmDeleteCatatanId !== null}
        title="Hapus Catatan"
        message="Yakin hapus catatan ini?"
        onConfirm={doDeleteCatatan}
        onCancel={() => setConfirmDeleteCatatanId(null)}
      />
      <ConfirmDialog
        open={confirmDeletePanenId !== null}
        title="Hapus Data Panen"
        message="Yakin hapus data panen ini? Aksi ini tidak bisa dibatalkan."
        onConfirm={doDeletePanen}
        onCancel={() => setConfirmDeletePanenId(null)}
      />
    </div>
  );
}
