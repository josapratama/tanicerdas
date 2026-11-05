"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  Tanaman,
  Kandang,
  ProduksiTelur,
  PemberianPakan,
  Transaksi,
  InsidenPenyakit,
  EventPlanner,
  CatatanTanaman,
  PanenRecord,
} from "./types";
import { format, subDays, addDays } from "date-fns";

// Helper tanggal dinamis agar chart selalu tampil terisi relatif terhadap hari ini
const now = new Date();
const d = (offsetDays: number) => format(offsetDays >= 0 ? addDays(now, offsetDays) : subDays(now, Math.abs(offsetDays)), "yyyy-MM-dd");

export const defaultTanaman: Tanaman[] = [
  {
    id: "tan-01",
    nama: "Cabai Rawit Merah",
    varietas: "Ori 212",
    jenisTanaman: "Cabai",
    fase: "berbuah",
    tanggalSemai: d(-65),
    luasLahan: 500,
    lokasiKebun: "Blok Timur - Bedeng 1 s/d 6",
    catatan: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "tan-02",
    nama: "Semangka Inul Manis",
    varietas: "Amara F1",
    jenisTanaman: "Semangka",
    fase: "berbunga",
    tanggalSemai: d(-35),
    luasLahan: 1200,
    lokasiKebun: "Blok Barat - Petak Utama",
    catatan: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: "tan-03",
    nama: "Melon Golden Aroma",
    varietas: "Alisha F1",
    jenisTanaman: "Melon",
    fase: "pindah_tanam",
    tanggalSemai: d(-18),
    luasLahan: 800,
    lokasiKebun: "Greenhouse Utara",
    catatan: [],
    createdAt: new Date().toISOString(),
  },
];

export const defaultCatatanTanaman: CatatanTanaman[] = [
  {
    id: "cat-01",
    tanamanId: "tan-01",
    tanggal: d(-2),
    tinggi: 75,
    kondisi: "sehat",
    catatan: "Bunga dan bakal buah sangat lebat. Telah diaplikasikan kalsium boron untuk mencegah rontok.",
  },
  {
    id: "cat-02",
    tanamanId: "tan-02",
    tanggal: d(-3),
    tinggi: 40,
    kondisi: "sehat",
    catatan: "Sulur menjalar aktif, proses penyerbukan alami berlangsung baik.",
  },
];

export const defaultPanenRecord: PanenRecord[] = [
  {
    id: "pan-01",
    tanamanId: "tan-01",
    tanggal: d(-5),
    beratKg: 125,
    hargaPerKg: 42000,
    catatan: "Petikan ke-2 kualitas super merah segar",
    createdAt: new Date().toISOString(),
  },
];

export const defaultKandang: Kandang[] = [
  {
    id: "kan-01",
    nama: "Kandang Layer Alfa",
    kapasitas: 1000,
    jumlahAyam: 950,
    jenisAyam: "petelur",
    statusKesehatan: "baik",
    createdAt: new Date().toISOString(),
  },
  {
    id: "kan-02",
    nama: "Kandang Broiler Beta",
    kapasitas: 600,
    jumlahAyam: 580,
    jenisAyam: "pedaging",
    statusKesehatan: "baik",
    createdAt: new Date().toISOString(),
  },
];

export const defaultProduksiTelur: ProduksiTelur[] = [
  { id: "prd-01", kandangId: "kan-01", tanggal: d(-6), jumlahTelur: 885, catatan: "Normal" },
  { id: "prd-02", kandangId: "kan-01", tanggal: d(-5), jumlahTelur: 890, catatan: "Normal" },
  { id: "prd-03", kandangId: "kan-01", tanggal: d(-4), jumlahTelur: 905, catatan: "Pemberian vitamin B kompleks" },
  { id: "prd-04", kandangId: "kan-01", tanggal: d(-3), jumlahTelur: 915, catatan: "Cuaca cerah" },
  { id: "prd-05", kandangId: "kan-01", tanggal: d(-2), jumlahTelur: 898, catatan: "Normal" },
  { id: "prd-06", kandangId: "kan-01", tanggal: d(-1), jumlahTelur: 912, catatan: "Kualitas cangkang tebal" },
  { id: "prd-07", kandangId: "kan-01", tanggal: d(0),  jumlahTelur: 920, catatan: "Puncak produksi stabil" },
];

export const defaultPemberianPakan: PemberianPakan[] = [
  { id: "pak-01", kandangId: "kan-01", tanggal: d(-1), jenisPakan: "Konsentrat Layer 144", jumlahKg: 110, biaya: 850000 },
  { id: "pak-02", kandangId: "kan-02", tanggal: d(-1), jenisPakan: "BR-1 Starter", jumlahKg: 75, biaya: 600000 },
];

export const defaultTransaksi: Transaksi[] = [
  { id: "trx-01", tanggal: d(-6), tipe: "pemasukan", kategori: "penjualan_telur", jumlah: 2450000, deskripsi: "Penjualan 10 peti telur ke Toko Sembako Makmur", createdAt: new Date().toISOString() },
  { id: "trx-02", tanggal: d(-5), tipe: "pemasukan", kategori: "penjualan_tanaman", jumlah: 5250000, deskripsi: "Hasil panen cabai rawit merah petikan 2 (125 kg)", createdAt: new Date().toISOString() },
  { id: "trx-03", tanggal: d(-4), tipe: "pengeluaran", kategori: "pakan", jumlah: 1450000, deskripsi: "Pembelian 2 zak konsentrat pakan ayam", createdAt: new Date().toISOString() },
  { id: "trx-04", tanggal: d(-3), tipe: "pengeluaran", kategori: "pupuk", jumlah: 650000, deskripsi: "Pupuk NPK Mutiara 16-16-16 & KNO3 Merah", createdAt: new Date().toISOString() },
  { id: "trx-05", tanggal: d(-2), tipe: "pemasukan", kategori: "penjualan_telur", jumlah: 2500000, deskripsi: "Penjualan telur harian ke pedagang pasar", createdAt: new Date().toISOString() },
  { id: "trx-06", tanggal: d(-1), tipe: "pengeluaran", kategori: "tenaga_kerja", jumlah: 400000, deskripsi: "Upah kocor pupuk & penyiangan gulma", createdAt: new Date().toISOString() },
  { id: "trx-07", tanggal: d(0),  tipe: "pemasukan", kategori: "penjualan_telur", jumlah: 2550000, deskripsi: "Penjualan telur segar hari ini", createdAt: new Date().toISOString() },
];

export const defaultEventPlanner: EventPlanner[] = [
  { id: "ev-01", judul: "Kocor Pupuk NPK & Asam Humat", tanggal: d(0), jenisEvent: "pemupukan", deskripsi: "Dosis 5 gram per tanaman untuk cabai rawit", selesai: false, createdAt: new Date().toISOString() },
  { id: "ev-02", judul: "Penyemprotan Kalsium Boron", tanggal: d(2), jenisEvent: "penyemprotan", deskripsi: "Mencegah antraknosa dan busuk pantat buah melon", selesai: false, createdAt: new Date().toISOString() },
  { id: "ev-03", judul: "Panen Cabai Rawit Petikan 3", tanggal: d(4), jenisEvent: "panen", deskripsi: "Estimasi panen 140 kg buah matang sempurna", selesai: false, createdAt: new Date().toISOString() },
  { id: "ev-04", judul: "Vaksinasi ND-IB Booster", tanggal: d(6), jenisEvent: "vaksinasi", deskripsi: "Vaksinasi tetes mata kandang layer Alfa", selesai: false, createdAt: new Date().toISOString() },
];

// ─── Zustand Global Store ─────────────────────────────────────────────────────
interface AppState {
  tanaman: Tanaman[];
  catatanTanaman: CatatanTanaman[];
  panenRecord: PanenRecord[];
  kandang: Kandang[];
  produksiTelur: ProduksiTelur[];
  pemberianPakan: PemberianPakan[];
  transaksi: Transaksi[];
  insidenPenyakit: InsidenPenyakit[];
  eventPlanner: EventPlanner[];
  // Setters
  setTanaman: (data: Tanaman[]) => void;
  setCatatanTanaman: (data: CatatanTanaman[]) => void;
  setPanenRecord: (data: PanenRecord[]) => void;
  setKandang: (data: Kandang[]) => void;
  setProduksiTelur: (data: ProduksiTelur[]) => void;
  setPemberianPakan: (data: PemberianPakan[]) => void;
  setTransaksi: (data: Transaksi[]) => void;
  setInsidenPenyakit: (data: InsidenPenyakit[]) => void;
  setEventPlanner: (data: EventPlanner[]) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      tanaman: defaultTanaman,
      catatanTanaman: defaultCatatanTanaman,
      panenRecord: defaultPanenRecord,
      kandang: defaultKandang,
      produksiTelur: defaultProduksiTelur,
      pemberianPakan: defaultPemberianPakan,
      transaksi: defaultTransaksi,
      insidenPenyakit: [],
      eventPlanner: defaultEventPlanner,
      setTanaman: (data) => set({ tanaman: data }),
      setCatatanTanaman: (data) => set({ catatanTanaman: data }),
      setPanenRecord: (data) => set({ panenRecord: data }),
      setKandang: (data) => set({ kandang: data }),
      setProduksiTelur: (data) => set({ produksiTelur: data }),
      setPemberianPakan: (data) => set({ pemberianPakan: data }),
      setTransaksi: (data) => set({ transaksi: data }),
      setInsidenPenyakit: (data) => set({ insidenPenyakit: data }),
      setEventPlanner: (data) => set({ eventPlanner: data }),
    }),
    {
      name: "taniternak-storage-v2",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// ─── ID Generator ─────────────────────────────────────────────────────────────
export function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// ─── Backup / Restore ─────────────────────────────────────────────────────────
export function exportAllData(): string {
  const state = useAppStore.getState();
  const backup = {
    version: "2.0",
    exportedAt: new Date().toISOString(),
    data: {
      tanaman: state.tanaman,
      catatanTanaman: state.catatanTanaman,
      panenRecord: state.panenRecord,
      kandang: state.kandang,
      produksiTelur: state.produksiTelur,
      pemberianPakan: state.pemberianPakan,
      transaksi: state.transaksi,
      insidenPenyakit: state.insidenPenyakit,
      eventPlanner: state.eventPlanner,
    },
  };
  return JSON.stringify(backup, null, 2);
}

export function importAllData(json: string): {
  success: boolean;
  error?: string;
} {
  try {
    const backup = JSON.parse(json);
    if (!backup.data)
      return { success: false, error: "Format file tidak valid" };

    const d = backup.data;
    const s = useAppStore.getState();

    function safeArr<T>(val: unknown, validate?: (x: unknown) => boolean): T[] {
      if (!Array.isArray(val)) return [];
      return (validate ? val.filter(validate) : val) as T[];
    }
    const hasId = (x: unknown) =>
      typeof (x as Record<string, unknown>).id === "string";

    if (Array.isArray(d.tanaman))
      s.setTanaman(
        safeArr(
          d.tanaman,
          (x) =>
            hasId(x) && typeof (x as Record<string, unknown>).nama === "string",
        ),
      );
    if (Array.isArray(d.catatanTanaman))
      s.setCatatanTanaman(safeArr(d.catatanTanaman, hasId));
    if (Array.isArray(d.panenRecord))
      s.setPanenRecord(safeArr(d.panenRecord, hasId));
    if (Array.isArray(d.kandang))
      s.setKandang(
        safeArr(
          d.kandang,
          (x) =>
            hasId(x) && typeof (x as Record<string, unknown>).nama === "string",
        ),
      );
    if (Array.isArray(d.produksiTelur))
      s.setProduksiTelur(safeArr(d.produksiTelur, hasId));
    if (Array.isArray(d.pemberianPakan))
      s.setPemberianPakan(safeArr(d.pemberianPakan, hasId));
    if (Array.isArray(d.transaksi)) s.setTransaksi(safeArr(d.transaksi, hasId));
    if (Array.isArray(d.insidenPenyakit))
      s.setInsidenPenyakit(safeArr(d.insidenPenyakit, hasId));
    if (Array.isArray(d.eventPlanner))
      s.setEventPlanner(safeArr(d.eventPlanner, hasId));
    return { success: true };
  } catch {
    return { success: false, error: "File backup tidak dapat dibaca" };
  }
}
