// ============================================================
// PANDUAN TANAMAN — Barrel file
// ============================================================

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

// Named re-exports
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
};

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
