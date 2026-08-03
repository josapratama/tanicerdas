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

// ─── Legacy helpers (backward compat) ─────────────────────────────────────────
export function getTanaman(): Tanaman[] {
  return useAppStore.getState().tanaman;
}
export function saveTanaman(data: Tanaman[]): void {
  useAppStore.getState().setTanaman(data);
}

export function getCatatanTanaman(): CatatanTanaman[] {
  return useAppStore.getState().catatanTanaman;
}
export function saveCatatanTanaman(data: CatatanTanaman[]): void {
  useAppStore.getState().setCatatanTanaman(data);
}

export function getKandang(): Kandang[] {
  return useAppStore.getState().kandang;
}
export function saveKandang(data: Kandang[]): void {
  useAppStore.getState().setKandang(data);
}

export function getProduksiTelur(): ProduksiTelur[] {
  return useAppStore.getState().produksiTelur;
}
export function saveProduksiTelur(data: ProduksiTelur[]): void {
  useAppStore.getState().setProduksiTelur(data);
}

export function getPemberianPakan(): PemberianPakan[] {
  return useAppStore.getState().pemberianPakan;
}
export function savePemberianPakan(data: PemberianPakan[]): void {
  useAppStore.getState().setPemberianPakan(data);
}

export function getTransaksi(): Transaksi[] {
  return useAppStore.getState().transaksi;
}
export function saveTransaksi(data: Transaksi[]): void {
  useAppStore.getState().setTransaksi(data);
}

export function getInsidenPenyakit(): InsidenPenyakit[] {
  return useAppStore.getState().insidenPenyakit;
}
export function saveInsidenPenyakit(data: InsidenPenyakit[]): void {
  useAppStore.getState().setInsidenPenyakit(data);
}

export function getEventPlanner(): EventPlanner[] {
  return useAppStore.getState().eventPlanner;
}
export function saveEventPlanner(data: EventPlanner[]): void {
  useAppStore.getState().setEventPlanner(data);
}

export function getPanenRecord(): PanenRecord[] {
  return useAppStore.getState().panenRecord;
}
export function savePanenRecord(data: PanenRecord[]): void {
  useAppStore.getState().setPanenRecord(data);
}

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
    const d = backup.data;
    const s = useAppStore.getState();
    if (d.tanaman) s.setTanaman(d.tanaman);
    if (d.catatanTanaman) s.setCatatanTanaman(d.catatanTanaman);
    if (d.panenRecord) s.setPanenRecord(d.panenRecord);
    if (d.kandang) s.setKandang(d.kandang);
    if (d.produksiTelur) s.setProduksiTelur(d.produksiTelur);
    if (d.pemberianPakan) s.setPemberianPakan(d.pemberianPakan);
    if (d.transaksi) s.setTransaksi(d.transaksi);
    if (d.insidenPenyakit) s.setInsidenPenyakit(d.insidenPenyakit);
    if (d.eventPlanner) s.setEventPlanner(d.eventPlanner);
    return { success: true };
  } catch {
    return { success: false, error: "File backup tidak dapat dibaca" };
  }
}
