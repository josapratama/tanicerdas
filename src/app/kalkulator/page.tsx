"use client";

import { useState } from "react";
import { Calculator, Leaf, Bird, TrendingUp, RefreshCw } from "lucide-react";
import { safeNumber, clampPositive } from "@/lib/utils";

const tabs = [
  { id: "pupuk", label: "Pupuk Tanaman", icon: Leaf },
  { id: "pakan", label: "Pakan Ayam", icon: Bird },
  { id: "bep", label: "Break Even Point", icon: TrendingUp },
  { id: "konversi", label: "Konversi Satuan", icon: Calculator },
] as const;
type TabId = (typeof tabs)[number]["id"];

function ResultBox({
  label,
  value,
  unit,
  color = "text-primary",
}: {
  label: string;
  value: string | number;
  unit?: string;
  color?: string;
}) {
  return (
    <div className="bg-muted/60 rounded-xl p-4 flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-bold text-lg ${color}`}>
        {value}
        {unit ? (
          <span className="text-sm font-normal text-muted-foreground ml-1">
            {unit}
          </span>
        ) : null}
      </span>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "number",
  placeholder,
  unit,
  min,
  step,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  unit?: string;
  min?: string;
  step?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1 block">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          step={step}
          className="flex-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        {unit && (
          <span className="text-sm text-muted-foreground shrink-0">{unit}</span>
        )}
      </div>
    </div>
  );
}

// ─── Tab Pupuk ────────────────────────────────────────────────────────────────
const PUPUK_PER_JENIS: Record<
  string,
  {
    dasar: { nama: string; dosis: number; satuan: "ton/ha" | "kg/ha" }[];
    susulan: { nama: string; dosis: number; satuan: "ton/ha" | "kg/ha" }[];
  }
> = {
  Cabai: {
    dasar: [
      { nama: "Pupuk Kandang", dosis: 20, satuan: "ton/ha" },
      { nama: "Dolomit / Kapur", dosis: 2, satuan: "ton/ha" },
      { nama: "NPK Mutiara 16-16-16", dosis: 400, satuan: "kg/ha" },
      { nama: "SP-36", dosis: 200, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "NPK 16-16-16 (susulan 1)", dosis: 200, satuan: "kg/ha" },
      { nama: "NPK 16-16-16 (susulan 2)", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl (susulan berbuah)", dosis: 150, satuan: "kg/ha" },
      { nama: "Urea (susulan)", dosis: 100, satuan: "kg/ha" },
    ],
  },
  Tomat: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 20, satuan: "ton/ha" },
      { nama: "Dolomit (jika pH < 6)", dosis: 1.5, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl", dosis: 150, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "NPK Phonska (susulan 1)", dosis: 100, satuan: "kg/ha" },
      { nama: "Urea (susulan 2)", dosis: 50, satuan: "kg/ha" },
      { nama: "NPK Mutiara 16-16-16 (generatif)", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl (pembesaran buah)", dosis: 150, satuan: "kg/ha" },
    ],
  },
  Semangka: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 20, satuan: "ton/ha" },
      { nama: "Dolomit", dosis: 1, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl", dosis: 150, satuan: "kg/ha" },
      { nama: "NPK Phonska", dosis: 200, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (pacu sulur)", dosis: 50, satuan: "kg/ha" },
      { nama: "NPK Mutiara (generatif)", dosis: 150, satuan: "kg/ha" },
      { nama: "KCl (pembesaran buah)", dosis: 150, satuan: "kg/ha" },
      { nama: "MKP 0-52-34 (pra panen)", dosis: 50, satuan: "kg/ha" },
    ],
  },
  Melon: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 20, satuan: "ton/ha" },
      { nama: "Dolomit", dosis: 1.5, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl", dosis: 150, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "NPK 16-16-16 (vegetatif)", dosis: 150, satuan: "kg/ha" },
      { nama: "Urea (vegetatif)", dosis: 50, satuan: "kg/ha" },
      { nama: "KCl (generatif)", dosis: 150, satuan: "kg/ha" },
      { nama: "MKP (pra panen)", dosis: 50, satuan: "kg/ha" },
    ],
  },
  Timun: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 15, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 150, satuan: "kg/ha" },
      { nama: "KCl", dosis: 100, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (vegetatif)", dosis: 50, satuan: "kg/ha" },
      { nama: "NPK Phonska (susulan 1)", dosis: 100, satuan: "kg/ha" },
      { nama: "KCl (generatif)", dosis: 100, satuan: "kg/ha" },
      { nama: "NPK Mutiara (rutin)", dosis: 100, satuan: "kg/ha" },
    ],
  },
  Terong: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 20, satuan: "ton/ha" },
      { nama: "Dolomit", dosis: 1, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl", dosis: 150, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "NPK Phonska (susulan 1)", dosis: 100, satuan: "kg/ha" },
      { nama: "Urea (vegetatif)", dosis: 75, satuan: "kg/ha" },
      { nama: "NPK Mutiara (generatif)", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl (generatif)", dosis: 150, satuan: "kg/ha" },
    ],
  },
  Jagung: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 10, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 200, satuan: "kg/ha" },
      { nama: "KCl", dosis: 100, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (susulan 1 — V4)", dosis: 150, satuan: "kg/ha" },
      { nama: "Urea (susulan 2 — V8)", dosis: 150, satuan: "kg/ha" },
      { nama: "NPK Phonska (susulan)", dosis: 100, satuan: "kg/ha" },
    ],
  },
  Singkong: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 10, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 150, satuan: "kg/ha" },
      { nama: "KCl", dosis: 100, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (susulan 1)", dosis: 100, satuan: "kg/ha" },
      { nama: "KCl (susulan 2)", dosis: 100, satuan: "kg/ha" },
      { nama: "NPK Phonska (susulan 3)", dosis: 150, satuan: "kg/ha" },
    ],
  },
  "Paria / Pare": {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 15, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 150, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (vegetatif)", dosis: 50, satuan: "kg/ha" },
      { nama: "NPK Phonska (susulan 1)", dosis: 100, satuan: "kg/ha" },
      { nama: "NPK Mutiara (generatif)", dosis: 100, satuan: "kg/ha" },
      { nama: "KCl (generatif)", dosis: 50, satuan: "kg/ha" },
    ],
  },
  "Labu Siam": {
    dasar: [
      { nama: "Pupuk Kandang Matang", dosis: 20, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 150, satuan: "kg/ha" },
      { nama: "Dolomit", dosis: 1, satuan: "ton/ha" },
    ],
    susulan: [
      { nama: "NPK Phonska (rutin bulanan)", dosis: 200, satuan: "kg/ha" },
      { nama: "NPK Mutiara (generatif)", dosis: 150, satuan: "kg/ha" },
      { nama: "KCl (generatif)", dosis: 100, satuan: "kg/ha" },
    ],
  },
  Kangkung: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 20, satuan: "ton/ha" },
      { nama: "NPK Phonska", dosis: 100, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (pacu daun)", dosis: 25, satuan: "kg/ha" },
      { nama: "POC (recovery setelah panen)", dosis: 30, satuan: "kg/ha" },
    ],
  },
  Bayam: {
    dasar: [
      { nama: "Pupuk Kandang / Kompos", dosis: 20, satuan: "ton/ha" },
      { nama: "NPK Phonska", dosis: 100, satuan: "kg/ha" },
    ],
    susulan: [{ nama: "Urea (HST 10–12)", dosis: 20, satuan: "kg/ha" }],
  },
  "Ubi Jalar": {
    dasar: [
      { nama: "Pupuk Kandang Matang", dosis: 15, satuan: "ton/ha" },
      { nama: "SP-36", dosis: 150, satuan: "kg/ha" },
      { nama: "KCl", dosis: 100, satuan: "kg/ha" },
    ],
    susulan: [
      { nama: "Urea (susulan 1)", dosis: 50, satuan: "kg/ha" },
      { nama: "NPK Phonska (susulan 1)", dosis: 50, satuan: "kg/ha" },
      {
        nama: "NPK Mutiara + KCl (pembesaran umbi)",
        dosis: 150,
        satuan: "kg/ha",
      },
    ],
  },
};

const JENIS_TANAMAN_KALKULATOR = Object.keys(PUPUK_PER_JENIS);

function KalkulatorPupuk() {
  const [luas, setLuas] = useState("");
  const [jarak, setJarak] = useState("50");
  const [jenisTanaman, setJenisTanaman] = useState("Cabai");

  // Clamp to positive
  const luasNum = clampPositive(safeNumber(luas));
  const jarakNum = Math.max(1, safeNumber(jarak, 50));
  const jumlahLubang = luasNum / ((jarakNum / 100) * (jarakNum / 100));
  const haLahan = luasNum / 10000;

  const pupukData = PUPUK_PER_JENIS[jenisTanaman] ?? PUPUK_PER_JENIS["Cabai"];

  function hitungKebutuhan(dosis: number, satuan: "ton/ha" | "kg/ha"): number {
    const dosisKg = satuan === "ton/ha" ? dosis * 1000 : dosis;
    return haLahan * dosisKg;
  }

  function formatKebutuhan(kg: number): string {
    if (kg >= 1000) return (kg / 1000).toFixed(2) + " ton";
    if (kg >= 1) return kg.toFixed(1) + " kg";
    return (kg * 1000).toFixed(0) + " gram";
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">
            Jenis Tanaman
          </label>
          <select
            value={jenisTanaman}
            onChange={(e) => setJenisTanaman(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm"
          >
            {JENIS_TANAMAN_KALKULATOR.map((j) => (
              <option key={j} value={j}>
                {j}
              </option>
            ))}
          </select>
        </div>
        <InputField
          label="Luas Lahan"
          value={luas}
          onChange={setLuas}
          placeholder="1000"
          unit="m²"
          min="0"
        />
        <InputField
          label="Jarak Tanam"
          value={jarak}
          onChange={setJarak}
          placeholder="50"
          unit="cm"
          min="10"
        />
      </div>
      {luasNum > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-3">
            <ResultBox
              label="Luas Lahan"
              value={haLahan.toFixed(4)}
              unit="hektar"
            />
            <ResultBox
              label="Estimasi Jumlah Lubang"
              value={Math.round(jumlahLubang).toLocaleString("id")}
              unit="lubang"
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Pupuk Dasar (sebelum tanam)
            </h4>
            <div className="space-y-2">
              {pupukData.dasar.map((p) => {
                const kg = hitungKebutuhan(p.dosis, p.satuan);
                return (
                  <div
                    key={p.nama}
                    className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {p.nama}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ({p.dosis} {p.satuan})
                      </span>
                    </div>
                    <span className="text-sm font-bold text-green-700 dark:text-green-400">
                      {formatKebutuhan(kg)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Pupuk Susulan
            </h4>
            <div className="space-y-2">
              {pupukData.susulan.map((p) => {
                const kg = hitungKebutuhan(p.dosis, p.satuan);
                return (
                  <div
                    key={p.nama}
                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {p.nama}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ({p.dosis} {p.satuan})
                      </span>
                    </div>
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-400">
                      {formatKebutuhan(kg)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-muted-foreground bg-muted/40 rounded-2xl">
          <Leaf className="w-10 h-10 mx-auto mb-2 opacity-30" />
          <p>Masukkan luas lahan untuk melihat kebutuhan pupuk</p>
        </div>
      )}
    </div>
  );
}

// ─── Tab Pakan ────────────────────────────────────────────────────────────────
function KalkulatorPakan() {
  const [jumlahAyam, setJumlahAyam] = useState("");
  const [jenis, setJenis] = useState<"petelur" | "pedaging" | "kampung">(
    "petelur",
  );
  const [hargaPakan, setHargaPakan] = useState("7500");

  const dosisPakan = { petelur: 0.12, pedaging: 0.15, kampung: 0.08 };
  const dosis = dosisPakan[jenis];
  const n = safeNumber(jumlahAyam);
  const harga = Math.max(1, safeNumber(hargaPakan, 7500));

  const perHari = n * dosis;
  const perMinggu = perHari * 7;
  const perBulan = perHari * 30;
  const biayaHari = perHari * harga;
  const biayaBulan = perBulan * harga;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField
          label="Jumlah Ayam"
          value={jumlahAyam}
          onChange={setJumlahAyam}
          placeholder="500"
          unit="ekor"
          min="0"
        />
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">
            Jenis Ayam
          </label>
          <select
            value={jenis}
            onChange={(e) => setJenis(e.target.value as typeof jenis)}
            className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm"
          >
            <option value="petelur">Petelur (120 g/ekor/hari)</option>
            <option value="pedaging">Pedaging (150 g/ekor/hari)</option>
            <option value="kampung">Kampung (80 g/ekor/hari)</option>
          </select>
        </div>
        <InputField
          label="Harga Pakan"
          value={hargaPakan}
          onChange={setHargaPakan}
          placeholder="7500"
          unit="Rp/kg"
          min="0"
        />
      </div>
      {jumlahAyam !== "" && n > 0 ? (
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Kebutuhan Pakan</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ResultBox
              label="Per Hari"
              value={perHari.toFixed(1)}
              unit="kg"
              color="text-orange-600"
            />
            <ResultBox
              label="Per Minggu"
              value={perMinggu.toFixed(1)}
              unit="kg"
              color="text-orange-600"
            />
            <ResultBox
              label="Per Bulan"
              value={perBulan.toFixed(0)}
              unit="kg"
              color="text-orange-600"
            />
          </div>
          <h4 className="font-semibold text-foreground pt-2">
            Estimasi Biaya Pakan
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultBox
              label="Biaya Per Hari"
              value={`Rp ${biayaHari.toLocaleString("id")}`}
              color="text-red-500"
            />
            <ResultBox
              label="Biaya Per Bulan"
              value={`Rp ${biayaBulan.toLocaleString("id")}`}
              color="text-red-500"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-muted-foreground bg-muted/40 rounded-2xl">
          <Bird className="w-10 h-10 mx-auto mb-2 opacity-30" />
          <p>Masukkan jumlah ayam untuk kalkulasi pakan</p>
        </div>
      )}
    </div>
  );
}

// ─── Tab BEP ──────────────────────────────────────────────────────────────────
function KalkulatorBEP() {
  const [modal, setModal] = useState("");
  const [biayaOp, setBiayaOp] = useState("");
  const [biayaVariabel, setBiayaVariabel] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [produksi, setProduksi] = useState("");

  // Clamp to non-negative
  const M = clampPositive(safeNumber(modal));
  const B = clampPositive(safeNumber(biayaOp));
  const BV = clampPositive(safeNumber(biayaVariabel));
  const H = clampPositive(safeNumber(hargaJual));
  const P = clampPositive(safeNumber(produksi));

  // Biaya tetap = modal + biaya operasional
  const biayaTetap = M + B;
  // Margin kontribusi per unit = harga jual - biaya variabel per unit
  const marginKontribusi = H - BV;
  // BEP unit = biaya tetap / margin kontribusi (formula standar)
  const bepUnit = marginKontribusi > 0 ? biayaTetap / marginKontribusi : 0;
  // BEP rupiah = BEP unit × harga jual
  const bepRupiah = bepUnit * H;

  const totalBiaya = biayaTetap + BV * P;
  const pendapatan = H * P;
  const laba = pendapatan - totalBiaya;
  const margin = pendapatan > 0 ? (laba / pendapatan) * 100 : 0;
  const roi = M > 0 ? (laba / M) * 100 : 0;
  const hasInput = (M > 0 || B > 0) && H > 0;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-3 text-xs text-blue-700 dark:text-blue-300">
        <strong>Rumus BEP:</strong> Unit Impas = Biaya Tetap ÷ (Harga Jual −
        Biaya Variabel/unit). Biaya tetap = modal + biaya operasional. Biaya
        variabel = ongkos per unit produk (benih, plastik, dll).
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Modal Investasi Awal (Rp)"
          value={modal}
          onChange={setModal}
          placeholder="10000000"
          min="0"
        />
        <InputField
          label="Biaya Operasional Tetap/Periode (Rp)"
          value={biayaOp}
          onChange={setBiayaOp}
          placeholder="5000000"
          min="0"
        />
        <InputField
          label="Biaya Variabel per Unit (Rp)"
          value={biayaVariabel}
          onChange={setBiayaVariabel}
          placeholder="5000"
          min="0"
        />
        <InputField
          label="Harga Jual per Unit (Rp)"
          value={hargaJual}
          onChange={setHargaJual}
          placeholder="25000"
          min="0"
        />
        <InputField
          label="Estimasi Produksi per Periode"
          value={produksi}
          onChange={setProduksi}
          placeholder="1000"
          unit="unit"
          min="0"
        />
      </div>
      {hasInput ? (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultBox
              label="Biaya Tetap"
              value={`Rp ${biayaTetap.toLocaleString("id")}`}
              color="text-red-500"
            />
            <ResultBox
              label="Margin Kontribusi/unit"
              value={`Rp ${marginKontribusi.toLocaleString("id")}`}
              color={marginKontribusi > 0 ? "text-green-600" : "text-red-500"}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultBox
              label="BEP Unit (titik impas)"
              value={
                marginKontribusi > 0
                  ? `${Math.ceil(bepUnit).toLocaleString("id")} unit`
                  : "N/A"
              }
              color="text-blue-600"
            />
            <ResultBox
              label="BEP Rupiah"
              value={
                marginKontribusi > 0
                  ? `Rp ${Math.round(bepRupiah).toLocaleString("id")}`
                  : "N/A"
              }
              color="text-blue-600"
            />
          </div>
          {P > 0 && marginKontribusi > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ResultBox
                  label="Total Biaya (tetap + variabel)"
                  value={`Rp ${totalBiaya.toLocaleString("id")}`}
                  color="text-red-500"
                />
                <ResultBox
                  label="Pendapatan Estimasi"
                  value={`Rp ${pendapatan.toLocaleString("id")}`}
                  color="text-green-600"
                />
              </div>
              <div
                className={`rounded-xl p-4 ${laba >= 0 ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">
                    {laba >= 0 ? "🎉 Estimasi Laba" : "⚠️ Estimasi Rugi"}
                  </span>
                  <span
                    className={`text-xl font-bold ${laba >= 0 ? "text-green-600" : "text-red-500"}`}
                  >
                    Rp {Math.abs(laba).toLocaleString("id")}
                  </span>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">Margin: </span>
                    <span className="font-semibold">{margin.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ROI: </span>
                    <span className="font-semibold">{roi.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                Anda perlu menjual minimal{" "}
                <span className="font-bold text-foreground">
                  {Math.ceil(bepUnit).toLocaleString("id")} unit
                </span>{" "}
                dari {P.toLocaleString("id")} unit produksi untuk mencapai titik
                impas.
                {P >= bepUnit ? (
                  <span className="text-green-600 font-medium">
                    {" "}
                    ✓ Target produksi memadai.
                  </span>
                ) : (
                  <span className="text-red-500 font-medium">
                    {" "}
                    ✗ Produksi belum cukup untuk BEP.
                  </span>
                )}
              </div>
            </>
          )}
          {marginKontribusi <= 0 && H > 0 && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-sm text-red-600 dark:text-red-400">
              ⚠️ Harga jual lebih rendah dari atau sama dengan biaya variabel
              per unit. BEP tidak bisa dicapai — kurangi biaya produksi atau
              naikkan harga jual.
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-muted-foreground bg-muted/40 rounded-2xl">
          <TrendingUp className="w-10 h-10 mx-auto mb-2 opacity-30" />
          <p>Isi data modal dan harga jual untuk kalkulasi BEP</p>
        </div>
      )}
    </div>
  );
}

// ─── Tab Konversi ─────────────────────────────────────────────────────────────
function KonversiSatuan() {
  const [nilai, setNilai] = useState("");
  const [kategori, setKategori] = useState<"berat" | "luas" | "volume">(
    "berat",
  );

  const n = clampPositive(safeNumber(nilai));

  const konversi = {
    berat: [
      { label: "Gram", val: n * 1000 },
      { label: "Kilogram", val: n },
      { label: "Kuintal", val: n / 100 },
      { label: "Ton", val: n / 1000 },
      { label: "Ons", val: n * 10 },
      { label: "Pound (lb)", val: n * 2.20462 },
    ],
    luas: [
      { label: "m²", val: n },
      { label: "Are (a)", val: n / 100 },
      { label: "Hektar (ha)", val: n / 10000 },
      { label: "Bata", val: n / 14.0625 },
      { label: "Tumbak", val: n / 14.0625 },
      { label: "Bau (Jawa)", val: n / 7096.5 },
    ],
    volume: [
      { label: "mililiter (ml)", val: n * 1000 },
      { label: "Liter (L)", val: n },
      { label: "Desiliter (dl)", val: n * 10 },
      { label: "Galon (3.785L)", val: n / 3.785 },
      { label: "Ember 20L", val: n / 20 },
      { label: "Jerigen 35L", val: n / 35 },
    ],
  };
  const satuanAsal = {
    berat: "kilogram (kg)",
    luas: "meter persegi (m²)",
    volume: "liter (L)",
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">
            Kategori
          </label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value as typeof kategori)}
            className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-sm"
          >
            <option value="berat">Berat</option>
            <option value="luas">Luas</option>
            <option value="volume">Volume</option>
          </select>
        </div>
        <InputField
          label={`Nilai dalam ${satuanAsal[kategori]}`}
          value={nilai}
          onChange={setNilai}
          placeholder="1"
          min="0"
          step="any"
        />
      </div>
      {n > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {konversi[kategori].map((k) => (
            <div key={k.label} className="bg-muted/60 rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-1">{k.label}</p>
              <p className="font-bold text-foreground">
                {k.val < 0.001
                  ? k.val.toExponential(2)
                  : k.val > 1000000
                    ? (k.val / 1000000).toFixed(2) + "jt"
                    : k.val.toFixed(4).replace(/\.?0+$/, "")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-muted-foreground bg-muted/40 rounded-2xl">
          <RefreshCw className="w-10 h-10 mx-auto mb-2 opacity-30" />
          <p>Masukkan nilai untuk konversi satuan</p>
        </div>
      )}
    </div>
  );
}

export default function KalkulatorPage() {
  const [activeTab, setActiveTab] = useState<TabId>("pupuk");
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Tab bar — 2×2 grid on mobile, single row on sm+ */}
      <div className="bg-card border border-border rounded-2xl p-1.5 grid grid-cols-2 sm:flex gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium transition-all justify-center sm:flex-1 ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-1">
          {tabs.find((t) => t.id === activeTab)?.label}
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          {activeTab === "pupuk" &&
            "Hitung kebutuhan pupuk berdasarkan jenis tanaman dan luas lahan Anda"}
          {activeTab === "pakan" &&
            "Hitung kebutuhan dan biaya pakan ayam harian hingga bulanan"}
          {activeTab === "bep" &&
            "Hitung titik impas modal usaha budidaya Anda"}
          {activeTab === "konversi" &&
            "Konversi satuan berat, luas, dan volume pertanian"}
        </p>
        {activeTab === "pupuk" && <KalkulatorPupuk />}
        {activeTab === "pakan" && <KalkulatorPakan />}
        {activeTab === "bep" && <KalkulatorBEP />}
        {activeTab === "konversi" && <KonversiSatuan />}
      </div>
    </div>
  );
}
