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
import {
  mockTanaman,
  mockKandang,
  mockProduksiTelur,
  mockPemberianPakan,
  mockTransaksi,
  mockInsidenPenyakit,
  mockEventPlanner,
  mockCatatanTanaman,
} from "./mockData";

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
      tanaman: mockTanaman,
      catatanTanaman: mockCatatanTanaman,
      panenRecord: [],
      kandang: mockKandang,
      produksiTelur: mockProduksiTelur,
      pemberianPakan: mockPemberianPakan,
      transaksi: mockTransaksi,
      insidenPenyakit: mockInsidenPenyakit,
      eventPlanner: mockEventPlanner,
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
      name: "taniternak-storage",
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
    version: "1.0",
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
    // Version migration hook — tambahkan transformasi di sini jika schema berubah
    // const version = backup.version ?? "1.0";
    const d = backup.data;
    const s = useAppStore.getState();

    // Sanitasi: filter item yang punya id & nama string agar backup korup
    // tidak menghasilkan undefined yang crash semua list setelah reload
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
