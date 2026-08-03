"use client";

import { useState } from "react";
import {
  Bird,
  BookOpen,
  ShieldCheck,
  Syringe,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Search,
  X,
  Zap,
  Thermometer,
  Wind,
  Droplets,
} from "lucide-react";
import {
  dataPenyakitTernak,
  dataTataCaraTernak,
  dataObatVaksin,
} from "@/lib/panduan";
import type { PenyakitTernak, ObatVaksinTernak } from "@/lib/panduan";

// ─── helpers ──────────────────────────────────────────────────────────────────

const bahayaWarna: Record<PenyakitTernak["tingkatBahaya"], string> = {
  rendah:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  sedang:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  tinggi: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

const kategoriPenyakitWarna: Record<PenyakitTernak["kategori"], string> = {
  virus:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  bakteri: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  parasit: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  nutrisi: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  lingkungan:
    "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
};

const kategoriObatWarna: Record<ObatVaksinTernak["kategori"], string> = {
  vaksin:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  antibiotik:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  vitamin:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  antiparasit:
    "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  desinfektan:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
};

const kategoriObatLabel: Record<ObatVaksinTernak["kategori"], string> = {
  vaksin: "Vaksin",
  antibiotik: "Antibiotik",
  vitamin: "Vitamin/Suplemen",
  antiparasit: "Antiparasit",
  desinfektan: "Desinfektan",
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

function PenyakitTernakCard({ p }: { p: PenyakitTernak }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id={`penyakit-ternak-${p.id}`}
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
              🐔 {p.jenisHewan}
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
                  <p className="text-sm text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ObatVaksinCard({ o }: { o: ObatVaksinTernak }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        <span className="text-2xl shrink-0 mt-0.5">{o.emoji}</span>
        <div className="flex-1 min-w-0">
          <span className="font-bold text-foreground block mb-1">{o.nama}</span>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${kategoriObatWarna[o.kategori]}`}
            >
              {kategoriObatLabel[o.kategori]}
            </span>
            {o.merekContoh && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {o.merekContoh}
              </span>
            )}
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
          <p className="text-sm text-foreground leading-relaxed">
            {o.deskripsi}
          </p>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              ✅ Fungsi
            </p>
            <ul className="space-y-1">
              {o.fungsi.map((f, i) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                📋 Cara Pakai
              </p>
              <p className="text-sm text-foreground">{o.caraPakai}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                ⚖️ Dosis
              </p>
              <p className="text-sm text-foreground">{o.dosis}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                ⏰ Waktu
              </p>
              <p className="text-sm text-foreground">{o.waktu}</p>
            </div>
          </div>

          {o.peringatan && o.peringatan.length > 0 && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Peringatan
              </p>
              <ul className="space-y-1">
                {o.peringatan.map((w, i) => (
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

function TataCaraTernakCard({ tc }: { tc: (typeof dataTataCaraTernak)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [openStep, setOpenStep] = useState<number | null>(null);

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
                        <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          <span className="font-semibold">Tips: </span>
                          {langkah.tips}
                        </p>
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
  { id: "panduan", label: "📖 Panduan Berternak", icon: BookOpen },
  { id: "penyakit", label: "🦠 Penyakit Ternak", icon: ShieldCheck },
  { id: "obat", label: "💊 Obat & Vaksin", icon: Syringe },
] as const;

type TabId = (typeof NAV_TABS)[number]["id"];

export default function PanduanTernakPage() {
  const [activeTab, setActiveTab] = useState<TabId>("panduan");
  const [searchPenyakit, setSearchPenyakit] = useState("");
  const [filterKategoriPenyakit, setFilterKategoriPenyakit] =
    useState<string>("semua");
  const [searchObat, setSearchObat] = useState("");
  const [filterKategoriObat, setFilterKategoriObat] = useState<string>("semua");

  const filteredPenyakit = dataPenyakitTernak.filter((p) => {
    const matchSearch =
      searchPenyakit === "" ||
      p.nama.toLowerCase().includes(searchPenyakit.toLowerCase()) ||
      p.penyebab.toLowerCase().includes(searchPenyakit.toLowerCase());
    const matchKategori =
      filterKategoriPenyakit === "semua" ||
      p.kategori === filterKategoriPenyakit;
    return matchSearch && matchKategori;
  });

  const filteredObat = dataObatVaksin.filter((o) => {
    const matchSearch =
      searchObat === "" ||
      o.nama.toLowerCase().includes(searchObat.toLowerCase()) ||
      (o.merekContoh ?? "").toLowerCase().includes(searchObat.toLowerCase());
    const matchKategori =
      filterKategoriObat === "semua" || o.kategori === filterKategoriObat;
    return matchSearch && matchKategori;
  });

  return (
    <div className="space-y-6 pb-10">
      {/* ── Hero Banner ──────────────────────────────────── */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-orange-500 via-amber-500 to-yellow-600 text-white p-6 sm:p-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 text-8xl">🐔</div>
          <div className="absolute top-8 right-8 text-6xl">🥚</div>
          <div className="absolute bottom-4 left-1/3 text-7xl">🐣</div>
          <div className="absolute bottom-6 right-4 text-5xl">🌾</div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-200 text-sm font-medium mb-3">
            <Bird className="w-4 h-4" />
            <span>Panduan Lengkap untuk Peternak Pemula</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Belajar Berternak Ayam
            <br />
            <span className="text-amber-200">dari Nol sampai Panen</span>
          </h1>
          <p className="mt-4 text-amber-100 text-sm sm:text-base max-w-lg">
            Panduan terlengkap: tata cara berternak step-by-step, ensiklopedi
            penyakit ternak beserta cara mengatasinya, dan panduan obat serta
            vaksin.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              {
                icon: BookOpen,
                label: `${dataTataCaraTernak.length} Panduan Tahap`,
              },
              {
                icon: ShieldCheck,
                label: `${dataPenyakitTernak.length} Jenis Penyakit`,
              },
              {
                icon: Syringe,
                label: `${dataObatVaksin.length} Obat & Vaksin`,
              },
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

      {/* ── Kebutuhan Dasar Ternak (Info Cards) ──────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            icon: Thermometer,
            label: "Suhu Kandang",
            desc: "DOC: 32–35°C, turun 2–3°C/mgg. Dewasa: 18–25°C",
            color: "text-orange-500 bg-orange-100 dark:bg-orange-900/30",
          },
          {
            icon: Wind,
            label: "Ventilasi",
            desc: "Amonia <25ppm. Sirkulasi udara baik cegah CRD",
            color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
          },
          {
            icon: Droplets,
            label: "Air Minum",
            desc: "Ayam butuh air 2× lebih banyak dari pakan. Wajib bersih",
            color: "text-teal-500 bg-teal-100 dark:bg-teal-900/30",
          },
          {
            icon: ShieldCheck,
            label: "Vaksinasi",
            desc: "ND, Gumboro, AI. Vaksin tepat waktu = investasi termurah",
            color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
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

      {/* ── TAB: PANDUAN BERTERNAK ────────────────────────── */}
      {activeTab === "panduan" && (
        <div className="space-y-5">
          <SectionHeader
            icon={BookOpen}
            title="Panduan Berternak Step-by-Step"
            subtitle="Dari persiapan kandang, pemilihan DOC, manajemen pakan, hingga program vaksinasi — semua yang perlu Anda tahu untuk mulai berternak."
            color="bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400"
          />

          {/* Ringkasan alur */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              🗺️ Alur Berternak Secara Garis Besar
            </p>
            <div className="flex items-start gap-2 overflow-x-auto pb-2">
              {dataTataCaraTernak.map((tc, i) => (
                <div key={tc.id} className="flex items-center gap-2 shrink-0">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-1">
                      {tc.emoji}
                    </div>
                    <p className="text-xs font-semibold text-foreground text-center max-w-16 leading-tight">
                      {tc.judul}
                    </p>
                  </div>
                  {i < dataTataCaraTernak.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mb-5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {dataTataCaraTernak.map((tc) => (
              <TataCaraTernakCard key={tc.id} tc={tc} />
            ))}
          </div>

          {/* CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-linear-to-br from-red-500 to-orange-500 rounded-2xl p-5 text-white">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 shrink-0 mt-0.5 text-red-200" />
                <div>
                  <p className="font-bold text-sm">Kenali Penyakit Ternak</p>
                  <p className="text-xs text-red-100 mt-1">
                    {dataPenyakitTernak.length} jenis penyakit lengkap dengan
                    gejala, pencegahan, dan penanganan.
                  </p>
                  <button
                    onClick={() => setActiveTab("penyakit")}
                    className="mt-3 flex items-center gap-2 bg-white text-red-600 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    Lihat Penyakit Ternak <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white">
              <div className="flex items-start gap-3">
                <Syringe className="w-6 h-6 shrink-0 mt-0.5 text-purple-200" />
                <div>
                  <p className="font-bold text-sm">Panduan Obat & Vaksin</p>
                  <p className="text-xs text-purple-100 mt-1">
                    {dataObatVaksin.length} produk lengkap — vaksin, antibiotik,
                    antiparasit, dan desinfektan.
                  </p>
                  <button
                    onClick={() => setActiveTab("obat")}
                    className="mt-3 flex items-center gap-2 bg-white text-purple-600 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    Lihat Obat & Vaksin <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: PENYAKIT TERNAK ──────────────────────────── */}
      {activeTab === "penyakit" && (
        <div className="space-y-5">
          <SectionHeader
            icon={ShieldCheck}
            title="Penyakit Ternak & Cara Mengatasinya"
            subtitle="Kenali gejala sejak dini, pahami penyebabnya, dan tangani dengan tepat sebelum menyebar ke seluruh kandang."
            color="bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
          />

          {/* Quick stats */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {(
              ["virus", "bakteri", "parasit", "nutrisi", "lingkungan"] as const
            ).map((kat) => {
              const count = dataPenyakitTernak.filter(
                (p) => p.kategori === kat,
              ).length;
              return (
                <button
                  key={kat}
                  onClick={() =>
                    setFilterKategoriPenyakit(
                      filterKategoriPenyakit === kat ? "semua" : kat,
                    )
                  }
                  className={`rounded-xl p-3 text-center border transition-all ${
                    filterKategoriPenyakit === kat
                      ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <p className="text-xl font-black text-foreground">{count}</p>
                  <p
                    className={`text-xs font-semibold mt-0.5 ${kategoriPenyakitWarna[kat].split(" ")[1]}`}
                  >
                    {kat.charAt(0).toUpperCase() + kat.slice(1)}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Filter & Search */}
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
            {[
              "semua",
              "virus",
              "bakteri",
              "parasit",
              "nutrisi",
              "lingkungan",
            ].map((k) => (
              <button
                key={k}
                onClick={() => setFilterKategoriPenyakit(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors capitalize ${
                  filterKategoriPenyakit === k
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {k === "semua"
                  ? "Semua"
                  : k.charAt(0).toUpperCase() + k.slice(1)}
              </button>
            ))}
            <span className="text-xs text-muted-foreground ml-auto">
              {filteredPenyakit.length} penyakit
            </span>
          </div>

          <div className="space-y-3">
            {filteredPenyakit.map((p) => (
              <PenyakitTernakCard key={p.id} p={p} />
            ))}
            {filteredPenyakit.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <ShieldCheck className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Penyakit tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── TAB: OBAT & VAKSIN ──────────────────────────────── */}
      {activeTab === "obat" && (
        <div className="space-y-5">
          <SectionHeader
            icon={Syringe}
            title="Panduan Obat & Vaksin Ternak"
            subtitle="Vaksin, antibiotik, antiparasit, vitamin, dan desinfektan — dosis, cara pakai, dan peringatan penting untuk setiap produk."
            color="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400"
          />

          {/* Peringatan */}
          <div className="flex gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                Peringatan Penggunaan Obat Ternak
              </p>
              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Antibiotik hanya
                  digunakan atas saran dokter hewan — hindari resistensi
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Perhatikan withdrawal
                  period sebelum konsumsi daging atau telur
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Simpan vaksin di kulkas
                  2–8°C, jangan beku, hindari cahaya langsung
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 shrink-0" /> Desinfektan keras seperti
                  formalin — gunakan APD lengkap
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
                placeholder="Cari obat atau merek..."
                value={searchObat}
                onChange={(e) => setSearchObat(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-xl border border-input bg-background text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {searchObat && (
                <button
                  onClick={() => setSearchObat("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              )}
            </div>
            {[
              "semua",
              "vaksin",
              "antibiotik",
              "vitamin",
              "antiparasit",
              "desinfektan",
            ].map((k) => (
              <button
                key={k}
                onClick={() => setFilterKategoriObat(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  filterKategoriObat === k
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {k === "semua"
                  ? "Semua"
                  : kategoriObatLabel[k as ObatVaksinTernak["kategori"]]}
              </button>
            ))}
            <span className="text-xs text-muted-foreground ml-auto">
              {filteredObat.length} produk
            </span>
          </div>

          <div className="space-y-3">
            {filteredObat.map((o) => (
              <ObatVaksinCard key={o.id} o={o} />
            ))}
            {filteredObat.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Syringe className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>Produk tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
