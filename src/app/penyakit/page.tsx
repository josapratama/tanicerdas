"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  X,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Search,
  Bug,
  Leaf,
  Bird,
  Pencil,
  Activity,
} from "lucide-react";
import { useAppStore, generateId } from "@/lib/store";
import { formatShortDate, todayString } from "@/lib/utils";
import { showToast } from "@/components/ui/toast";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import type { InsidenPenyakit } from "@/lib/types";
import { dataPenyakitPanduan, dataPenyakitTernak } from "@/lib/panduan";

const statusConfig: Record<
  InsidenPenyakit["status"],
  { label: string; cls: string; icon: React.ElementType }
> = {
  aktif: {
    label: "Aktif",
    cls: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
    icon: AlertTriangle,
  },
  dalam_penanganan: {
    label: "Dalam Penanganan",
    cls: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
    icon: Clock,
  },
  sembuh: {
    label: "Sembuh",
    cls: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    icon: CheckCircle2,
  },
};

const emptyForm = () => ({
  targetTipe: "tanaman" as InsidenPenyakit["targetTipe"],
  targetId: "",
  penyakitId: "",
  tanggal: todayString(),
  deskripsi: "",
  status: "aktif" as InsidenPenyakit["status"],
});

export default function PenyakitPage() {
  const insiden = useAppStore((s) => s.insidenPenyakit);
  const setInsiden = useAppStore((s) => s.setInsidenPenyakit);
  const tanaman = useAppStore((s) => s.tanaman);
  const kandang = useAppStore((s) => s.kandang);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<
    InsidenPenyakit["status"] | "semua"
  >("semua");
  const [filterTipe, setFilterTipe] = useState<
    InsidenPenyakit["targetTipe"] | "semua"
  >("semua");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(emptyForm());
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Daftar target sesuai tipe yang dipilih di form
  const targetOptions =
    form.targetTipe === "tanaman"
      ? tanaman.map((t) => ({ id: t.id, nama: t.nama }))
      : kandang.map((k) => ({ id: k.id, nama: k.nama }));

  const filtered = useMemo(() => {
    return insiden
      .filter((i) => filterStatus === "semua" || i.status === filterStatus)
      .filter((i) => filterTipe === "semua" || i.targetTipe === filterTipe)
      .filter((i) => {
        if (!search) return true;
        const target =
          i.targetTipe === "tanaman"
            ? tanaman.find((t) => t.id === i.targetId)?.nama
            : kandang.find((k) => k.id === i.targetId)?.nama;
        return (
          (target ?? "").toLowerCase().includes(search.toLowerCase()) ||
          i.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
          i.penyakitId.toLowerCase().includes(search.toLowerCase())
        );
      })
      .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  }, [insiden, filterStatus, filterTipe, search, tanaman, kandang]);

  const stats = useMemo(
    () => ({
      aktif: insiden.filter((i) => i.status === "aktif").length,
      penanganan: insiden.filter((i) => i.status === "dalam_penanganan").length,
      sembuh: insiden.filter((i) => i.status === "sembuh").length,
      total: insiden.length,
    }),
    [insiden],
  );

  function getTargetNama(i: InsidenPenyakit): string {
    if (i.targetTipe === "tanaman") {
      return tanaman.find((t) => t.id === i.targetId)?.nama ?? i.targetId;
    }
    return kandang.find((k) => k.id === i.targetId)?.nama ?? i.targetId;
  }

  function openAdd() {
    setEditId(null);
    setForm(emptyForm());
    setErrors({});
    setShowForm(true);
  }

  function openEdit(i: InsidenPenyakit) {
    setEditId(i.id);
    setForm({
      targetTipe: i.targetTipe,
      targetId: i.targetId,
      penyakitId: i.penyakitId,
      tanggal: i.tanggal,
      deskripsi: i.deskripsi,
      status: i.status,
    });
    setErrors({});
    setShowForm(true);
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.targetId) e.targetId = "Pilih target (tanaman/kandang)";
    if (!form.penyakitId.trim()) e.penyakitId = "Nama/ID penyakit wajib diisi";
    if (!form.deskripsi.trim()) e.deskripsi = "Deskripsi gejala wajib diisi";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    if (editId) {
      setInsiden(
        insiden.map((i) =>
          i.id === editId
            ? {
                ...i,
                targetTipe: form.targetTipe,
                targetId: form.targetId,
                penyakitId: form.penyakitId,
                tanggal: form.tanggal,
                deskripsi: form.deskripsi,
                status: form.status,
              }
            : i,
        ),
      );
      showToast("Insiden berhasil diperbarui", "success");
    } else {
      const ni: InsidenPenyakit = {
        id: generateId(),
        penyakitId: form.penyakitId,
        targetId: form.targetId,
        targetTipe: form.targetTipe,
        tanggal: form.tanggal,
        deskripsi: form.deskripsi,
        status: form.status,
        createdAt: new Date().toISOString(),
      };
      setInsiden([...insiden, ni]);
      showToast("Insiden penyakit berhasil dicatat", "success");
    }
    setShowForm(false);
    setEditId(null);
    setForm(emptyForm());
    setErrors({});
  }

  function doDelete() {
    if (!confirmDeleteId) return;
    setInsiden(insiden.filter((i) => i.id !== confirmDeleteId));
    setConfirmDeleteId(null);
    showToast("Insiden berhasil dihapus", "success");
  }

  function handleUpdateStatus(id: string, status: InsidenPenyakit["status"]) {
    setInsiden(insiden.map((i) => (i.id === id ? { ...i, status } : i)));
    showToast(`Status diubah ke "${statusConfig[status].label}"`, "success");
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {[
          {
            label: "Total Insiden",
            val: stats.total,
            color: "bg-muted text-muted-foreground",
            icon: Activity,
          },
          {
            label: "Aktif",
            val: stats.aktif,
            color:
              "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400",
            icon: AlertTriangle,
          },
          {
            label: "Dalam Penanganan",
            val: stats.penanganan,
            color:
              "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400",
            icon: Clock,
          },
          {
            label: "Sembuh",
            val: stats.sembuh,
            color:
              "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400",
            icon: CheckCircle2,
          },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-2.5 rounded-xl mb-2 ${s.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-extrabold text-foreground">{s.val}</p>
              <p className="text-xs font-medium text-muted-foreground mt-0.5">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Toolbar */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari insiden..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 rounded-xl border border-input bg-background text-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            onClick={openAdd}
            className="ml-auto flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Catat Insiden</span>
            <span className="sm:hidden">Tambah</span>
          </button>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {(["semua", "aktif", "dalam_penanganan", "sembuh"] as const).map(
            (s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${filterStatus === s ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
              >
                {s === "semua"
                  ? "Semua Status"
                  : statusConfig[s as InsidenPenyakit["status"]].label}
              </button>
            ),
          )}
          <div className="w-px bg-border shrink-0" />
          {(["semua", "tanaman", "kandang"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterTipe(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${filterTipe === t ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
            >
              {t === "tanaman" && <Leaf className="w-3 h-3" />}
              {t === "kandang" && <Bird className="w-3 h-3" />}
              {t === "semua"
                ? "Semua Tipe"
                : t === "tanaman"
                  ? "Tanaman"
                  : "Kandang"}
            </button>
          ))}
        </div>
      </div>

      {/* Daftar insiden */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Bug className="w-12 h-12 mb-3 opacity-30" />
          <p className="font-medium">
            {search || filterStatus !== "semua" || filterTipe !== "semua"
              ? "Tidak ada insiden yang cocok"
              : "Belum ada insiden penyakit tercatat"}
          </p>
          <p className="text-sm mt-1">
            {search || filterStatus !== "semua" || filterTipe !== "semua"
              ? "Coba ubah filter"
              : `Klik "Catat Insiden" untuk mulai`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((i) => {
            const st = statusConfig[i.status];
            const StatusIcon = st.icon;
            const isKandang = i.targetTipe === "kandang";
            return (
              <div
                key={i.id}
                className="bg-card border border-border rounded-2xl p-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${isKandang ? "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400" : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"}`}
                    >
                      {isKandang ? (
                        <Bird className="w-5 h-5" />
                      ) : (
                        <Leaf className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-semibold text-foreground">
                          {getTargetNama(i)}
                        </span>
                        <span
                          className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${st.cls}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {st.label}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-primary mb-1">
                        🦠 {i.penyakitId}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {i.deskripsi}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        📅 {formatShortDate(i.tanggal)} ·{" "}
                        {isKandang ? "Kandang" : "Tanaman"}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => openEdit(i)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setConfirmDeleteId(i.id)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
                      title="Hapus"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Status update bar */}
                {i.status !== "sembuh" && (
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground self-center">
                      Update status:
                    </span>
                    {(
                      [
                        "aktif",
                        "dalam_penanganan",
                        "sembuh",
                      ] as InsidenPenyakit["status"][]
                    )
                      .filter((s) => s !== i.status)
                      .map((s) => {
                        const sc = statusConfig[s];
                        const Ic = sc.icon;
                        return (
                          <button
                            key={s}
                            onClick={() => handleUpdateStatus(i.id, s)}
                            className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-xl border transition-colors hover:opacity-80 ${sc.cls} border-current/20`}
                          >
                            <Ic className="w-3 h-3" />
                            {sc.label}
                          </button>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-5 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">
                {editId ? "Edit Insiden" : "Catat Insiden Penyakit"}
              </h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                  setForm(emptyForm());
                  setErrors({});
                }}
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              {/* Target tipe */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Tipe Target
                  </label>
                  <select
                    value={form.targetTipe}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        targetTipe: e.target
                          .value as InsidenPenyakit["targetTipe"],
                        targetId: "",
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  >
                    <option value="tanaman">Tanaman</option>
                    <option value="kandang">Kandang</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={form.tanggal}
                    onChange={(e) =>
                      setForm({ ...form, tanggal: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  />
                </div>
              </div>

              {/* Target */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  {form.targetTipe === "tanaman" ? "Tanaman" : "Kandang"} *
                </label>
                <select
                  value={form.targetId}
                  onChange={(e) =>
                    setForm({ ...form, targetId: e.target.value })
                  }
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${errors.targetId ? "border-red-400" : "border-input"}`}
                >
                  <option value="">
                    -- Pilih{" "}
                    {form.targetTipe === "tanaman" ? "tanaman" : "kandang"} --
                  </option>
                  {targetOptions.length === 0 && (
                    <option disabled>
                      Belum ada{" "}
                      {form.targetTipe === "tanaman" ? "tanaman" : "kandang"}
                    </option>
                  )}
                  {targetOptions.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.nama}
                    </option>
                  ))}
                </select>
                {errors.targetId && (
                  <p className="text-xs text-red-500 mt-1">{errors.targetId}</p>
                )}
              </div>

              {/* Nama penyakit — dengan autocomplete dari dataPenyakitPanduan + dataPenyakitTernak */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Nama / Jenis Penyakit *
                </label>
                <input
                  type="text"
                  list="penyakit-suggestions"
                  placeholder="cth: Antraknosa, Thrips, Newcastle Disease..."
                  value={form.penyakitId}
                  onChange={(e) => {
                    setForm({ ...form, penyakitId: e.target.value });
                    setErrors({ ...errors, penyakitId: "" });
                  }}
                  onBlur={(e) => {
                    // Normalise: trim & title-case first letter
                    const v = e.target.value.trim();
                    if (v)
                      setForm((f) => ({
                        ...f,
                        penyakitId: v.charAt(0).toUpperCase() + v.slice(1),
                      }));
                  }}
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${errors.penyakitId ? "border-red-400" : "border-input"}`}
                />
                <datalist id="penyakit-suggestions">
                  {dataPenyakitPanduan.map((p) => (
                    <option key={p.id} value={p.nama} />
                  ))}
                  {dataPenyakitTernak.map((p) => (
                    <option key={p.id} value={p.nama} />
                  ))}
                </datalist>
                {errors.penyakitId && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.penyakitId}
                  </p>
                )}
              </div>

              {/* Status */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value as InsidenPenyakit["status"],
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                >
                  <option value="aktif">Aktif</option>
                  <option value="dalam_penanganan">Dalam Penanganan</option>
                  <option value="sembuh">Sembuh</option>
                </select>
              </div>

              {/* Deskripsi */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Deskripsi Gejala *
                </label>
                <textarea
                  rows={3}
                  placeholder="Deskripsikan gejala yang terlihat, tindakan yang sudah diambil, dll."
                  value={form.deskripsi}
                  onChange={(e) => {
                    setForm({ ...form, deskripsi: e.target.value });
                    setErrors({ ...errors, deskripsi: "" });
                  }}
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm resize-none ${errors.deskripsi ? "border-red-400" : "border-input"}`}
                />
                {errors.deskripsi && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.deskripsi}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={handleSave}
                className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90"
              >
                {editId ? "Simpan Perubahan" : "Catat Insiden"}
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                  setForm(emptyForm());
                  setErrors({});
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
        title="Hapus Insiden"
        message="Yakin ingin menghapus catatan insiden penyakit ini? Aksi ini tidak bisa dibatalkan."
        onConfirm={doDelete}
        onCancel={() => setConfirmDeleteId(null)}
      />
    </div>
  );
}
