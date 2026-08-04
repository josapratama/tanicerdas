// ============= KEBUN (Tanaman Hortikultura) =============
export type FaseTanaman =
  | "semai"
  | "pindah_tanam"
  | "berbunga"
  | "berbuah"
  | "panen";

export interface Tanaman {
  id: string;
  nama: string;
  varietas: string;
  jenisTanaman?: string; // cth: "Cabai", "Semangka", "Melon", "Tomat", dll
  fase: FaseTanaman;
  tanggalSemai: string;
  luasLahan: number; // m2
  lokasiKebun: string;
  catatan: CatatanTanaman[]; // deprecated, selalu [] — gunakan getCatatanTanaman()
  createdAt: string;
}

export interface CatatanTanaman {
  id: string;
  tanamanId: string;
  tanggal: string;
  tinggi: number; // cm
  kondisi: "sehat" | "kurang_sehat" | "sakit";
  catatan: string;
  fotoUrl?: string;
}

export interface PanenRecord {
  id: string;
  tanamanId: string;
  tanggal: string;
  beratKg: number;
  hargaPerKg: number; // Rp
  catatan?: string;
  createdAt: string;
}

// ============= PETERNAKAN AYAM =============
export interface Kandang {
  id: string;
  nama: string;
  kapasitas: number;
  jumlahAyam: number;
  jenisAyam: "petelur" | "pedaging" | "kampung";
  statusKesehatan: "baik" | "perlu_perhatian" | "kritis";
  createdAt: string;
}

export interface ProduksiTelur {
  id: string;
  kandangId: string;
  tanggal: string;
  jumlahTelur: number;
  catatan?: string;
}

export interface PemberianPakan {
  id: string;
  kandangId: string;
  tanggal: string;
  jenisPakan: string;
  jumlahKg: number;
  biaya: number;
}

// ============= KEUANGAN =============
export type KategoriTransaksi =
  | "penjualan_tanaman" // penjualan hasil kebun (semua jenis tanaman)
  | "penjualan_telur"
  | "penjualan_ayam"
  | "bibit"
  | "pupuk"
  | "pestisida" // baru: pestisida / fungisida
  | "pakan"
  | "obat"
  | "sewa_lahan" // baru: sewa lahan
  | "tenaga_kerja" // baru: upah buruh tani
  | "lainnya";

export type TipeTransaksi = "pemasukan" | "pengeluaran";

export interface Transaksi {
  id: string;
  tanggal: string;
  tipe: TipeTransaksi;
  kategori: KategoriTransaksi;
  jumlah: number;
  deskripsi: string;
  createdAt: string;
}

// ============= PENYAKIT =============
export type TipePenyakit = "tanaman" | "ayam";

export interface InsidenPenyakit {
  id: string;
  penyakitId: string;
  targetId: string; // tanamanId or kandangId
  targetTipe: "tanaman" | "kandang";
  tanggal: string;
  deskripsi: string;
  status: "aktif" | "dalam_penanganan" | "sembuh";
  createdAt: string;
}

// ============= PLANNER =============
export type JenisEvent =
  | "semai"
  | "pindah_tanam"
  | "pemupukan"
  | "penyemprotan"
  | "vaksinasi"
  | "panen"
  | "lainnya";

export interface EventPlanner {
  id: string;
  judul: string;
  tanggal: string;
  jenisEvent: JenisEvent;
  deskripsi?: string;
  selesai: boolean;
  createdAt: string;
}
