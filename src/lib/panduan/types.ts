// ============================================================
// TYPES — Panduan Pertanian
// ============================================================

// Kategori pupuk
export type KategoriPupuk =
  | "organik"
  | "kimia_makro"
  | "kimia_mikro"
  | "hayati"
  | "pembenah_tanah";

// Kategori agrokimia (pestisida dll)
export type KategoriAgrokimia =
  | "insektisida"
  | "fungisida"
  | "bakterisida"
  | "akarisida"
  | "herbisida"
  | "zpt"; // zat pengatur tumbuh

export interface PupukData {
  id: string;
  nama: string;
  merekDagang?: string; // contoh produk di pasaran
  singkatan?: string;
  kategori: KategoriPupuk;
  kandungan: string;
  deskripsiSingkat: string; // 1 kalimat penjelasan untuk orang awam
  fungsi: string[];
  caraPakai: string;
  dosis: string;
  waktuPakai: string;
  kelebihan: string[];
  kekurangan: string[];
  harga: string;
  emoji: string;
  tags?: string[]; // untuk pencarian
}

export interface AgrokimiaData {
  id: string;
  nama: string;
  kategori: KategoriAgrokimia;
  bahanAktif: string;
  merekDagang: string[]; // daftar merek yang dijual
  deskripsiKategori: string; // penjelasan apa itu kategori ini untuk orang awam
  deskripsiProduk: string; // penjelasan produk spesifik
  targetHamaPenyakit: string[]; // sasaran
  caraPakai: string;
  dosis: string;
  waktuPakai: string;
  intervalSemprot: string;
  karensaHari: number; // hari sebelum panen, harus berhenti semprot
  peringatan: string[];
  emoji: string;
}

export interface PengobatanStep {
  langkah: string;
  produkId?: string; // id pupuk atau agrokimia
  tipeRef?: "pupuk" | "agrokimia";
  namaProduk?: string;
}

export interface PenyakitPanduan {
  id: string;
  nama: string;
  kategori: "jamur" | "virus" | "bakteri" | "hama" | "fisiologis";
  jenisTanaman: string;
  emoji: string;
  penyebab: string;
  gejala: string[];
  kondisiPemicu: string[];
  pencegahan: string[];
  pengobatan: PengobatanStep[];
  produkTerkait: string[]; // id pupuk atau agrokimia
  tingkatBahaya: "rendah" | "sedang" | "tinggi";
}

export interface LangkahBertani {
  nomor: number;
  judul: string;
  detail: string;
  tips?: string;
  produkTerkait?: string[]; // id pupuk
  waktu?: string;
}

export interface TataCara {
  id: string;
  judul: string;
  emoji: string;
  deskripsi: string;
  langkah: LangkahBertani[];
}

// ============================================================
// PANDUAN TANAMAN — Panduan lengkap per jenis tanaman
// ============================================================

/** Satu entri pemupukan dalam jadwal pemupukan tanaman */
export interface JadwalPupuk {
  /** Label waktu: "HSS 0", "HST 7–10", "HST 14", dsb */
  waktu: string;
  /** Fase tanaman saat itu */
  fase: "semai" | "vegetatif" | "generatif" | "pra_panen";
  /** Nama kegiatan singkat */
  kegiatan: string;
  /** Detail produk & dosis */
  produk: {
    nama: string;
    dosis: string;
    cara: "kocor" | "tabur" | "semprot_daun" | "semprot_batang";
    pupukId?: string; // id di ensiklopedi pupuk
  }[];
  catatan?: string;
}

/** Satu fase pertumbuhan dengan penjelasan dan rentang hari */
export interface FaseTumbuh {
  nama: string;
  rentangHari: string; // e.g. "HST 0–14"
  emoji: string;
  deskripsi: string;
  ciriFisik: string[]; // ciri tanaman di fase ini
  fokusPerawatan: string[];
}

/** Panduan lengkap per jenis tanaman */
export interface PanduanTanaman {
  id: string;
  nama: string;
  namaLatin: string;
  emoji: string;
  kategori: "sayuran_buah" | "sayuran_daun" | "umbi" | "buah" | "rempah";
  deskripsiSingkat: string;

  /** Informasi umum */
  infoUmum: {
    umurPanen: string; // e.g. "90–120 HST"
    jarakTanam: string; // e.g. "50 × 60 cm"
    kebutuhanAir: string;
    suhuOptimal: string;
    phTanah: string;
    mediaTanam: string;
  };

  /** Glosarium istilah khusus untuk tanaman ini */
  glosarium: {
    istilah: string;
    penjelasan: string;
  }[];

  /** Fase pertumbuhan dari semai sampai panen */
  faseTumbuh: FaseTumbuh[];

  /** Jadwal pemupukan lengkap */
  jadwalPemupukan: JadwalPupuk[];

  /** Tips sukses spesifik tanaman ini */
  tipsSukses: string[];

  /** Penyakit utama yang sering menyerang — id dari dataPenyakitPanduan */
  penyakitUtama: string[];

  /** Pupuk yang paling penting untuk tanaman ini — id dari semuaPupuk */
  pupukUtama: string[];
}
