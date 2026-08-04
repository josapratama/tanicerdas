// ============================================================
// PANDUAN TANAMAN — Barrel file
// ============================================================

export { cabaiMerah } from "./data-tanaman-cabai";
export { melon } from "./data-tanaman-melon";
export { semangka } from "./data-tanaman-semangka";
export { timun } from "./data-tanaman-timun";
export { tomat } from "./data-tanaman-tomat";
export { terong } from "./data-tanaman-terong";
export { jagungManis } from "./data-tanaman-jagung";
export { kangkung, bayam } from "./data-tanaman-kangkung";
export { paria } from "./data-tanaman-paria";
export { labuSiam } from "./data-tanaman-labu";
export { singkong, ubiJalar } from "./data-tanaman-singkong";

import { cabaiMerah } from "./data-tanaman-cabai";
import { melon } from "./data-tanaman-melon";
import { semangka } from "./data-tanaman-semangka";
import { timun } from "./data-tanaman-timun";
import { tomat } from "./data-tanaman-tomat";
import { terong } from "./data-tanaman-terong";
import { jagungManis } from "./data-tanaman-jagung";
import { kangkung, bayam } from "./data-tanaman-kangkung";
import { paria } from "./data-tanaman-paria";
import { labuSiam } from "./data-tanaman-labu";
import { singkong, ubiJalar } from "./data-tanaman-singkong";
import type { PanduanTanaman } from "./types";

/** Urutan: sayuran buah populer → umbi → sayuran daun */
export const dataPanduanTanaman: PanduanTanaman[] = [
  cabaiMerah,
  tomat,
  terong,
  melon,
  semangka,
  timun,
  paria,
  labuSiam,
  jagungManis,
  singkong,
  ubiJalar,
  kangkung,
  bayam,
];
