"use client";

import { useMemo } from "react";
import {
  Leaf,
  Bird,
  Egg,
  TrendingUp,
  TrendingDown,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  CloudSun,
  Wind,
  Droplets,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { useAppStore } from "@/lib/store";
import { parseDate, todayString, formatShortDate } from "@/lib/utils";
import { format, subDays } from "date-fns";
import { id } from "date-fns/locale";

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  color: string;
}) {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold text-foreground mt-0.5">{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
      </div>
    </div>
  );
}

const faseBadge: Record<string, { label: string; cls: string }> = {
  semai: {
    label: "Semai",
    cls: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  },
  pindah_tanam: {
    label: "Pindah Tanam",
    cls: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  berbunga: {
    label: "Berbunga",
    cls: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  berbuah: {
    label: "Berbuah",
    cls: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  panen: {
    label: "Panen",
    cls: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
};

const eventColor: Record<string, string> = {
  semai: "bg-sky-500",
  pindah_tanam: "bg-blue-500",
  pemupukan: "bg-lime-500",
  penyemprotan: "bg-cyan-500",
  vaksinasi: "bg-violet-500",
  panen: "bg-green-500",
  lainnya: "bg-gray-400",
};

export default function DashboardPage() {
  // Zustand — reactive, no more window focus tricks
  const tanaman = useAppStore((s) => s.tanaman);
  const kandang = useAppStore((s) => s.kandang);
  const produksi = useAppStore((s) => s.produksiTelur);
  const transaksi = useAppStore((s) => s.transaksi);
  const events = useAppStore((s) => s.eventPlanner);
  const catatanList = useAppStore((s) => s.catatanTanaman);

  const today = todayString();

  // Stats
  const totalAyam = useMemo(
    () => kandang.reduce((s, k) => s + k.jumlahAyam, 0),
    [kandang],
  );
  const telurHariIni = useMemo(
    () =>
      produksi
        .filter((p) => p.tanggal === today)
        .reduce((s, p) => s + p.jumlahTelur, 0),
    [produksi, today],
  );
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

  // Chart data
  const telurChart = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = format(subDays(new Date(), 6 - i), "yyyy-MM-dd");
        const total = produksi
          .filter((p) => p.tanggal === d)
          .reduce((s, p) => s + p.jumlahTelur, 0);
        return {
          hari: format(subDays(new Date(), 6 - i), "EEE", { locale: id }),
          telur: total,
        };
      }),
    [produksi],
  );

  const keuanganChart = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = format(subDays(new Date(), 6 - i), "yyyy-MM-dd");
        const masuk = transaksi
          .filter((t) => t.tanggal === d && t.tipe === "pemasukan")
          .reduce((s, t) => s + t.jumlah, 0);
        const keluar = transaksi
          .filter((t) => t.tanggal === d && t.tipe === "pengeluaran")
          .reduce((s, t) => s + t.jumlah, 0);
        return {
          hari: format(subDays(new Date(), 6 - i), "EEE", { locale: id }),
          pemasukan: masuk / 1000,
          pengeluaran: keluar / 1000,
        };
      }),
    [transaksi],
  );

  const upcomingEvents = useMemo(
    () =>
      events
        .filter((e) => !e.selesai && e.tanggal >= today)
        .sort((a, b) => a.tanggal.localeCompare(b.tanggal))
        .slice(0, 5),
    [events, today],
  );

  const todayEvents = useMemo(
    () => events.filter((e) => e.tanggal === today && !e.selesai),
    [events, today],
  );

  const recentTransaksi = useMemo(
    () =>
      [...transaksi]
        .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
        .slice(0, 5),
    [transaksi],
  );

  return (
    <div className="space-y-6">
      {/* Banner jadwal hari ini */}
      {todayEvents.length > 0 && (
        <div className="bg-primary/10 border border-primary/30 rounded-2xl px-4 py-3 flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary">
              {todayEvents.length === 1
                ? "Ada 1 jadwal hari ini"
                : `Ada ${todayEvents.length} jadwal hari ini`}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              {todayEvents.map((e) => e.judul).join(" · ")}
            </p>
          </div>
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Leaf}
          label="Tanaman Aktif"
          value={tanaman.filter((t) => t.fase !== "panen").length}
          sub={`${tanaman.length} total tanaman`}
          color="bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
        />
        <StatCard
          icon={Bird}
          label="Total Ayam"
          value={totalAyam.toLocaleString("id")}
          sub={`${kandang.length} kandang aktif`}
          color="bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400"
        />
        <StatCard
          icon={Egg}
          label="Telur Hari Ini"
          value={telurHariIni.toLocaleString("id")}
          sub="butir terkumpul"
          color="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
        />
        <StatCard
          icon={TrendingUp}
          label="Laba Bersih"
          value={`Rp ${((pemasukan - pengeluaran) / 1_000_000).toFixed(1)}jt`}
          sub={`dari ${transaksi.length} transaksi`}
          color="bg-primary/10 text-primary"
        />
      </div>

      {/* Cuaca mock + Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Cuaca — data contoh */}
        <div className="bg-linear-to-br from-primary to-primary/70 rounded-2xl p-4 sm:p-5 text-primary-foreground">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm opacity-80">Cuaca Hari Ini</p>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full opacity-80">
                  Data Contoh
                </span>
              </div>
              <p className="text-3xl sm:text-4xl font-bold mt-1">28°C</p>
              <p className="text-sm opacity-80 mt-1">Cerah Berawan</p>
            </div>
            <CloudSun className="w-12 h-12 sm:w-16 sm:h-16 opacity-80 shrink-0" />
          </div>
          <div className="flex gap-3 sm:gap-4 mt-4 pt-4 border-t border-white/20 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Droplets className="w-4 h-4 opacity-70 shrink-0" />
              <span className="text-xs sm:text-sm">72% Kelembaban</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 opacity-70 shrink-0" />
              <span className="text-xs sm:text-sm">12 km/h Angin</span>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-xs opacity-70">
            {["Sen", "Sel", "Rab", "Kam", "Jum"].map((d, i) => (
              <div key={d} className="text-center">
                <p>{d}</p>
                <p className="text-sm sm:text-base font-semibold mt-1">
                  {[27, 29, 26, 30, 28][i]}°
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grafik produksi telur */}
        <div className="lg:col-span-2 bg-card rounded-2xl p-5 border border-border shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">
            Produksi Telur 7 Hari
          </h3>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={telurChart}>
              <defs>
                <linearGradient id="telurGrad" x1="0" y1="0" x2="0" y2="1">
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
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.9 0.01 120)"
              />
              <XAxis dataKey="hari" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v) => [`${v} butir`, "Telur"]} />
              <Area
                type="monotone"
                dataKey="telur"
                stroke="oklch(0.65 0.18 55)"
                strokeWidth={2.5}
                fill="url(#telurGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Keuangan chart + Events + Tanaman */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Keuangan chart */}
        <div className="lg:col-span-2 bg-card rounded-2xl p-5 border border-border shadow-sm">
          <h3 className="font-semibold text-foreground mb-1">
            Arus Keuangan 7 Hari
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            dalam ribuan rupiah
          </p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={keuanganChart}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.9 0.01 120)"
              />
              <XAxis dataKey="hari" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v) => [`Rp ${v}rb`, ""]} />
              <Legend />
              <Bar
                dataKey="pemasukan"
                name="Pemasukan"
                fill="oklch(0.45 0.15 150)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="pengeluaran"
                name="Pengeluaran"
                fill="oklch(0.577 0.245 27.325)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Upcoming events */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Jadwal Mendatang</h3>
          </div>
          <div className="space-y-2">
            {upcomingEvents.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                Tidak ada jadwal
              </p>
            )}
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="flex items-start gap-3 p-3 rounded-xl bg-muted/50"
              >
                <span
                  className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${eventColor[ev.jenisEvent] ?? "bg-gray-400"}`}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {ev.judul}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatShortDate(ev.tanggal)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tanaman status + Transaksi terbaru */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Tanaman */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Status Tanaman</h3>
          </div>
          <div className="space-y-2">
            {tanaman.slice(0, 5).map((t) => {
              const badge = faseBadge[t.fase];
              const latestCatatan = catatanList
                .filter((c) => c.tanamanId === t.id)
                .sort((a, b) => b.tanggal.localeCompare(a.tanggal))[0];
              const kondisiCls = latestCatatan
                ? {
                    sehat: "text-green-600",
                    kurang_sehat: "text-yellow-600",
                    sakit: "text-red-500",
                  }[latestCatatan.kondisi]
                : null;
              const kondisiLbl = latestCatatan
                ? {
                    sehat: "Sehat",
                    kurang_sehat: "Kurang Sehat",
                    sakit: "Sakit",
                  }[latestCatatan.kondisi]
                : null;
              return (
                <div
                  key={t.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {t.nama}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.lokasiKebun} · {t.luasLahan} m²
                      {kondisiLbl && (
                        <span className={`ml-2 font-medium ${kondisiCls}`}>
                          · {kondisiLbl}
                        </span>
                      )}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ml-2 ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                </div>
              );
            })}
            {tanaman.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                Belum ada tanaman
              </p>
            )}
          </div>
        </div>

        {/* Transaksi terbaru */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Transaksi Terbaru</h3>
          </div>
          <div className="space-y-2">
            {recentTransaksi.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  {t.tipe === "pemasukan" ? (
                    <TrendingUp className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {t.deskripsi}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatShortDate(t.tanggal)}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold shrink-0 ml-2 ${t.tipe === "pemasukan" ? "text-green-600" : "text-red-500"}`}
                >
                  {t.tipe === "pemasukan" ? "+" : "-"}Rp{" "}
                  {(t.jumlah / 1000).toFixed(0)}rb
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kandang status */}
      <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Bird className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-foreground">Status Kandang</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {kandang.map((k) => {
            const pct = Math.min(
              100,
              Math.round((k.jumlahAyam / k.kapasitas) * 100),
            );
            const statusCls = {
              baik: "text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400",
              perlu_perhatian:
                "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-400",
              kritis:
                "text-red-600 bg-red-100 dark:bg-red-900/40 dark:text-red-400",
            }[k.statusKesehatan];
            const statusIcon =
              k.statusKesehatan === "baik" ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : k.statusKesehatan === "kritis" ? (
                <AlertTriangle className="w-3.5 h-3.5" />
              ) : (
                <Clock className="w-3.5 h-3.5" />
              );
            return (
              <div
                key={k.id}
                className="p-4 rounded-xl border border-border bg-muted/30"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {k.nama}
                  </p>
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusCls}`}
                  >
                    {statusIcon}
                    {k.statusKesehatan.replace("_", " ")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  {k.jenisAyam} · {k.jumlahAyam}/{k.kapasitas} ekor
                </p>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {pct}% kapasitas
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
