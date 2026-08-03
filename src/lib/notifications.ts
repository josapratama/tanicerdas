import { useAppStore } from "./store";
import { todayString, parseDate } from "./utils";
import { format, differenceInDays } from "date-fns";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "warning" | "info" | "success" | "danger";
  link?: string;
}

/**
 * Derive actionable notifications from current app state.
 * Called on demand – no side effects.
 */
export function getNotifications(): Notification[] {
  const state = useAppStore.getState();
  const notifs: Notification[] = [];
  const today = todayString();
  const todayDate = new Date();

  // 1. Kandang kritis / perlu perhatian
  state.kandang.forEach((k) => {
    if (k.statusKesehatan === "kritis") {
      notifs.push({
        id: `kandang-kritis-${k.id}`,
        title: "Kandang Kritis",
        message: `${k.nama} memerlukan penanganan segera`,
        type: "danger",
        link: "/ternak",
      });
    } else if (k.statusKesehatan === "perlu_perhatian") {
      notifs.push({
        id: `kandang-perhatian-${k.id}`,
        title: "Perlu Perhatian",
        message: `${k.nama} perlu dipantau`,
        type: "warning",
        link: "/ternak",
      });
    }
  });

  // 2. Insiden penyakit aktif
  const aktif = state.insidenPenyakit.filter((i) => i.status === "aktif");
  if (aktif.length > 0) {
    notifs.push({
      id: "insiden-aktif",
      title: "Penyakit Aktif",
      message: `${aktif.length} insiden penyakit masih aktif`,
      type: "danger",
      link: "/penyakit",
    });
  }

  // 3. Jadwal planner hari ini / overdue
  // Bug fix: pakai differenceInDays saja — menghindari double-trigger
  // karena isBefore(T00:00, now=T13:00) = true sehingga event hari ini
  // bisa masuk dua kondisi sekaligus.
  state.eventPlanner.forEach((ev) => {
    if (ev.selesai) return;
    const evDate = parseDate(ev.tanggal);
    const diff = differenceInDays(evDate, todayDate);
    if (diff === 0) {
      notifs.push({
        id: `planner-today-${ev.id}`,
        title: "Jadwal Hari Ini",
        message: ev.judul,
        type: "info",
        link: "/planner",
      });
    } else if (diff < 0) {
      notifs.push({
        id: `planner-overdue-${ev.id}`,
        title: "Jadwal Terlewat",
        message: `${ev.judul} (${format(evDate, "d MMM")})`,
        type: "warning",
        link: "/planner",
      });
    }
  });

  // 4. Tanaman sakit
  const sakit = state.catatanTanaman
    .filter((c) => c.kondisi === "sakit")
    .map((c) => c.tanamanId);
  const uniqueSakit = [...new Set(sakit)];
  uniqueSakit.forEach((tid) => {
    const t = state.tanaman.find((t) => t.id === tid);
    if (!t) return;
    // Only the latest catatan for this tanaman
    const latest = state.catatanTanaman
      .filter((c) => c.tanamanId === tid)
      .sort((a, b) => b.tanggal.localeCompare(a.tanggal))[0];
    if (latest?.kondisi === "sakit") {
      notifs.push({
        id: `tanaman-sakit-${tid}`,
        title: "Tanaman Sakit",
        message: `${t.nama} dalam kondisi sakit`,
        type: "danger",
        link: "/kebun",
      });
    }
  });

  // 5. Tidak ada telur dicatat hari ini (jika ada kandang petelur)
  const petelurKandang = state.kandang.filter((k) => k.jenisAyam === "petelur");
  if (petelurKandang.length > 0) {
    const telurHariIni = state.produksiTelur.filter((p) => p.tanggal === today);
    if (telurHariIni.length === 0) {
      notifs.push({
        id: "telur-belum-dicatat",
        title: "Belum Catat Produksi",
        message: "Produksi telur hari ini belum dicatat",
        type: "info",
        link: "/ternak",
      });
    }
  }

  return notifs;
}
