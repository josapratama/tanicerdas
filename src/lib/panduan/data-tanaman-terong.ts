import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Terong
// ============================================================

export const terong: PanduanTanaman = {
  id: "tanaman-terong",
  nama: "Terong",
  namaLatin: "Solanum melongena L.",
  emoji: "🍆",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Tanaman sayuran buah yang sangat adaptif dan toleran panas. Bisa panen mulai HST 60–75 dan terus berbuah hingga 4–6 bulan. Relatif tahan kekeringan dibanding cabai atau tomat.",

  infoUmum: {
    umurPanen: "60–75 HST (panen pertama), produktif hingga 4–6 bulan",
    jarakTanam: "60 × 70 cm atau 70 × 80 cm",
    kebutuhanAir: "Sedang — tahan kekeringan ringan, tidak tahan tergenang",
    suhuOptimal: "22–32 °C",
    phTanah: "5.5–6.8",
    mediaTanam:
      "Tanah lempung gembur + kompos; adaptif di berbagai jenis tanah",
  },

  glosarium: [
    {
      istilah: "Pemangkasan Cabang",
      penjelasan:
        "Membuang cabang yang tidak produktif, terlalu rapat, atau tumbuh ke dalam tajuk. Berbeda dengan cabai, terong tidak perlu diwiwil secara intensif — cukup pangkas cabang yang jelas tidak produktif dan daun sakit.",
    },
    {
      istilah: "Flush Terong",
      penjelasan:
        "Seperti cabai, terong berbuah dalam beberapa gelombang. Setelah panen besar, berikan pupuk recovery untuk memicu flush bunga berikutnya dalam 2–3 minggu.",
    },
    {
      istilah: "Gosok Kulit (Shiny Skin)",
      penjelasan:
        "Tanda terong siap panen: kulit mengkilap, warna sesuai varietas (ungu tua, hijau, putih). Terong yang terlambat dipanen kulitnya menjadi kusam dan daging menjadi keras berisi biji banyak.",
    },
    {
      istilah: "Penggerek Buah",
      penjelasan:
        "Hama utama terong — ulat penggerek (Leucinodes orbonalis) masuk ke dalam buah. Tanda: lubang kecil di permukaan buah dan kotoran/feces di dalam. Pencegahan: semprot insektisida rutin sebelum buah terbentuk.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Persemaian",
      rentangHari: "HSS 1–20",
      emoji: "🌱",
      deskripsi:
        "Terong berkecambah lambat (7–14 hari). Bibit terong lebih tahan dibanding melon namun lebih lemah dari cabai. Persemaian bisa di polybag kecil atau tray.",
      ciriFisik: [
        "HSS 7–14: kecambah muncul (agak lambat — ini normal)",
        "HSS 14–17: kotiledon membuka",
        "HSS 17–20: daun sejati pertama, bibit mulai tegak",
      ],
      fokusPerawatan: [
        "Rendam benih 2–3 jam di air hangat sebelum semai untuk mempercepat perkecambahan",
        "Media semai: tanah + kompos (1:1), pastikan tidak terlalu lembab",
        "Siram tipis setiap pagi — media lembab, bukan becek",
        "Persemaian terong bisa 20–25 hari sebelum pindah tanam",
      ],
    },
    {
      nama: "Pindah Tanam & Adaptasi",
      rentangHari: "HST 1–14",
      emoji: "🌿",
      deskripsi:
        "Bibit pindah saat 4–5 daun sejati. Terong lebih toleran transplanting dibanding melon. Adaptasi berlangsung 1–2 minggu.",
      ciriFisik: [
        "HST 1–5: mungkin layu ringan di siang hari, normal",
        "HST 7–10: tunas baru tumbuh aktif",
        "HST 10–14: pertumbuhan cepat dimulai",
      ],
      fokusPerawatan: [
        "Tanam sore hari, siram langsung setelah tanam",
        "Beri naungan ringan 2–3 hari pertama",
        "Pasang ajir/tiang penyangga sejak awal — terong bisa tumbuh tinggi 1–2 meter",
        "Sulam bibit mati dalam 5 hari",
      ],
    },
    {
      nama: "Vegetatif Aktif",
      rentangHari: "HST 14–35",
      emoji: "🌾",
      deskripsi:
        "Batang terong tumbuh kokoh dan bercabang alami. Terong memiliki percabangan dichotomous (membagi 2) secara alami. Fase membangun kerangka tanaman yang produktif.",
      ciriFisik: [
        "HST 14–21: batang berkayu, warna ungu kecoklatan",
        "HST 21–28: percabangan alami mulai terlihat",
        "HST 28–35: tajuk mulai melebar, kuncup bunga pertama terlihat",
      ],
      fokusPerawatan: [
        "Pangkas cabang di bawah percabangan utama pertama (wiwil ringan) untuk membangun tajuk yang terbuka",
        "Tabur NPK Phonska 8–10 g/tanaman melingkar di sekitar pangkal lalu siram",
        "Ikat batang ke ajir menggunakan tali rafia",
        "Awasi hama kutu daun dan tungau yang sering menyerang saat cuaca panas dan kering",
      ],
    },
    {
      nama: "Pembungaan",
      rentangHari: "HST 35–55",
      emoji: "💜",
      deskripsi:
        "Bunga terong besar berwarna ungu muda dengan putik kuning. Penyerbukan sendiri (self-pollinating) — tidak butuh bantuan penyerbukan seperti melon. Setiap bunga = 1 buah.",
      ciriFisik: [
        "HST 35–45: bunga ungu pertama muncul di setiap ujung cabang",
        "HST 45–55: buah pertama terbentuk — kecil ungu mengkilap",
        "Beberapa bunga bisa rontok (normal 20–30%)",
      ],
      fokusPerawatan: [
        "Beralih ke NPK Mutiara 16-16-16 + KCl untuk mendukung pembentukan buah",
        "Semprot Boron 1 g/liter setiap seminggu untuk mengurangi flower drop",
        "Awasi hama penggerek buah — semprot insektisida berbahan aktif karbofuran atau spinosad sebelum buah terbentuk",
        "Jaga penyiraman konsisten — kekeringan singkat bisa menyebabkan flower drop massal",
      ],
    },
    {
      nama: "Produksi Aktif",
      rentangHari: "HST 55–150",
      emoji: "🍆",
      deskripsi:
        "Terong berbuah terus menerus dalam beberapa gelombang panjang. Bisa produktif 4–6 bulan jika dirawat baik. Panen teratur mendorong buah baru tumbuh.",
      ciriFisik: [
        "Buah terus muncul di seluruh cabang",
        "Daun tua menguning dari bawah (normal)",
        "Tanaman semakin tinggi, perlu ikatan tambahan ke ajir",
      ],
      fokusPerawatan: [
        "Panen saat kulit buah masih mengkilap — terong yang terlambat dipanen keras dan berbiji banyak",
        "Berikan pupuk recovery setelah setiap gelombang panen besar",
        "Pangkas daun tua dan cabang tidak produktif secara berkala untuk sirkulasi udara",
        "Lanjutkan semprot insektisida untuk mencegah penggerek buah — semprot sore hari ke pangkal buah",
      ],
    },
    {
      nama: "Rejuvenasi / Pemangkasan Keras",
      rentangHari: "HST 120–150",
      emoji: "✂️",
      deskripsi:
        "Jika tanaman sudah tua namun ingin dilanjutkan, bisa dilakukan pemangkasan keras untuk meremajakan tanaman. Namun umumnya di HST 150+ lebih ekonomis untuk bongkar dan tanam baru.",
      ciriFisik: [
        "Produksi buah mulai menurun",
        "Daun banyak menguning dari bawah ke atas",
        "Batang tua berkayu keras",
      ],
      fokusPerawatan: [
        "Pertimbangkan pemangkasan keras: potong semua cabang menyisakan 3–4 cabang utama untuk merangsang tunas baru",
        "Setelah pemangkasan keras: siram NPK 16-16-16 larutan 3 g/liter dan tutup luka batang dengan pasta fungisida",
        "Alternatif: bongkar dan mulai tanaman baru dengan rotasi jenis tanaman lain",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "HSS 0 — Media semai",
      fase: "semai",
      kegiatan: "Persiapan media semai",
      produk: [
        {
          nama: "Pupuk Kandang Matang",
          dosis: "30% dari campuran media",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Trichoderma",
          dosis: "5 g/L air siram",
          cara: "kocor",
          pupukId: "pupuk-trichoderma",
        },
      ],
    },
    {
      waktu: "14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar lahan",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2–3 kg/m²",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Dolomit (jika pH < 5.5)",
          dosis: "100–150 g/m²",
          cara: "tabur",
          pupukId: "pupuk-dolomit",
        },
      ],
    },
    {
      waktu: "7 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar kimia",
      produk: [
        {
          nama: "SP-36",
          dosis: "20 g/m²",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        {
          nama: "KCl",
          dosis: "15 g/m²",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
    },
    {
      waktu: "HST 7–10",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "8 g/tanaman, tabur melingkar",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 250 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
    },
    {
      waktu: "HST 14–17",
      fase: "vegetatif",
      kegiatan: "Susulan 2 — N dominan",
      produk: [
        {
          nama: "Urea",
          dosis: "3–5 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "ZA",
          dosis: "5 g/tanaman, tabur (alternatif Urea)",
          cara: "tabur",
          pupukId: "pupuk-za",
        },
      ],
      catatan: "Berikan bergantian Urea dan ZA setiap 2 minggu.",
    },
    {
      waktu: "HST 21–24",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Foliar mikro",
      produk: [
        {
          nama: "POC foliar",
          dosis: "3–5 ml/L, semprot daun",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
        {
          nama: "Boron foliar",
          dosis: "1 g/L",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
      ],
    },
    {
      waktu: "HST 30–35",
      fase: "vegetatif",
      kegiatan: "Susulan 4 — Beralih ke generatif",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "2 g/L, kocor 200 ml/tanaman",
          cara: "kocor",
        },
      ],
    },
    {
      waktu: "HST 40–80 (tiap 7 hari)",
      fase: "generatif",
      kegiatan: "Rutin generatif — K + Ca",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "KCl",
          dosis: "5–7 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "POC foliar",
          dosis: "5 ml/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan: "Diulang setiap 7 hari selama masa produksi aktif.",
    },
    {
      waktu: "Setelah setiap gelombang panen",
      fase: "generatif",
      kegiatan: "Recovery — pacu gelombang berikutnya",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 300 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
    },
  ],

  tipsSukses: [
    "Panen saat kulit masih mengkilap — tanda buah masih muda dan enak. Terong tua keras dan biji banyak.",
    "Terong sangat rentan penggerek buah — semprot insektisida preventif sebelum buah muncul.",
    "Pemangkasan cabang ringan meningkatkan sirkulasi udara dan mengurangi risiko penyakit.",
    "Terong lebih toleran panas dibanding tomat atau cabai — cocok untuk dataran rendah.",
    "Jarak tanam lebar (70×80 cm) memberikan hasil lebih baik karena tajuk bisa berkembang maksimal.",
    "Mulsa plastik hitam-perak menjaga kelembaban dan menekan gulma secara efektif.",
    "Terong bisa produktif hingga 4–6 bulan jika dirawat rutin — investasi yang sangat baik.",
  ],

  penyakitUtama: [
    "pd-thrips",
    "pd-layu-fusarium",
    "pd-layu-bakteri",
    "pd-klorosis",
  ],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-za",
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-sp36",
    "pupuk-kcl",
    "pupuk-boron",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
