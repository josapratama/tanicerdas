"use client";

import { useState } from "react";
import {
  Plus,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Pencil,
} from "lucide-react";
import { EventPlanner, JenisEvent } from "@/lib/types";
import { useAppStore, generateId } from "@/lib/store";
import { parseDate, formatShortDate, todayString } from "@/lib/utils";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { id } from "date-fns/locale";
import { showToast } from "@/components/ui/toast";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const jenisConfig: Record<
  JenisEvent,
  { label: string; color: string; dot: string }
> = {
  semai: {
    label: "Semai",
    color: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
    dot: "bg-sky-500",
  },
  pindah_tanam: {
    label: "Pindah Tanam",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  pemupukan: {
    label: "Pemupukan",
    color: "bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300",
    dot: "bg-lime-500",
  },
  penyemprotan: {
    label: "Penyemprotan",
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    dot: "bg-cyan-500",
  },
  vaksinasi: {
    label: "Vaksinasi",
    color:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  panen: {
    label: "Panen",
    color:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    dot: "bg-green-500",
  },
  lainnya: {
    label: "Lainnya",
    color: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    dot: "bg-gray-400",
  },
};
const hariNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const emptyForm = () => ({
  judul: "",
  tanggal: format(new Date(), "yyyy-MM-dd"),
  jenisEvent: "semai" as JenisEvent,
  deskripsi: "",
});

export default function PlannerPage() {
  // ─── Zustand ──────────────────────────────────────────────────────────────
  const events = useAppStore((s) => s.eventPlanner);
  const setEvents = useAppStore((s) => s.setEventPlanner);

  // ─── UI State ─────────────────────────────────────────────────────────────
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editEventId, setEditEventId] = useState<string | null>(null);
  const [filterJenis, setFilterJenis] = useState<JenisEvent | "semua">("semua");
  const [activeTab, setActiveTab] = useState<"kalender" | "list">("kalender");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());

  // Bug fix: centralized close handler — resets form state to prevent
  // stale data appearing when opening "Tambah" after editing
  function closeForm() {
    setShowForm(false);
    setEditEventId(null);
    setFormErrors({});
    setForm(emptyForm());
  }

  // Calendar helpers
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startPad = monthStart.getDay();
  const paddedDays: (Date | null)[] = [...Array(startPad).fill(null), ...days];

  function getEventsForDay(day: Date) {
    return events.filter((e) => isSameDay(parseDate(e.tanggal), day));
  }

  // CRUD
  function handleSave() {
    const errors: Record<string, string> = {};
    if (!form.judul.trim()) errors.judul = "Judul wajib diisi";
    if (!form.tanggal) errors.tanggal = "Tanggal wajib diisi";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    if (editEventId) {
      setEvents(
        events.map((e) =>
          e.id === editEventId
            ? {
                ...e,
                judul: form.judul,
                tanggal: form.tanggal,
                jenisEvent: form.jenisEvent,
                deskripsi: form.deskripsi,
              }
            : e,
        ),
      );
      showToast("Jadwal berhasil diperbarui", "success");
    } else {
      const nw: EventPlanner = {
        id: generateId(),
        judul: form.judul,
        tanggal: form.tanggal,
        jenisEvent: form.jenisEvent,
        deskripsi: form.deskripsi,
        selesai: false,
        createdAt: new Date().toISOString(),
      };
      setEvents([...events, nw]);
      showToast("Jadwal berhasil ditambahkan", "success");
    }
    setShowForm(false);
    setFormErrors({});
    setEditEventId(null);
    setForm(emptyForm());
  }

  function openEdit(e: EventPlanner) {
    setEditEventId(e.id);
    setForm({
      judul: e.judul,
      tanggal: e.tanggal,
      jenisEvent: e.jenisEvent,
      deskripsi: e.deskripsi ?? "",
    });
    setFormErrors({});
    setShowForm(true);
  }

  function handleToggle(eid: string) {
    const ev = events.find((e) => e.id === eid);
    setEvents(
      events.map((e) => (e.id === eid ? { ...e, selesai: !e.selesai } : e)),
    );
    showToast(
      ev?.selesai ? "Jadwal ditandai belum selesai" : "Jadwal selesai ✓",
      "success",
    );
  }

  function doDelete() {
    if (!confirmDelete) return;
    setEvents(events.filter((e) => e.id !== confirmDelete));
    setConfirmDelete(null);
    showToast("Jadwal dihapus", "success");
  }

  // Bug fix: centralized close — selalu reset form agar data lama
  // tidak muncul ketika user buka "Tambah Jadwal" setelah edit
  // (fungsi closeForm sudah didefinisikan di atas)

  const today = new Date();
  const todayStr = todayString();

  const upcoming = events
    .filter((e) => !e.selesai && e.tanggal >= todayStr)
    .sort((a, b) => a.tanggal.localeCompare(b.tanggal));
  const completed = events.filter((e) => e.selesai).length;
  const filteredList =
    filterJenis === "semua"
      ? events
      : events.filter((e) => e.jenisEvent === filterJenis);
  const selectedEvents = selectedDate ? getEventsForDay(selectedDate) : [];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Event", val: events.length },
          { label: "Mendatang", val: upcoming.length },
          { label: "Selesai", val: completed },
          {
            label: "Bulan Ini",
            val: events.filter((e) =>
              e.tanggal.startsWith(format(currentMonth, "yyyy-MM")),
            ).length,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-card border border-border rounded-2xl p-4 shadow-sm"
          >
            <p className="text-2xl font-bold text-foreground">{s.val}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs + Add */}
      <div className="flex items-center gap-2 flex-wrap">
        {(["kalender", "list"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === t ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
          >
            {t === "kalender" ? "📅 Kalender" : "📋 Daftar"}
          </button>
        ))}
        <button
          onClick={() => {
            setEditEventId(null);
            setForm(emptyForm());
            setFormErrors({});
            setShowForm(true);
          }}
          className="ml-auto flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" /> Tambah Jadwal
        </button>
      </div>

      {/* Kalender View */}
      {activeTab === "kalender" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground text-lg">
                {format(currentMonth, "MMMM yyyy", { locale: id })}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentMonth(new Date())}
                  className="px-3 py-1.5 rounded-xl text-xs hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hari Ini
                </button>
                <button
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 mb-2">
              {hariNames.map((h) => (
                <div
                  key={h}
                  className="text-center text-xs font-semibold text-muted-foreground py-2"
                >
                  {h}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {paddedDays.map((day, i) => {
                if (!day) return <div key={`pad-${i}`} />;
                const dayEvents = getEventsForDay(day);
                const isToday = isSameDay(day, today);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isCurMonth = isSameMonth(day, currentMonth);
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(isSelected ? null : day)}
                    className={`relative min-h-13 p-1.5 rounded-xl text-xs transition-all flex flex-col items-center ${isSelected ? "bg-primary text-primary-foreground ring-2 ring-primary/40" : isToday ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted text-foreground"} ${!isCurMonth ? "opacity-30" : ""}`}
                  >
                    <span className="font-semibold mb-1">
                      {format(day, "d")}
                    </span>
                    <div className="flex gap-0.5 flex-wrap justify-center">
                      {dayEvents.slice(0, 3).map((e) => (
                        <span
                          key={e.id}
                          className={`w-1.5 h-1.5 rounded-full ${jenisConfig[e.jenisEvent].dot} ${e.selesai ? "opacity-40" : ""}`}
                        />
                      ))}
                      {dayEvents.length > 3 && (
                        <span className="text-[10px] text-muted-foreground">
                          +{dayEvents.length - 3}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
              {Object.entries(jenisConfig).map(([key, cfg]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                  <span className="text-xs text-muted-foreground">
                    {cfg.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detail + Upcoming */}
          <div className="space-y-4">
            {selectedDate && (
              <div className="bg-card border border-border rounded-2xl p-4">
                <h4 className="font-semibold text-foreground mb-3">
                  {format(selectedDate, "EEEE, d MMMM yyyy", { locale: id })}
                </h4>
                {selectedEvents.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Tidak ada jadwal
                  </p>
                ) : (
                  <div className="space-y-2">
                    {selectedEvents.map((e) => (
                      <div
                        key={e.id}
                        className="flex items-start gap-2 p-3 bg-muted/50 rounded-xl"
                      >
                        <span
                          className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${jenisConfig[e.jenisEvent].dot}`}
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-medium ${e.selesai ? "line-through text-muted-foreground" : "text-foreground"}`}
                          >
                            {e.judul}
                          </p>
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded-full ${jenisConfig[e.jenisEvent].color}`}
                          >
                            {jenisConfig[e.jenisEvent].label}
                          </span>
                          {e.deskripsi && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {e.deskripsi}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-1 shrink-0">
                          <button
                            onClick={() => openEdit(e)}
                            className="p-1 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleToggle(e.id)}
                            className={`p-1 rounded-lg ${e.selesai ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"}`}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="bg-card border border-border rounded-2xl p-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-primary" />
                Jadwal Mendatang
              </h4>
              {upcoming.slice(0, 6).length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Tidak ada jadwal mendatang
                </p>
              )}
              <div className="space-y-2">
                {upcoming.slice(0, 6).map((e) => (
                  <div
                    key={e.id}
                    className="flex items-start gap-2 p-3 bg-muted/50 rounded-xl"
                  >
                    <span
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${jenisConfig[e.jenisEvent].dot}`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {e.judul}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatShortDate(e.tanggal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* List View */}
      {activeTab === "list" && (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {(["semua", ...Object.keys(jenisConfig)] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilterJenis(f as typeof filterJenis)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${filterJenis === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
              >
                {f === "semua" ? "Semua" : jenisConfig[f as JenisEvent]?.label}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {filteredList
              .sort((a, b) => a.tanggal.localeCompare(b.tanggal))
              .map((e) => (
                <div
                  key={e.id}
                  className="bg-card border border-border rounded-2xl p-4 flex items-start gap-3"
                >
                  <button
                    onClick={() => handleToggle(e.id)}
                    className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${e.selesai ? "bg-green-500 border-green-500 text-white" : "border-muted-foreground"}`}
                  >
                    {e.selesai && <Check className="w-3 h-3" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p
                        className={`font-medium ${e.selesai ? "line-through text-muted-foreground" : "text-foreground"}`}
                      >
                        {e.judul}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${jenisConfig[e.jenisEvent].color}`}
                      >
                        {jenisConfig[e.jenisEvent].label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(parseDate(e.tanggal), "EEEE, d MMMM yyyy", {
                        locale: id,
                      })}
                    </p>
                    {e.deskripsi && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {e.deskripsi}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => openEdit(e)}
                    className="shrink-0 p-1 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setConfirmDelete(e.id)}
                    className="shrink-0 text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            {filteredList.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <CalendarDays className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Belum ada jadwal</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Tambah/Edit */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">
                {editEventId ? "Edit Jadwal" : "Tambah Jadwal"}
              </h3>
              <button onClick={closeForm}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Judul *
                </label>
                <input
                  placeholder="cth: Panen Cabai Blok F"
                  value={form.judul}
                  onChange={(e) => {
                    setForm({ ...form, judul: e.target.value });
                    setFormErrors({ ...formErrors, judul: "" });
                  }}
                  className={`w-full px-3 py-2 rounded-xl border bg-background text-sm ${formErrors.judul ? "border-red-400" : "border-input"}`}
                />
                {formErrors.judul && (
                  <p className="text-xs text-red-500 mt-1">
                    {formErrors.judul}
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
                    value={form.tanggal}
                    onChange={(e) =>
                      setForm({ ...form, tanggal: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Jenis
                  </label>
                  <select
                    value={form.jenisEvent}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        jenisEvent: e.target.value as JenisEvent,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm"
                  >
                    {Object.entries(jenisConfig).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Deskripsi
                </label>
                <textarea
                  rows={3}
                  placeholder="Keterangan tambahan..."
                  value={form.deskripsi}
                  onChange={(e) =>
                    setForm({ ...form, deskripsi: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm resize-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleSave}
                className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90"
              >
                {editEventId ? "Simpan Perubahan" : "Simpan"}
              </button>
              <button
                onClick={closeForm}
                className="flex-1 py-2.5 bg-muted text-muted-foreground rounded-xl font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
      <ConfirmDialog
        open={confirmDelete !== null}
        title="Hapus Jadwal"
        message="Yakin ingin menghapus jadwal ini? Aksi ini tidak bisa dibatalkan."
        onConfirm={doDelete}
        onCancel={() => setConfirmDelete(null)}
      />
    </div>
  );
}
