// ============================================================
// PANDUAN TANAMAN — Barrel file
// Setiap tanaman ada di file terpisah untuk kemudahan edit.
// Data umum (glosarium, N/P/K, konsep pupuk) ada di
// data-tanaman-umum.ts — dipakai bersama semua tanaman.
// ============================================================

export { cabaiMerah } from "./data-tanaman-cabai";
export { melon } from "./data-tanaman-melon";
export { semangka } from "./data-tanaman-semangka";
export { timun } from "./data-tanaman-timun";

import { cabaiMerah } from "./data-tanaman-cabai";
import { melon } from "./data-tanaman-melon";
import { semangka } from "./data-tanaman-semangka";
import { timun } from "./data-tanaman-timun";
import type { PanduanTanaman } from "./types";

/** Array semua panduan tanaman — urut sesuai tampilan */
export const dataPanduanTanaman: PanduanTanaman[] = [
  cabaiMerah,
  melon,
  semangka,
  timun,
];
