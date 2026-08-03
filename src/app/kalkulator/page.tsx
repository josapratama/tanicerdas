"use client";

import { useState } from "react";
import { Calculator, Leaf, Bird, TrendingUp, RefreshCw } from "lucide-react";

const tabs = [
  { id: "pupuk", label: "Pupuk Cabai", icon: Leaf },
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
function KalkulatorPupuk() {
  const [luas, setLuas] = useState("");
  const [jarak, setJarak] = useState("50");

  // Clamp to positive
  const luasNum = Math.max(0, Number(luas) || 0);
  const jarakNum = Math.max(1, Number(jarak) || 50);
  const jumlahLubang = luasNum / ((jarakNum / 100) * (jarakNum / 100));
  const haLahan = luasNum / 10000;

  // Bug fix: dosis bertipe campuran ton/ha dan kg/ha — konversi ke kg untuk
  // konsistensi tampilan. 1 ton = 1000 kg.
  const pupukDasar = [
    { nama: "Pupuk Kandang", dosis: 20, satuan: "ton/ha" as const },
    { nama: "Dolomit / Kapur", dosis: 2, satuan: "ton/ha" as const },
    { nama: "NPK Mutiara 16-16-16", dosis: 400, satuan: "kg/ha" as const },
    { nama: "SP-36", dosis: 200, satuan: "kg/ha" as const },
  ];
  const pupukSusulan = [
    { nama: "NPK 16-16-16 (susulan 1)", dosis: 200, satuan: "kg/ha" as const },
    { nama: "NPK 16-16-16 (susulan 2)", dosis: 200, satuan: "kg/ha" as const },
    { nama: "KCl (susulan berbuah)", dosis: 150, satuan: "kg/ha" as const },
    { nama: "Urea (susulan)", dosis: 100, satuan: "kg/ha" as const },
  ];

  // Konversi ke kg: ton/ha × 1000 → kg/ha, lalu × haLahan
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              {pupukDasar.map((p) => {
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
              {pupukSusulan.map((p) => {
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
        <div className="text-center py-10 text-muted-foreground">
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
  // Clamp negatives
  const n = Math.max(0, Number(jumlahAyam) || 0);
  const harga = Math.max(0, Number(hargaPakan) || 7500);

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
      {n > 0 ? (
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
        <div className="text-center py-10 text-muted-foreground">
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
  const [hargaJual, setHargaJual] = useState("");
  const [produksi, setProduksi] = useState("");

  // Clamp to non-negative
  const M = Math.max(0, Number(modal) || 0);
  const B = Math.max(0, Number(biayaOp) || 0);
  const H = Math.max(0, Number(hargaJual) || 0);
  const P = Math.max(0, Number(produksi) || 0);

  const totalBiaya = M + B;
  const pendapatan = H * P;
  const laba = pendapatan - totalBiaya;
  const bepUnit = H > 0 ? totalBiaya / H : 0;
  const bepRupiah = totalBiaya;
  const margin = pendapatan > 0 ? (laba / pendapatan) * 100 : 0;
  const roi = M > 0 ? (laba / M) * 100 : 0;
  const hasInput = (M > 0 || B > 0) && H > 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Modal Investasi Awal (Rp)"
          value={modal}
          onChange={setModal}
          placeholder="10000000"
          min="0"
        />
        <InputField
          label="Biaya Operasional/Periode (Rp)"
          value={biayaOp}
          onChange={setBiayaOp}
          placeholder="5000000"
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
              label="Total Biaya"
              value={`Rp ${totalBiaya.toLocaleString("id")}`}
              color="text-red-500"
            />
            <ResultBox
              label="Pendapatan Estimasi"
              value={`Rp ${pendapatan.toLocaleString("id")}`}
              color="text-green-600"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultBox
              label="BEP Unit"
              value={`${bepUnit.toFixed(0)} unit`}
              color="text-blue-600"
            />
            <ResultBox
              label="BEP Rupiah"
              value={`Rp ${bepRupiah.toLocaleString("id")}`}
              color="text-blue-600"
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
          {P > 0 && (
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
          )}
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
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

  const n = Math.max(0, Number(nilai) || 0);

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
        <div className="text-center py-10 text-muted-foreground">
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
              <span className="text-xs sm:text-sm">{tab.label}</span>
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
            "Hitung kebutuhan pupuk berdasarkan luas lahan cabai Anda"}
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
