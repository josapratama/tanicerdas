// ============================================================
// PANDUAN PERTANIAN — Re-export semua tipe dan data
// ============================================================

// Re-export semua tipe
export type {
  PupukData,
  AgrokimiaData,
  PenyakitPanduan,
  TataCara,
  LangkahBertani,
  PengobatanStep,
  KategoriPupuk,
  KategoriAgrokimia,
} from "./types";

// Re-export data
export { dataPupukOrganik } from "./data-pupuk-organik";
export { dataPupukKimia } from "./data-pupuk-kimia";
export {
  dataAgrokimia,
  penjelasanKategoriAgrokimia,
} from "./data-agrochemical";
export { dataPenyakitPanduan } from "./data-penyakit";
export { dataTataCara } from "./data-tatacara";
export {
  dataPenyakitTernak,
  dataTataCaraTernak,
  dataObatVaksin,
} from "./data-ternak";
export type {
  PenyakitTernak,
  TataCaraTernak,
  LangkahTernak,
  ObatVaksinTernak,
} from "./data-ternak";
export { dataPanduanTanaman } from "./data-tanaman";
export {
  cabaiMerah,
  melon,
  semangka,
  timun,
  tomat,
  terong,
  jagungManis,
  kangkung,
  bayam,
  paria,
  labuSiam,
  singkong,
  ubiJalar,
} from "./data-tanaman";
export type { PanduanTanaman, FaseTumbuh, JadwalPupuk } from "./types";

// Data umum bertani — glosarium, unsur hara, konsep pupuk
export { glosariumUmum, dataUnsurHara, konsepPupuk } from "./data-tanaman-umum";
export type {
  EntriGlosarium,
  UnsurHara,
  KonsepPupuk,
} from "./data-tanaman-umum";

// Computed / convenience exports
import { dataPupukOrganik } from "./data-pupuk-organik";
import { dataPupukKimia } from "./data-pupuk-kimia";

/** Gabungan seluruh data pupuk (organik + kimia) */
export const semuaPupuk = [...dataPupukOrganik, ...dataPupukKimia];
