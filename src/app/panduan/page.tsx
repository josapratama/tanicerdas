"use client";

import { useState, useRef } from "react";
import {
  BookOpen,
  Sprout,
  FlaskConical,
  Bug,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Leaf,
  Droplets,
  Sun,
  Wind,
  Info,
  AlertTriangle,
  CheckCircle2,
  Beaker,
  Search,
  X,
  ShieldAlert,
  Clock,
  Zap,
} from "lucide-react";
import {
  semuaPupuk,
  dataPenyakitPanduan,
  dataTataCara,
  dataAgrokimia,
  penjelasanKategoriAgrokimia,
  dataPanduanTanaman,
  glosariumUmum,
  dataUnsurHara,
  konsepPupuk,
} from "@/lib/panduan";
import type {
  PupukData,
  PenyakitPanduan,
  AgrokimiaData,
  KategoriAgrokimia,
  PanduanTanaman,
  FaseTumbuh,
  JadwalPupuk,
  EntriGlosarium,
  UnsurHara,
  KonsepPupuk as KonsepPupukType,
} from "@/lib/panduan";

const dataPupuk = semuaPupuk;

// ─── helpers ──────────────────────────────────────────────────────────────────

const kategoriWarna: Record<PupukData["kategori"], string> = {
  organik:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  kimia_makro:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  kimia_mikro:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  hayati: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  pembenah_tanah:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

const kategoriLabel: Record<PupukData["kategori"], string> = {
  organik: "Organik",
  kimia_makro: "Kimia Makro",
  kimia_mikro: "Mineral Mikro",
  hayati: "Hayati/Bio",
  pembenah_tanah: "Pembenah Tanah",
};

const bahayaWarna: Record<PenyakitPanduan["tingkatBahaya"], string> = {
  rendah:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  sedang:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  tinggi: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

const kategoriPenyakitWarna: Record<PenyakitPanduan["kategori"], string> = {
  jamur:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  virus:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  bakteri: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  hama: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  fisiologis:
    "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
};

// ─── sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className={`p-3 rounded-2xl ${color} shrink-0`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

function PupukCard({
  p,
  isHighlighted,
}: {
  p: PupukData;
  isHighlighted?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id={`pupuk-${p.id}`}
      className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
        isHighlighted
          ? "border-primary shadow-lg ring-2 ring-primary/30"
          : "border-border hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <span className="text-2xl">{p.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-foreground">{p.nama}</span>
            {p.singkatan && (
              <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                {p.singkatan}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {p.deskripsiSingkat}
          </p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${kategoriWarna[p.kategori]}`}
            >
              {kategoriLabel[p.kategori]}
            </span>
            <span className="text-xs text-muted-foreground font-mono truncate">
              {p.kandungan}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-5 border-t border-border space-y-4 pt-4">
          {/* Merek dagang */}
          {p.merekDagang && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-muted-foreground">
                🏪 Contoh Merek:
              </span>
              <span className="text-xs text-foreground bg-muted px-2 py-0.5 rounded-lg">
                {p.merekDagang}
              </span>
            </div>
          )}
          {/* Fungsi */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              ✅ Fungsi Utama
            </p>
            <ul className="space-y-1">
              {p.fungsi.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Grid: cara, dosis, waktu, harga */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                📋 Cara Pakai
              </p>
              <p className="text-sm text-foreground">{p.caraPakai}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                ⚖️ Dosis
              </p>
              <p className="text-sm text-foreground">{p.dosis}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                ⏰ Waktu Aplikasi
              </p>
              <p className="text-sm text-foreground">{p.waktuPakai}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                💰 Estimasi Harga
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                {p.harga}
              </p>
            </div>
          </div>

          {/* Kelebihan/Kekurangan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">
                👍 Kelebihan
              </p>
              <ul className="space-y-1">
                {p.kelebihan.map((k, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">
                👎 Kekurangan
              </p>
              <ul className="space-y-1">
                {p.kekurangan.map((k, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProdukBadge({
  produkId,
  onClick,
}: {
  produkId: string;
  onClick: (id: string) => void;
}) {
  const pupuk = dataPupuk.find((p) => p.id === produkId);
  if (pupuk) {
    return (
      <button
        onClick={() => onClick(produkId)}
        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
      >
        <span>{pupuk.emoji}</span>
        {pupuk.nama}
        <ArrowRight className="w-3 h-3" />
      </button>
    );
  }
  const agro = dataAgrokimia.find((a) => a.id === produkId);
  if (agro) {
    const katInfo = penjelasanKategoriAgrokimia[agro.kategori];
    return (
      <button
        onClick={() => onClick(produkId)}
        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 rounded-full font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
      >
        <span>{katInfo.emoji}</span>
        {agro.nama}
        <ArrowRight className="w-3 h-3" />
      </button>
    );
  }
  return null;
}

function PenyakitCard({
  p,
  onPupukClick,
}: {
  p: PenyakitPanduan;
  onPupukClick: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id={`penyakit-${p.id}`}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        <span className="text-2xl shrink-0 mt-0.5">{p.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap mb-1">
            <span className="font-bold text-foreground">{p.nama}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${kategoriPenyakitWarna[p.kategori]}`}
            >
              {p.kategori.charAt(0).toUpperCase() + p.kategori.slice(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              🌿 {p.jenisTanaman}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${bahayaWarna[p.tingkatBahaya]}`}
            >
              {p.tingkatBahaya === "tinggi"
                ? "⚠️ Bahaya Tinggi"
                : p.tingkatBahaya === "sedang"
                  ? "⚡ Sedang"
                  : "✅ Rendah"}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-5 border-t border-border space-y-4 pt-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
              🔍 Penyebab
            </p>
            <p className="text-sm text-foreground">{p.penyebab}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">
                🚨 Gejala
              </p>
              <ul className="space-y-1">
                {p.gejala.map((g, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-2">
                ⚡ Kondisi Pemicu
              </p>
              <ul className="space-y-1">
                {p.kondisiPemicu.map((k, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">
              🛡️ Pencegahan
            </p>
            <ul className="space-y-1">
              {p.pencegahan.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">
              💊 Cara Penanganan
            </p>
            <div className="space-y-2">
              {p.pengobatan.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{step.langkah}</p>
                    {step.namaProduk && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        📦 Produk:{" "}
                        <span className="font-medium text-foreground">
                          {step.namaProduk}
                        </span>
                      </p>
                    )}
                    {step.produkId && (
                      <div className="mt-1.5">
                        <ProdukBadge
                          produkId={step.produkId}
                          onClick={onPupukClick}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {p.produkTerkait.length > 0 && (
            <div className="pt-2 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                🔗 Produk Terkait — klik untuk lihat detail
              </p>
              <div className="flex flex-wrap gap-2">
                {p.produkTerkait.map((pid) => (
                  <ProdukBadge
                    key={pid}
                    produkId={pid}
                    onClick={onPupukClick}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── AgrokimiaCard ────────────────────────────────────────────────────────────

const karensaBadge = (hari: number) => {
  if (hari === 0)
    return {
      label: "Tanpa karensa",
      cls: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    };
  if (hari <= 3)
    return {
      label: `Karensa ${hari} hari`,
      cls: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    };
  if (hari <= 14)
    return {
      label: `Karensa ${hari} hari`,
      cls: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
    };
  return {
    label: `Karensa ${hari} hari`,
    cls: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  };
};

function AgrokimiaCard({
  a,
  isHighlighted,
}: {
  a: AgrokimiaData;
  isHighlighted?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const katInfo = penjelasanKategoriAgrokimia[a.kategori];
  const kb = karensaBadge(a.karensaHari);

  return (
    <div
      id={`agro-${a.id}`}
      className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
        isHighlighted
          ? "border-primary shadow-lg ring-2 ring-primary/30"
          : "border-border hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        <span className="text-2xl shrink-0 mt-0.5">{a.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-bold text-foreground">{a.nama}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${katInfo.warnaBadge}`}
            >
              {katInfo.emoji} {katInfo.judul}
            </span>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {a.bahanAktif}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${kb.cls}`}
            >
              ⏱ {kb.label}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-5 border-t border-border space-y-4 pt-4">
          {/* Deskripsi produk */}
          <p className="text-sm text-foreground leading-relaxed">
            {a.deskripsiProduk}
          </p>

          {/* Merek dagang */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              🏪 Merek Dagang di Pasaran
            </p>
            <div className="flex flex-wrap gap-2">
              {a.merekDagang.map((m) => (
                <span
                  key={m}
                  className="text-xs bg-muted border border-border px-2.5 py-1 rounded-lg font-medium text-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Target hama */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              🎯 Sasaran (Hama/Penyakit)
            </p>
            <div className="flex flex-wrap gap-2">
              {a.targetHamaPenyakit.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 px-2.5 py-1 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Grid: cara, dosis, waktu, interval */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                📋 Cara Pakai
              </p>
              <p className="text-sm text-foreground">{a.caraPakai}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                ⚖️ Dosis
              </p>
              <p className="text-sm text-foreground">{a.dosis}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                ⏰ Waktu Pakai
              </p>
              <p className="text-sm text-foreground">{a.waktuPakai}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                🔄 Interval Semprot
              </p>
              <p className="text-sm text-foreground">{a.intervalSemprot}</p>
            </div>
          </div>

          {/* Karensa info */}
          {a.karensaHari > 0 && (
            <div className="flex gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-3">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  Masa Karensa: {a.karensaHari} hari sebelum panen
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                  Hentikan penyemprotan minimal {a.karensaHari} hari sebelum
                  panen agar residu tidak ada di hasil panen.
                </p>
              </div>
            </div>
          )}

          {/* Peringatan */}
          {a.peringatan.length > 0 && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Peringatan Keselamatan
              </p>
              <ul className="space-y-1">
                {a.peringatan.map((w, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── TataCaraCard ─────────────────────────────────────────────────────────────

// ─── PanduanTanamanSection ────────────────────────────────────────────────────

const faseBadge: Record<JadwalPupuk["fase"], { label: string; cls: string }> = {
  semai: {
    label: "Semai",
    cls: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  },
  vegetatif: {
    label: "Vegetatif",
    cls: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
  generatif: {
    label: "Generatif",
    cls: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  pra_panen: {
    label: "Pra Panen",
    cls: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
};

const caraIcon: Record<JadwalPupuk["produk"][0]["cara"], string> = {
  kocor: "💧",
  tabur: "✋",
  semprot_daun: "🌿",
  semprot_batang: "🪴",
};
const caraLabel: Record<JadwalPupuk["produk"][0]["cara"], string> = {
  kocor: "Kocor",
  tabur: "Tabur",
  semprot_daun: "Semprot Daun",
  semprot_batang: "Semprot Batang",
};

function FaseCard({ fase }: { fase: FaseTumbuh }) {
  const [open, setOpen] = useState(false);
  const faseWarna: Record<string, string> = {
    Persemaian: "border-sky-200 dark:border-sky-800",
    "Pindah Tanam & Adaptasi": "border-teal-200 dark:border-teal-800",
    "Vegetatif Awal": "border-green-200 dark:border-green-800",
    "Vegetatif Akhir & Pra-Bunga": "border-lime-200 dark:border-lime-800",
    "Generatif — Pembungaan": "border-pink-200 dark:border-pink-800",
    "Generatif — Pembesaran Buah": "border-amber-200 dark:border-amber-800",
    "Pematangan & Panen": "border-red-200 dark:border-red-800",
  };
  const border = faseWarna[fase.nama] ?? "border-border";
  return (
    <div className={`bg-card border ${border} rounded-2xl overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <span className="text-2xl shrink-0">{fase.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground">{fase.nama}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            📅 {fase.rentangHari}
          </p>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-5 border-t border-border space-y-4 pt-4">
          <p className="text-sm text-foreground leading-relaxed">
            {fase.deskripsi}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                🔍 Ciri Fisik Tanaman
              </p>
              <ul className="space-y-1.5">
                {fase.ciriFisik.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                🎯 Fokus Perawatan
              </p>
              <ul className="space-y-1.5">
                {fase.fokusPerawatan.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function JadwalPupukRow({
  j,
  onPupukClick,
}: {
  j: JadwalPupuk;
  onPupukClick: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const fb = faseBadge[j.fase];
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-3 text-left hover:bg-muted/40 transition-colors"
      >
        <div className="shrink-0 text-center min-w-18">
          <p className="text-xs font-bold text-foreground leading-tight">
            {j.waktu}
          </p>
          <span
            className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${fb.cls}`}
          >
            {fb.label}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground leading-tight">
            {j.kegiatan}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {j.produk.map((p) => p.nama).join(" + ")}
          </p>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-border pt-3 space-y-3">
          <div className="space-y-2">
            {j.produk.map((p, i) => (
              <div
                key={i}
                className="bg-muted/50 rounded-xl p-3 flex items-start gap-3"
              >
                <span className="text-lg shrink-0">{caraIcon[p.cara]}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-foreground">
                      {p.nama}
                    </span>
                    <span className="text-xs bg-muted border border-border rounded-full px-2 py-0.5 text-muted-foreground">
                      {caraLabel[p.cara]}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    ⚖️ {p.dosis}
                  </p>
                  {p.pupukId && (
                    <button
                      onClick={() => onPupukClick(p.pupukId!)}
                      className="mt-1.5 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ArrowRight className="w-3 h-3" /> Lihat detail di
                      ensiklopedi
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {j.catatan && (
            <div className="flex gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
              <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                {j.catatan}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function GlosariumCard({
  tanaman,
  onIlmuDasarClick,
}: {
  tanaman: PanduanTanaman;
  onIlmuDasarClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      {/* Link ke Ilmu Dasar */}
      <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4">
        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-blue-700 dark:text-blue-300">
            Istilah Umum (HSS, HST, Semai, Prung, Vegetatif, Generatif, dll)
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
            Semua istilah umum bertani ada di tab Ilmu Dasar — tidak perlu
            diulang di sini.
          </p>
        </div>
        <button
          onClick={onIlmuDasarClick}
          className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 px-3 py-1.5 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Buka <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Istilah spesifik tanaman ini */}
      {tanaman.glosarium.length > 0 && (
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center gap-3 p-4 text-left"
          >
            <div className="p-2 rounded-xl bg-muted shrink-0">
              <span className="text-lg">{tanaman.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground">
                Istilah Khusus {tanaman.nama}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {tanaman.glosarium.length} istilah spesifik tanaman ini
              </p>
            </div>
            {open ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
          </button>
          {open && (
            <div className="px-4 pb-5 border-t border-border pt-4 space-y-3">
              {tanaman.glosarium.map((g) => (
                <div key={g.istilah} className="flex gap-3">
                  <span className="shrink-0 mt-0.5 font-mono text-xs bg-primary/10 text-primary rounded-lg px-2 py-1 h-fit whitespace-nowrap">
                    {g.istilah}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">
                    {g.penjelasan}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── IlmuDasar Components ──────────────────────────────────────────────────────

const tipeMakro: Record<UnsurHara["tipe"], { label: string; cls: string }> = {
  makro_primer: {
    label: "Makro Primer",
    cls: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  makro_sekunder: {
    label: "Makro Sekunder",
    cls: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  mikro: {
    label: "Mikro",
    cls: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
};

const kategoriGlos: Record<
  EntriGlosarium["kategori"],
  { label: string; cls: string }
> = {
  waktu: {
    label: "Waktu",
    cls: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  },
  teknik: {
    label: "Teknik",
    cls: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
  nutrisi: {
    label: "Nutrisi",
    cls: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  fase: {
    label: "Fase",
    cls: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  struktur: {
    label: "Struktur",
    cls: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
};

function UnsurHaraCard({
  u,
  onPupukClick,
}: {
  u: UnsurHara;
  onPupukClick: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const { label: tipeLabel, cls: tipeCls } = tipeMakro[u.tipe];
  return (
    <div
      id={`unsur-${u.id}`}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <span className="text-2xl shrink-0">{u.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-xl text-foreground">
              {u.simbol}
            </span>
            <span className="font-bold text-foreground">{u.nama}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${tipeCls}`}
            >
              {tipeLabel}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {u.fungsiUtama[0]}
          </p>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-5 border-t border-border space-y-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">
                ✅ Fungsi Utama
              </p>
              <ul className="space-y-1.5">
                {u.fungsiUtama.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">
                ⚠️ Gejala Kekurangan
              </p>
              <ul className="space-y-1.5">
                {u.gejalaDekufisiensi.map((g, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {u.sumberPupuk.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                🧪 Sumber Pupuk Utama
              </p>
              <div className="flex flex-wrap gap-2">
                {u.sumberPupuk.map((pid) => {
                  const p = semuaPupuk.find((x) => x.id === pid);
                  if (!p) return null;
                  return (
                    <button
                      key={pid}
                      onClick={() => onPupukClick(pid)}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                    >
                      {p.emoji} {p.nama} <ArrowRight className="w-3 h-3" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          <div className="flex gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
              {u.catatan}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function KonsepCard({ k }: { k: KonsepPupukType }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id={`konsep-${k.id}`}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <span className="text-2xl shrink-0">{k.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground">{k.judul}</p>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {k.penjelasan.slice(0, 80)}…
          </p>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-5 border-t border-border space-y-3 pt-4">
          <p className="text-sm text-foreground leading-relaxed">
            {k.penjelasan}
          </p>
          <ul className="space-y-2">
            {k.poin.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function IlmuDasarSection({
  onPupukClick,
}: {
  onPupukClick: (id: string) => void;
}) {
  const [activeSection, setActiveSection] = useState<
    "unsur" | "konsep" | "glosarium"
  >("unsur");
  const [filterGlosarium, setFilterGlosarium] = useState<
    EntriGlosarium["kategori"] | "semua"
  >("semua");
  const makroPrimer = dataUnsurHara.filter((u) => u.tipe === "makro_primer");
  const makroSekunder = dataUnsurHara.filter(
    (u) => u.tipe === "makro_sekunder",
  );
  const mikro = dataUnsurHara.filter((u) => u.tipe === "mikro");

  return (
    <div className="space-y-5">
      <SectionHeader
        icon={BookOpen}
        title="Ilmu Dasar Bertani"
        subtitle="Semua yang perlu diketahui sebelum mulai: unsur hara, cara kerja pupuk, dan kamus istilah pertanian. Panduan tanaman di atas merujuk ke halaman ini."
        color="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
      />

      {/* Ringkasan N-P-K cepat */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            simbol: "N",
            nama: "Nitrogen",
            fungsi: "Daun hijau & tumbuh",
            fase: "Vegetatif",
            warna: "bg-green-500",
            id: "nitrogen",
          },
          {
            simbol: "P",
            nama: "Fosfor",
            fungsi: "Akar kuat & berbuah",
            fase: "Pra-bunga",
            warna: "bg-red-400",
            id: "fosfor",
          },
          {
            simbol: "K",
            nama: "Kalium",
            fungsi: "Kualitas & rasa buah",
            fase: "Generatif",
            warna: "bg-orange-400",
            id: "kalium",
          },
        ].map(({ simbol, nama, fungsi, fase, warna, id }) => (
          <button
            key={id}
            onClick={() => {
              setActiveSection("unsur");
              setTimeout(
                () =>
                  document
                    .getElementById(`unsur-${id}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" }),
                100,
              );
            }}
            className="bg-card border border-border rounded-2xl p-3 text-center hover:shadow-md transition-shadow"
          >
            <div
              className={`w-12 h-12 rounded-full ${warna} flex items-center justify-center text-white font-black text-xl mx-auto mb-2`}
            >
              {simbol}
            </div>
            <p className="text-xs font-bold text-foreground">{nama}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{fungsi}</p>
            <p className="text-xs text-primary font-medium mt-1">↑ {fase}</p>
          </button>
        ))}
      </div>

      {/* Sub tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {[
          { id: "unsur" as const, label: "⚗️ Unsur Hara (N, P, K, dll)" },
          { id: "konsep" as const, label: "📋 Konsep Pupuk" },
          { id: "glosarium" as const, label: "📖 Kamus Istilah" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveSection(t.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${activeSection === t.id ? "bg-primary text-primary-foreground shadow-sm" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Unsur Hara ─────────────────────────────────────── */}
      {activeSection === "unsur" && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Tanaman butuh 16 unsur hara untuk tumbuh. Yang paling penting: 3
            makro primer (N, P, K), 3 makro sekunder (Ca, Mg, S), dan beberapa
            mikro. Kekurangan salah satu = pertumbuhan terhambat meski yang lain
            cukup.
          </p>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />{" "}
              Makro Primer — dibutuhkan paling banyak
            </p>
            <div className="space-y-2">
              {makroPrimer.map((u) => (
                <UnsurHaraCard key={u.id} u={u} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />{" "}
              Makro Sekunder — penting tapi dibutuhkan lebih sedikit
            </p>
            <div className="space-y-2">
              {makroSekunder.map((u) => (
                <UnsurHaraCard key={u.id} u={u} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />{" "}
              Mikro — dosis kecil tapi kritis di waktu tertentu
            </p>
            <div className="space-y-2">
              {mikro.map((u) => (
                <UnsurHaraCard key={u.id} u={u} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Konsep Pupuk ───────────────────────────────────── */}
      {activeSection === "konsep" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Pahami cara kerja pupuk sebelum mulai memupuk. Pupuk yang benar di
            waktu yang tepat dengan cara yang benar = hasil optimal.
          </p>
          {konsepPupuk.map((k) => (
            <KonsepCard key={k.id} k={k} />
          ))}
        </div>
      )}

      {/* ── Kamus Istilah ──────────────────────────────────── */}
      {activeSection === "glosarium" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Istilah-istilah yang sering muncul di panduan bertani. Panduan per
            tanaman merujuk ke sini — tidak perlu dijelaskan berulang di setiap
            tanaman.
          </p>
          {/* Filter per kategori — fungsional */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterGlosarium("semua")}
              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${filterGlosarium === "semua" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              Semua
            </button>
            {(
              [
                "waktu",
                "teknik",
                "fase",
                "struktur",
              ] as EntriGlosarium["kategori"][]
            ).map((k) => {
              const { label, cls } = kategoriGlos[k];
              return (
                <button
                  key={k}
                  onClick={() => setFilterGlosarium(k)}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${filterGlosarium === k ? "bg-primary text-primary-foreground" : `${cls} hover:opacity-80`}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            {glosariumUmum
              .filter(
                (g) =>
                  filterGlosarium === "semua" || g.kategori === filterGlosarium,
              )
              .map((g) => {
                const { cls } = kategoriGlos[g.kategori];
                return (
                  <div
                    key={g.id}
                    id={`glos-${g.id}`}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`shrink-0 text-xs px-2 py-1 rounded-lg font-semibold ${cls} whitespace-nowrap mt-0.5`}
                      >
                        {kategoriGlos[g.kategori].label}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-foreground">
                          {g.istilah}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {g.penjelasan}
                        </p>
                        {g.contoh && (
                          <p className="text-xs text-primary mt-1.5">
                            <span className="font-semibold">Contoh: </span>
                            {g.contoh}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

function TanamanDetailPage({
  tanaman,
  onPupukClick,
  onBack,
  onIlmuDasarClick,
}: {
  tanaman: PanduanTanaman;
  onPupukClick: (id: string) => void;
  onBack: () => void;
  onIlmuDasarClick: () => void;
}) {
  const [activeSection, setActiveSection] = useState<
    "fase" | "jadwal" | "glosarium" | "tips"
  >("fase");

  const jadwalPerFase = (fase: JadwalPupuk["fase"]) =>
    tanaman.jadwalPemupukan.filter((j) => j.fase === fase);

  const sectionTabs = [
    { id: "fase" as const, label: "📈 Fase Tumbuh" },
    { id: "jadwal" as const, label: "📅 Jadwal Pupuk" },
    { id: "glosarium" as const, label: "📖 Kamus Istilah" },
    { id: "tips" as const, label: "💡 Tips Sukses" },
  ];

  return (
    <div className="space-y-5">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown className="w-4 h-4 rotate-90" />
        Kembali ke daftar tanaman
      </button>

      {/* Hero tanaman */}
      <div className="bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 text-white rounded-3xl p-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">{tanaman.emoji}</span>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-extrabold">{tanaman.nama}</h2>
            <p className="text-green-200 text-sm italic mt-0.5">
              {tanaman.namaLatin}
            </p>
            <p className="text-green-100 text-sm mt-3 leading-relaxed max-w-lg">
              {tanaman.deskripsiSingkat}
            </p>
          </div>
        </div>

        {/* Info umum grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
          {[
            {
              label: "Umur Panen",
              value: tanaman.infoUmum.umurPanen,
              icon: "⏱️",
            },
            {
              label: "Jarak Tanam",
              value: tanaman.infoUmum.jarakTanam,
              icon: "📐",
            },
            {
              label: "Suhu Optimal",
              value: tanaman.infoUmum.suhuOptimal,
              icon: "🌡️",
            },
            { label: "pH Tanah", value: tanaman.infoUmum.phTanah, icon: "🧪" },
            {
              label: "Kebutuhan Air",
              value: tanaman.infoUmum.kebutuhanAir,
              icon: "💧",
            },
            {
              label: "Media Tanam",
              value: tanaman.infoUmum.mediaTanam,
              icon: "🌱",
            },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="bg-white/15 backdrop-blur rounded-xl p-3"
            >
              <p className="text-xs text-green-200 font-medium">
                {icon} {label}
              </p>
              <p className="text-sm font-semibold text-white mt-0.5 leading-tight">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {sectionTabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveSection(t.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeSection === t.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Fase Tumbuh ─────────────────────────────────────── */}
      {activeSection === "fase" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Perjalanan tanaman dari benih hingga panen — setiap fase punya
            kebutuhan berbeda. Klik setiap fase untuk melihat ciri fisik dan
            fokus perawatannya.
          </p>
          {/* Timeline alur */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 bg-card border border-border rounded-2xl p-4">
            {tanaman.faseTumbuh.map((f, i) => (
              <div key={f.nama} className="flex items-center gap-1 shrink-0">
                <div className="text-center">
                  <div className="text-2xl">{f.emoji}</div>
                  <p className="text-xs text-muted-foreground mt-1 max-w-14 leading-tight text-center">
                    {f.nama.split(" ")[0]}
                  </p>
                </div>
                {i < tanaman.faseTumbuh.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>
          {tanaman.faseTumbuh.map((f) => (
            <FaseCard key={f.nama} fase={f} />
          ))}
        </div>
      )}

      {/* ── Jadwal Pemupukan ─────────────────────────────────── */}
      {activeSection === "jadwal" && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Jadwal lengkap dari semai hingga pasca panen. Klik setiap baris
            untuk melihat detail produk, dosis, dan cara aplikasi. Klik tautan
            untuk lompat ke ensiklopedi pupuk.
          </p>

          {/* Legend cara aplikasi */}
          <div className="flex flex-wrap gap-2">
            {(
              Object.entries(caraLabel) as [keyof typeof caraLabel, string][]
            ).map(([k, v]) => (
              <span
                key={k}
                className="text-xs bg-muted border border-border rounded-full px-3 py-1 text-muted-foreground"
              >
                {caraIcon[k]} {v}
              </span>
            ))}
          </div>

          {/* Semai */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
              Fase Semai (di persemaian)
            </p>
            <div className="space-y-2">
              {jadwalPerFase("semai").map((j, i) => (
                <JadwalPupukRow key={i} j={j} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>

          {/* Vegetatif */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-green-600 dark:text-green-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Fase Vegetatif (HST 0–35)
            </p>
            <div className="space-y-2">
              {jadwalPerFase("vegetatif").map((j, i) => (
                <JadwalPupukRow key={i} j={j} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>

          {/* Generatif */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
              Fase Generatif (HST 35+)
            </p>
            <div className="space-y-2">
              {jadwalPerFase("generatif").map((j, i) => (
                <JadwalPupukRow key={i} j={j} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>

          {/* Pra Panen */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
              Pra Panen & Recovery
            </p>
            <div className="space-y-2">
              {jadwalPerFase("pra_panen").map((j, i) => (
                <JadwalPupukRow key={i} j={j} onPupukClick={onPupukClick} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Glosarium ────────────────────────────────────────── */}
      {activeSection === "glosarium" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Istilah umum (HSS, HST, fase vegetatif/generatif, dll) ada di tab
            Ilmu Dasar. Di sini hanya istilah spesifik {tanaman.nama}.
          </p>
          <GlosariumCard
            tanaman={tanaman}
            onIlmuDasarClick={onIlmuDasarClick}
          />
        </div>
      )}

      {/* ── Tips Sukses ──────────────────────────────────────── */}
      {activeSection === "tips" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Tips dari pengalaman lapangan — hal-hal kecil yang membuat perbedaan
            besar di hasil panen.
          </p>
          <div className="space-y-2">
            {tanaman.tipsSukses.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>

          {/* Pupuk utama */}
          <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              🧪 Pupuk Utama yang Dibutuhkan
            </p>
            <div className="flex flex-wrap gap-2">
              {tanaman.pupukUtama.map((id) => {
                const p = semuaPupuk.find((x) => x.id === id);
                if (!p) return null;
                return (
                  <button
                    key={id}
                    onClick={() => onPupukClick(id)}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                  >
                    {p.emoji} {p.nama}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Penyakit utama */}
          {tanaman.penyakitUtama.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                🦠 Penyakit yang Sering Menyerang
              </p>
              <div className="flex flex-wrap gap-2">
                {tanaman.penyakitUtama.map((pid) => {
                  const p = dataPenyakitPanduan.find((x) => x.id === pid);
                  if (!p) return null;
                  return (
                    <button
                      key={pid}
                      onClick={() => onPupukClick(pid)}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 rounded-full font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    >
                      {p.emoji} {p.nama}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                Klik untuk lihat gejala, pencegahan, dan penanganan lengkap di
                ensiklopedi penyakit.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── TataCaraCard ─────────────────────────────────────────────────────────────

function TataCaraCard({
  tc,
  onProdukClick,
}: {
  tc: (typeof dataTataCara)[0];
  onProdukClick: (id: string) => void;
}) {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-5 text-left"
      >
        <span className="text-3xl">{tc.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-foreground">{tc.judul}</h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
            {tc.deskripsi}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
            {tc.langkah.length} langkah
          </span>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-border">
          <p className="text-sm text-muted-foreground mt-4 mb-5">
            {tc.deskripsi}
          </p>
          <div className="space-y-3">
            {tc.langkah.map((langkah) => (
              <div
                key={langkah.nomor}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenStep(
                      openStep === langkah.nomor ? null : langkah.nomor,
                    )
                  }
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                    {langkah.nomor}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground">
                      {langkah.judul}
                    </p>
                    {langkah.waktu && (
                      <p className="text-xs text-muted-foreground">
                        ⏰ {langkah.waktu}
                      </p>
                    )}
                  </div>
                  {openStep === langkah.nomor ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>

                {openStep === langkah.nomor && (
                  <div className="px-4 pb-4 border-t border-border bg-muted/20 space-y-3 pt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      {langkah.detail}
                    </p>
                    {langkah.tips && (
                      <div className="flex gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
                        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          <span className="font-semibold">Tips: </span>
                          {langkah.tips}
                        </p>
                      </div>
                    )}
                    {langkah.produkTerkait &&
                      langkah.produkTerkait.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2">
                            🔗 Produk terkait:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {langkah.produkTerkait.map((pid) => (
                              <ProdukBadge
                                key={pid}
                                produkId={pid}
                                onClick={onProdukClick}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const NAV_TABS = [
  { id: "tanaman", label: "🌱 Panduan Tanaman", icon: Sprout },
  { id: "ilmu-dasar", label: "🎓 Ilmu Dasar", icon: BookOpen },
  { id: "panduan", label: "📖 Tata Cara Bertani", icon: Leaf },
  { id: "pupuk", label: "🧪 Ensiklopedi Pupuk", icon: Beaker },
  { id: "agrokimia", label: "🛡️ Pestisida & Agrokimia", icon: ShieldAlert },
  { id: "penyakit", label: "🦠 Penyakit Tanaman", icon: Bug },
] as const;

type TabId = (typeof NAV_TABS)[number]["id"];

export default function PanduanPage() {
  const [activeTab, setActiveTab] = useState<TabId>("tanaman");
  const [selectedTanaman, setSelectedTanaman] = useState<string | null>(null);
  const [highlightedPupuk, setHighlightedPupuk] = useState<string | null>(null);
  const [searchPupuk, setSearchPupuk] = useState("");
  const [searchPenyakit, setSearchPenyakit] = useState("");
  const [filterKategoriPupuk, setFilterKategoriPupuk] =
    useState<string>("semua");
  const [filterKategoriPenyakit, setFilterKategoriPenyakit] =
    useState<string>("semua");
  const [highlightedAgro, setHighlightedAgro] = useState<string | null>(null);
  const [searchAgro, setSearchAgro] = useState("");
  const [filterKategoriAgro, setFilterKategoriAgro] = useState<string>("semua");
  const pupukSectionRef = useRef<HTMLDivElement>(null);

  function scrollToPupuk(id: string) {
    // id bisa merujuk ke pupuk atau agrokimia
    const isPupuk = dataPupuk.some((p) => p.id === id);
    if (isPupuk) {
      setActiveTab("pupuk");
      setHighlightedPupuk(id);
      setTimeout(() => {
        document
          .getElementById(`pupuk-${id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => setHighlightedPupuk(null), 3000);
      }, 150);
    } else {
      setActiveTab("agrokimia");
      setHighlightedAgro(id);
      setTimeout(() => {
        document
          .getElementById(`agro-${id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => setHighlightedAgro(null), 3000);
      }, 150);
    }
  }

  const filteredPupuk = dataPupuk.filter((p) => {
    const matchSearch =
      searchPupuk === "" ||
      p.nama.toLowerCase().includes(searchPupuk.toLowerCase()) ||
      p.kandungan.toLowerCase().includes(searchPupuk.toLowerCase());
    const matchKategori =
      filterKategoriPupuk === "semua" || p.kategori === filterKategoriPupuk;
    return matchSearch && matchKategori;
  });

  const filteredPenyakit = dataPenyakitPanduan.filter((p) => {
    const matchSearch =
      searchPenyakit === "" ||
      p.nama.toLowerCase().includes(searchPenyakit.toLowerCase()) ||
      p.jenisTanaman.toLowerCase().includes(searchPenyakit.toLowerCase()) ||
      p.penyebab.toLowerCase().includes(searchPenyakit.toLowerCase());
    const matchKategori =
      filterKategoriPenyakit === "semua" ||
      p.kategori === filterKategoriPenyakit;
    return matchSearch && matchKategori;
  });

  const filteredAgro = dataAgrokimia.filter((a) => {
    const matchSearch =
      searchAgro === "" ||
      a.nama.toLowerCase().includes(searchAgro.toLowerCase()) ||
      a.bahanAktif.toLowerCase().includes(searchAgro.toLowerCase()) ||
      a.targetHamaPenyakit.some((t) =>
        t.toLowerCase().includes(searchAgro.toLowerCase()),
      );
    const matchKategori =
      filterKategoriAgro === "semua" || a.kategori === filterKategoriAgro;
    return matchSearch && matchKategori;
  });

  return (
    <div className="space-y-6 pb-10">
      {/* ── Hero Banner ──────────────────────────────────── */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 text-white p-6 sm:p-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 text-8xl">🌿</div>
          <div className="absolute top-8 right-8 text-6xl">🌾</div>
          <div className="absolute bottom-4 left-1/3 text-7xl">🌱</div>
          <div className="absolute bottom-6 right-4 text-5xl">🥬</div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-green-200 text-sm font-medium mb-3">
            <Sprout className="w-4 h-4" />
            <span>Panduan Lengkap untuk Pemula</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Belajar Bertani dari Nol
            <br />
            <span className="text-green-200">Sampai Panen</span>
          </h1>
          <p className="mt-4 text-green-100 text-sm sm:text-base max-w-lg">
            Panduan terlengkap: tata cara bertani step-by-step, ensiklopedi
            pupuk dengan penjelasan lengkap, dan diagnosa penyakit beserta cara
            mengatasinya.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { icon: Leaf, label: `${dataTataCara.length} Tahap Bertani` },
              {
                icon: Sprout,
                label: `${dataPanduanTanaman.length} Panduan Tanaman`,
              },
              { icon: FlaskConical, label: `${semuaPupuk.length} Jenis Pupuk` },
              {
                icon: ShieldAlert,
                label: `${dataAgrokimia.length} Produk Agrokimia`,
              },
              { icon: Bug, label: `${dataPenyakitPanduan.length} Penyakit` },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-xl px-3 py-2"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Kebutuhan Dasar Tanaman (Info Cards) ──────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            icon: Sun,
            label: "Cahaya Matahari",
            desc: "Min 6–8 jam/hari untuk fotosintesis optimal",
            color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30",
          },
          {
            icon: Droplets,
            label: "Air",
            desc: "Cukup tapi tidak berlebihan — cek kelembaban tanah",
            color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
          },
          {
            icon: FlaskConical,
            label: "Nutrisi/Hara",
            desc: "N, P, K + unsur mikro tersedia seimbang di tanah",
            color: "text-green-500 bg-green-100 dark:bg-green-900/30",
          },
          {
            icon: Wind,
            label: "Sirkulasi Udara",
            desc: "Mencegah kelembaban berlebih dan pertumbuhan jamur",
            color: "text-teal-500 bg-teal-100 dark:bg-teal-900/30",
          },
        ].map(({ icon: Icon, label, desc, color }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-2xl p-4 shadow-sm"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <p className="font-semibold text-sm text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
          </div>
        ))}
      </div>

      {/* ── Tab Navigation ──────────────────────────────── */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {NAV_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── TAB: PANDUAN TANAMAN ──────────────────────────── */}
      {activeTab === "tanaman" && (
        <div className="space-y-5">
          {selectedTanaman ? (
            (() => {
              const tanamanData = dataPanduanTanaman.find(
                (t) => t.id === selectedTanaman,
              );
              if (!tanamanData) {
                // Guard: stale ID — kembali ke daftar
                setSelectedTanaman(null);
                return null;
              }
              return (
                <TanamanDetailPage
                  tanaman={tanamanData}
                  onPupukClick={scrollToPupuk}
                  onBack={() => setSelectedTanaman(null)}
                  onIlmuDasarClick={() => {
                    setSelectedTanaman(null);
                    setActiveTab("ilmu-dasar");
                  }}
                />
              );
            })()
          ) : (
            <>
              <SectionHeader
                icon={Sprout}
                title="Panduan Bertanam per Tanaman"
                subtitle="Panduan lengkap spesifik per jenis tanaman — fase tumbuh, jadwal pemupukan detail, kamus istilah, dan tips sukses."
                color="bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
              />

              {/* Info box istilah penting */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  {
                    istilah: "HSS",
                    kepanjangan: "Hari Setelah Semai",
                    desc: "Hitungan sejak benih disemai",
                    color:
                      "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300",
                  },
                  {
                    istilah: "HST",
                    kepanjangan: "Hari Setelah Tanam",
                    desc: "Hitungan sejak bibit dipindah ke lahan",
                    color:
                      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300",
                  },
                  {
                    istilah: "Vegetatif",
                    kepanjangan: "Fase Pertumbuhan",
                    desc: "Tanaman tumbuh besar, belum berbunga",
                    color:
                      "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300",
                  },
                  {
                    istilah: "Generatif",
                    kepanjangan: "Fase Reproduksi",
                    desc: "Tanaman berbunga dan berbuah",
                    color:
                      "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300",
                  },
                ].map(({ istilah, kepanjangan, desc, color }) => (
                  <div
                    key={istilah}
                    className={`border rounded-2xl p-3 ${color}`}
                  >
                    <p className="text-base font-black">{istilah}</p>
                    <p className="text-xs font-semibold mt-0.5">
                      {kepanjangan}
                    </p>
                    <p className="text-xs opacity-80 mt-1 leading-tight">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Daftar kartu tanaman */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataPanduanTanaman.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTanaman(t.id)}
                    className="text-left bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl group-hover:scale-110 transition-transform">
                        {t.emoji}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-lg text-foreground">
                          {t.nama}
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          {t.namaLatin}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                          {t.deskripsiSingkat}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="text-xs bg-muted border border-border rounded-full px-2.5 py-1">
                            ⏱️ {t.infoUmum.umurPanen}
                          </span>
                          <span className="text-xs bg-muted border border-border rounded-full px-2.5 py-1">
                            📅 {t.jadwalPemupukan.length} jadwal
                          </span>
                          <span className="text-xs bg-muted border border-border rounded-full px-2.5 py-1">
                            📖 {t.glosarium.length} istilah
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-1 text-xs text-primary font-semibold">
                      Lihat panduan lengkap{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── TAB: ILMU DASAR ───────────────────────────────── */}
      {activeTab === "ilmu-dasar" && (
        <IlmuDasarSection onPupukClick={scrollToPupuk} />
      )}

      {/* ── TAB: PANDUAN BERTANI ──────────────────────────── */}
      {activeTab === "panduan" && (
        <div className="space-y-5">
          <SectionHeader
            icon={BookOpen}
            title="Panduan Bertani Step-by-Step"
            subtitle="Untuk Anda yang baru pertama kali memegang cangkul. Ikuti langkah-langkah ini dan tanaman Anda akan tumbuh optimal."
            color="bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
          />

          {/* Ringkasan alur */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              🗺️ Alur Bertani Secara Garis Besar
            </p>
            <div className="flex items-start gap-2 overflow-x-auto pb-2">
              {dataTataCara.map((tc, i) => (
                <div key={tc.id} className="flex items-center gap-2 shrink-0">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-1">
                      {tc.emoji}
                    </div>
                    <p className="text-xs font-semibold text-foreground text-center max-w-16 leading-tight">
                      {tc.judul}
                    </p>
                  </div>
                  {i < dataTataCara.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mb-5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Kartu tata cara */}
          <div className="space-y-3">
            {dataTataCara.map((tc) => (
              <TataCaraCard key={tc.id} tc={tc} onProdukClick={scrollToPupuk} />
            ))}
          </div>

          {/* CTA menuju pupuk & agrokimia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white">
              <div className="flex items-start gap-3">
                <FlaskConical className="w-6 h-6 shrink-0 mt-0.5 text-green-200" />
                <div>
                  <p className="font-bold text-sm">Pelajari Pupuk</p>
                  <p className="text-xs text-green-100 mt-1">
                    {semuaPupuk.length} jenis pupuk dengan penjelasan lengkap,
                    dosis, dan waktu pakai.
                  </p>
                  <button
                    onClick={() => setActiveTab("pupuk")}
                    className="mt-3 flex items-center gap-2 bg-white text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    Buka Ensiklopedi Pupuk <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-red-500 to-orange-500 rounded-2xl p-5 text-white">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5 text-red-200" />
                <div>
                  <p className="font-bold text-sm">Pelajari Pestisida</p>
                  <p className="text-xs text-red-100 mt-1">
                    {dataAgrokimia.length} produk agrokimia — fungisida,
                    insektisida, dan lainnya.
                  </p>
                  <button
                    onClick={() => setActiveTab("agrokimia")}
                    className="mt-3 flex items-center gap-2 bg-white text-red-600 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    Buka Panduan Agrokimia <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: ENSIKLOPEDI PUPUK ────────────────────────── */}
      {activeTab === "pupuk" && (
        <div className="space-y-5" ref={pupukSectionRef}>
          <SectionHeader
            icon={Beaker}
            title="Ensiklopedi Pupuk Lengkap"
            subtitle="Semua yang perlu Anda tahu tentang pupuk — dari organik alami hingga kimia sintetis. Klik setiap kartu untuk detail lengkap."
            color="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
          />

          {/* Quick stats pupuk */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(
              [
                "organik",
                "hayati",
                "pembenah_tanah",
                "kimia_makro",
                "kimia_mikro",
              ] as const
            ).map((kat) => {
              const count = semuaPupuk.filter((p) => p.kategori === kat).length;
              return (
                <button
                  key={kat}
                  onClick={() => setFilterKategoriPupuk(kat)}
                  className={`rounded-xl p-3 text-center border transition-all ${
                    filterKategoriPupuk === kat
                      ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <p className="text-xl font-black text-foreground">{count}</p>
                  <p
                    className={`text-xs font-semibold mt-0.5 ${kategoriWarna[kat].split(" ")[1]}`}
                  >
                    {kategoriLabel[kat]}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Filter & search */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari pupuk..."
                value={searchPupuk}
                onChange={(e) => setSearchPupuk(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-xl border border-input bg-background text-sm w-44 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {searchPupuk && (
                <button
                  onClick={() => setSearchPupuk("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              )}
            </div>
            {[
              "semua",
              "organik",
              "kimia_makro",
              "kimia_mikro",
              "hayati",
              "pembenah_tanah",
            ].map((k) => (
              <button
                key={k}
                onClick={() => setFilterKategoriPupuk(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  filterKategoriPupuk === k
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {k === "semua"
                  ? "Semua"
                  : kategoriLabel[k as PupukData["kategori"]]}
              </button>
            ))}
            <span className="text-xs text-muted-foreground ml-auto">
              {filteredPupuk.length} jenis
            </span>
          </div>

          {/* Panduan cepat NPK */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                hara: "N (Nitrogen)",
                fungsi: "Daun hijau & tumbuh",
                contoh: "Urea, ZA",
                warna: "bg-green-500",
              },
              {
                hara: "P (Fosfor)",
                fungsi: "Akar kuat & berbuah",
                contoh: "SP-36, MAP",
                warna: "bg-red-400",
              },
              {
                hara: "K (Kalium)",
                fungsi: "Kualitas & ketahanan buah",
                contoh: "KCl, MKP",
                warna: "bg-orange-400",
              },
            ].map(({ hara, fungsi, contoh, warna }) => (
              <div
                key={hara}
                className="bg-card border border-border rounded-2xl p-3 text-center"
              >
                <div
                  className={`w-10 h-10 rounded-full ${warna} flex items-center justify-center text-white font-black text-lg mx-auto mb-2`}
                >
                  {hara[0]}
                </div>
                <p className="text-xs font-bold text-foreground">{hara}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{fungsi}</p>
                <p className="text-xs text-primary font-medium mt-1">
                  {contoh}
                </p>
              </div>
            ))}
          </div>

          {/* Jadwal pemupukan per fase */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-muted/30">
              <p className="text-sm font-bold text-foreground">
                📅 Jadwal Pemupukan Ideal per Fase
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Panduan umum untuk tanaman buah/sayuran (cabai, tomat, semangka,
                melon)
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">
                      Fase
                    </th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">
                      Waktu
                    </th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">
                      Pupuk Utama
                    </th>
                    <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">
                      Tujuan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      fase: "Persiapan Lahan",
                      waktu: "2 mgg sebelum tanam",
                      pupuk: "Pupuk kandang + SP-36 + KCl",
                      tujuan: "Modal hara dasar",
                      badge:
                        "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
                    },
                    {
                      fase: "Semai / Awal",
                      waktu: "0–2 MST",
                      pupuk: "MAP + POC encer",
                      tujuan: "Dorong pertumbuhan akar",
                      badge:
                        "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
                    },
                    {
                      fase: "Vegetatif",
                      waktu: "2–5 MST",
                      pupuk: "Urea / ZA + NPK Phonska",
                      tujuan: "Daun lebat & batang kuat",
                      badge:
                        "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
                    },
                    {
                      fase: "Pra-Bunga",
                      waktu: "5–7 MST",
                      pupuk: "NPK Mutiara + Boron foliar",
                      tujuan: "Rangsang bunga, cegah rontok",
                      badge:
                        "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
                    },
                    {
                      fase: "Pembungaan",
                      waktu: "7–9 MST",
                      pupuk: "MKP 0-52-34 + KCl",
                      tujuan: "Maksimalkan set buah",
                      badge:
                        "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
                    },
                    {
                      fase: "Pembesaran Buah",
                      waktu: "9–12 MST",
                      pupuk: "NPK Mutiara + Ca Nitrat",
                      tujuan: "Buah besar, tidak busuk ujung",
                      badge:
                        "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
                    },
                    {
                      fase: "Pra-Panen",
                      waktu: "2 mgg sebelum panen",
                      pupuk: "KCl + POC (hentikan N)",
                      tujuan: "Perkuat rasa & warna buah",
                      badge:
                        "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
                    },
                  ].map((row) => (
                    <tr
                      key={row.fase}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-2.5">
                        <span
                          className={`px-2 py-0.5 rounded-full font-semibold text-xs ${row.badge}`}
                        >
                          {row.fase}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-muted-foreground whitespace-nowrap">
                        {row.waktu}
                      </td>
                      <td className="px-4 py-2.5 font-medium text-foreground">
                        {row.pupuk}
                      </td>
                      <td className="px-4 py-2.5 text-muted-foreground">
                        {row.tujuan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Daftar pupuk */}
          <div className="space-y-3">
            {filteredPupuk.map((p) => (
              <PupukCard
                key={p.id}
                p={p}
                isHighlighted={highlightedPupuk === p.id}
              />
            ))}
            {filteredPupuk.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <FlaskConical className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Pupuk tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── TAB: AGROKIMIA ───────────────────────────────── */}
      {activeTab === "agrokimia" && (
        <div className="space-y-5">
          <SectionHeader
            icon={ShieldAlert}
            title="Pestisida & Agrokimia"
            subtitle="Insektisida, fungisida, bakterisida, akarisida — apa bedanya dan cara menggunakannya dengan aman dan benar."
            color="bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
          />

          {/* Penjelasan kategori agrokimia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(
              Object.entries(penjelasanKategoriAgrokimia) as [
                KategoriAgrokimia,
                (typeof penjelasanKategoriAgrokimia)[KategoriAgrokimia],
              ][]
            ).map(([key, info]) => (
              <button
                key={key}
                onClick={() =>
                  setFilterKategoriAgro(
                    filterKategoriAgro === key ? "semua" : key,
                  )
                }
                className={`text-left p-4 rounded-2xl border transition-all ${
                  filterKategoriAgro === key
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{info.emoji}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${info.warnaBadge}`}
                  >
                    {info.judul}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {info.deskripsi}
                </p>
              </button>
            ))}
          </div>

          {/* Peringatan umum */}
          <div className="flex gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4">
            <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                Keselamatan Penggunaan Pestisida
              </p>
              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Selalu pakai APD: masker,
                  sarung tangan, kacamata, baju lengan panjang
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Jangan semprot saat angin
                  kencang atau siang hari terik
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Rotasi bahan aktif untuk
                  mencegah resistensi hama/jamur
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Perhatikan masa karensa —
                  jangan panen sebelum waktunya
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Simpan di tempat
                  terkunci, jauh dari jangkauan anak-anak
                </li>
              </ul>
            </div>
          </div>

          {/* Filter & Search */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari produk, bahan aktif, hama..."
                value={searchAgro}
                onChange={(e) => setSearchAgro(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-xl border border-input bg-background text-sm w-56 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {searchAgro && (
                <button
                  onClick={() => setSearchAgro("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              )}
            </div>
            <button
              onClick={() => setFilterKategoriAgro("semua")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterKategoriAgro === "semua"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              Semua
            </button>
            {(
              Object.keys(penjelasanKategoriAgrokimia) as KategoriAgrokimia[]
            ).map((k) => (
              <button
                key={k}
                onClick={() => setFilterKategoriAgro(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  filterKategoriAgro === k
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {penjelasanKategoriAgrokimia[k].emoji}{" "}
                {penjelasanKategoriAgrokimia[k].judul}
              </button>
            ))}
            <span className="text-xs text-muted-foreground ml-auto">
              {filteredAgro.length} produk
            </span>
          </div>

          {/* Daftar agrokimia */}
          <div className="space-y-3">
            {filteredAgro.map((a) => (
              <AgrokimiaCard
                key={a.id}
                a={a}
                isHighlighted={highlightedAgro === a.id}
              />
            ))}
            {filteredAgro.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <ShieldAlert className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Produk tidak ditemukan</p>
              </div>
            )}
          </div>

          {/* CTA ke penyakit */}
          <div className="bg-linear-to-r from-red-500 to-orange-500 rounded-2xl p-5 text-white">
            <div className="flex items-start gap-3">
              <Bug className="w-6 h-6 shrink-0 mt-0.5 text-red-200" />
              <div>
                <p className="font-bold">Sudah tahu produknya?</p>
                <p className="text-sm text-red-100 mt-1">
                  Lihat panduan penyakit untuk tahu kapan dan produk apa yang
                  tepat digunakan.
                </p>
                <button
                  onClick={() => setActiveTab("penyakit")}
                  className="mt-3 flex items-center gap-2 bg-white text-red-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-red-50 transition-colors"
                >
                  Lihat Panduan Penyakit <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: PENYAKIT ─────────────────────────────────── */}
      {activeTab === "penyakit" && (
        <div className="space-y-5">
          <SectionHeader
            icon={Bug}
            title="Panduan Penyakit Tanaman"
            subtitle="Identifikasi penyakit, pahami penyebabnya, dan atasi dengan cara yang tepat. Klik badge pupuk atau agrokimia untuk melihat detailnya."
            color="bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
          />

          {/* Quick stats penyakit */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {(["jamur", "virus", "bakteri", "hama", "fisiologis"] as const).map(
              (kat) => {
                const count = dataPenyakitPanduan.filter(
                  (p) => p.kategori === kat,
                ).length;
                const warna = kategoriPenyakitWarna[kat];
                const emoji = {
                  jamur: "🍄",
                  virus: "🦠",
                  bakteri: "🔴",
                  hama: "🐛",
                  fisiologis: "🌿",
                }[kat];
                return (
                  <button
                    key={kat}
                    onClick={() => setFilterKategoriPenyakit(kat)}
                    className={`rounded-xl p-3 text-center border transition-all ${
                      filterKategoriPenyakit === kat
                        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                        : "border-border bg-card hover:bg-muted"
                    }`}
                  >
                    <span className="text-xl">{emoji}</span>
                    <p className="text-lg font-black text-foreground mt-0.5">
                      {count}
                    </p>
                    <p
                      className={`text-xs font-semibold capitalize ${warna.split(" ")[1]}`}
                    >
                      {kat}
                    </p>
                  </button>
                );
              },
            )}
          </div>

          {/* Alert penting */}
          <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                Pencegahan selalu lebih baik dari pengobatan!
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                Tanaman sehat = tanah sehat + pupuk tepat + sanitasi lahan yang
                baik. Ketika melihat tanda-tanda penyakit, segera tindak sebelum
                menyebar.
              </p>
            </div>
          </div>

          {/* Filter & search */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari penyakit..."
                value={searchPenyakit}
                onChange={(e) => setSearchPenyakit(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-xl border border-input bg-background text-sm w-44 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {searchPenyakit && (
                <button
                  onClick={() => setSearchPenyakit("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              )}
            </div>
            {["semua", "jamur", "virus", "bakteri", "hama", "fisiologis"].map(
              (k) => (
                <button
                  key={k}
                  onClick={() => setFilterKategoriPenyakit(k)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors capitalize ${
                    filterKategoriPenyakit === k
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {k === "semua" ? "Semua" : k}
                </button>
              ),
            )}
            <span className="text-xs text-muted-foreground ml-auto">
              {filteredPenyakit.length} penyakit
            </span>
          </div>

          {/* Daftar penyakit */}
          <div className="space-y-3">
            {filteredPenyakit.map((p) => (
              <PenyakitCard key={p.id} p={p} onPupukClick={scrollToPupuk} />
            ))}
            {filteredPenyakit.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Bug className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Penyakit tidak ditemukan</p>
              </div>
            )}
          </div>

          {/* CTA ke agrokimia */}
          <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5 text-orange-200" />
              <div>
                <p className="font-bold">Butuh detail produk pestisida?</p>
                <p className="text-sm text-orange-100 mt-1">
                  Lihat penjelasan lengkap setiap fungisida, insektisida, dan
                  bakterisida — dosis, karensa, dan peringatannya.
                </p>
                <button
                  onClick={() => setActiveTab("agrokimia")}
                  className="mt-3 flex items-center gap-2 bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  Buka Panduan Agrokimia <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
