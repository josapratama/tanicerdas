import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Jagung Manis
// ============================================================

export const jagungManis: PanduanTanaman = {
  id: "tanaman-jagung-manis",
  nama: "Jagung Manis",
  namaLatin: "Zea mays L. var. saccharata",
  emoji: "🌽",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Tanaman semusim dengan siklus pendek dan jelas. Bisa panen dalam 70–80 hari, tidak bisa panen berkali-kali. Nilai jual tinggi karena kadar gula tinggi. Sangat cocok untuk lahan luas dan rotasi tanaman.",

  infoUmum: {
    umurPanen: "70–80 HST (satu kali panen)",
    jarakTanam: "75 × 25 cm atau 70 × 20 cm (sistem 2 biji/lubang)",
    kebutuhanAir:
      "Tinggi saat vegetatif — kritis saat pembungaan dan pengisian biji",
    suhuOptimal: "21–34 °C",
    phTanah: "5.8–7.0",
    mediaTanam:
      "Adaptif di berbagai tanah; gembur dan subur untuk hasil optimal",
  },

  glosarium: [
    {
      istilah: "Pollen Shed / Keluar Rambut",
      penjelasan:
        "Proses bersamaan: rambut jagung (silk) keluar dari ujung tongkol dan serbuk sari dari bunga jantan (tassel) di pucuk. Penyerbukan angin terjadi alami. Kekurangan air di fase ini = produksi biji tidak sempurna.",
    },
    {
      istilah: "Tassel (Bunga Jantan)",
      penjelasan:
        "Bunga jantan jagung di ujung/pucuk tanaman yang menghasilkan serbuk sari kuning. Pada beberapa varietas hibrida, tassel dibuang (detasseling) untuk produksi benih. Untuk budidaya biasa, biarkan saja.",
    },
    {
      istilah: "Silk / Rambut Jagung",
      penjelasan:
        "Benang-benang di ujung tongkol yang merupakan kepala putik. Setiap helai rambut terhubung ke satu biji. Harus terserbuki sempurna agar tongkol penuh biji.",
    },
    {
      istilah: "Pembumbunan",
      penjelasan:
        "Menambahkan tanah ke sekitar pangkal batang jagung (membuat gundukan). Dilakukan di HST 21–35 untuk memperkuat batang, merangsang akar udara, dan mencegah rebah.",
    },
    {
      istilah: "Stay Green",
      penjelasan:
        "Kemampuan tanaman tetap hijau meski sudah memasuki fase pengisian biji. Varietas stay green memiliki daun tetap hijau lebih lama = fotosintesis lebih lama = biji lebih berisi.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Perkecambahan & Bibit Awal",
      rentangHari: "HST 1–14",
      emoji: "🌱",
      deskripsi:
        "Jagung langsung tanam biji — tidak perlu persemaian terpisah. Biji berkecambah cepat dalam 3–5 hari. Pertumbuhan awal sangat cepat.",
      ciriFisik: [
        "HST 3–5: kecambah muncul, menembus tanah",
        "HST 7: plumule (tunas) terbuka, daun pertama muncul",
        "HST 10–14: 3–4 daun terbuka, warna hijau segar",
      ],
      fokusPerawatan: [
        "Tanam 2 biji per lubang sedalam 3–5 cm, tutup tanah tipis",
        "Siram segera setelah tanam jika tanah kering — kelembaban awal kritis untuk perkecambahan seragam",
        "HST 10–14: cabut dan sisakan 1 tanaman terkuat per lubang (penjarangan)",
        "Penjarangan terlambat = persaingan antar tanaman = tongkol kecil-kecil",
      ],
    },
    {
      nama: "Vegetatif — Pertumbuhan Aktif",
      rentangHari: "HST 14–45",
      emoji: "🌿",
      deskripsi:
        "Fase pertumbuhan batang paling pesat. Setiap hari tinggi tanaman bisa bertambah 3–5 cm. Pembumbunan dilakukan di fase ini untuk memperkuat batang.",
      ciriFisik: [
        "HST 14–21: 5–6 daun, pertumbuhan cepat terlihat nyata",
        "HST 21–35: batang aktif memanjang, daun makin lebar",
        "HST 35–45: 10–12 daun, mulai terlihat calon tongkol (ear shoot)",
      ],
      fokusPerawatan: [
        "HST 21–28: lakukan pembumbunan pertama — tambahkan tanah ke pangkal batang setinggi 10–15 cm",
        "Tabur Urea (pupuk putih berbau menyengat) 5–10 g/tanaman di larikan antar tanaman — untuk pertumbuhan daun maksimal",
        "Siram rutin jika tidak ada hujan — jagung sangat membutuhkan air fase vegetatif",
        "Bersihkan gulma di sekitar tanaman karena gulma sangat kompetitif dengan jagung muda",
      ],
    },
    {
      nama: "Pra-Bunga & Pembumbunan",
      rentangHari: "HST 35–50",
      emoji: "🌾",
      deskripsi:
        "Inisiasi tongkol dimulai. Fase kritis — kekurangan nutrisi di sini langsung mempengaruhi jumlah baris dan ukuran tongkol.",
      ciriFisik: [
        "HST 35–45: calon tongkol (ear shoot) mulai terlihat di ketiak daun",
        "HST 40–50: pucuk tanaman mulai membentuk tassel (bunga jantan)",
        "Tanaman mencapai 1–1.5 meter tingginya",
      ],
      fokusPerawatan: [
        "HST 35–40: lakukan pembumbunan kedua (lebih tinggi, 20–25 cm) untuk memperkuat akar udara",
        "Tabur NPK Mutiara 16-16-16 10–15 g/tanaman untuk menyuplai P dan K menjelang pembungaan",
        "Kurangi dosis N (Urea) — kelebihan N menjelang bunga membuat tanaman terlalu tinggi dan mudah rebah",
        "Pastikan kebutuhan air terpenuhi — fase ini sangat sensitif terhadap kekeringan",
      ],
    },
    {
      nama: "Pembungaan & Penyerbukan",
      rentangHari: "HST 50–65",
      emoji: "🌸",
      deskripsi:
        "Tassel mengeluarkan serbuk sari kuning. Rambut jagung (silk) keluar dari ujung tongkol. Penyerbukan angin berlangsung 5–7 hari. Fase paling kritis dalam siklus jagung.",
      ciriFisik: [
        "HST 50–55: tassel di pucuk mengeluarkan serbuk sari kuning",
        "HST 52–58: rambut jagung (silk) keluar berwarna merah-kuning",
        "HST 58–65: rambut mengering = penyerbukan selesai",
      ],
      fokusPerawatan: [
        "JANGAN kekurangan air di fase ini — kekurangan air selama 3 hari saja bisa mengurangi hasil 30–50%",
        "Tidak ada tindakan pupuk aktif — fokus hanya menjaga kondisi stabil",
        "Jangan semprot insektisida/fungisida aerosol di fase ini — bisa membunuh serbuk sari",
        "Jika penanaman jagung dalam barisan, pastikan minimal 2–3 baris agar penyerbukan silang antar tanaman cukup",
      ],
    },
    {
      nama: "Pengisian Biji",
      rentangHari: "HST 65–80",
      emoji: "🌽",
      deskripsi:
        "Biji terbentuk dan terisi gula/pati. Fase ini menentukan bobot dan kualitas akhir jagung. Daun tetap perlu hijau untuk fotosintesis maksimal.",
      ciriFisik: [
        "Tongkol membesar, biji mulai terisi",
        "Rambut sudah kering, kelobot masih hijau segar",
        "Menjelang panen: kelobot mulai menguning, biji terasa padat",
      ],
      fokusPerawatan: [
        "Tabur KCl 5–7 g/tanaman untuk membantu pengisian biji dan meningkatkan kadar gula",
        "Siram cukup — jangan kekeringan tapi juga jangan tergenang",
        "Amati tanda kematangan: kelobot menguning, tusuk biji dengan kuku — cairan susu = siap panen",
        "Jagung manis harus dipanen tepat waktu — terlambat 2–3 hari = gula berubah menjadi pati, tidak manis",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "7–14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "1.5–2 kg/m² atau 15–20 ton/ha",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "SP-36",
          dosis: "15–20 g/m²",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        {
          nama: "KCl",
          dosis: "10 g/m²",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "Campurkan merata ke tanah saat pengolahan lahan. Jagung sangat responsif terhadap pupuk dasar yang baik.",
    },
    {
      waktu: "HST 10–14 (penjarangan)",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter + penjarangan",
      produk: [
        {
          nama: "Urea",
          dosis: "5 g/tanaman, tabur di larikan",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "5 g/tanaman",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan:
        "Bersamaan dengan penjarangan (sisakan 1 bibit/lubang). Tabur di larikan 5–7 cm dari batang, tutup tanah tipis.",
    },
    {
      waktu: "HST 21–28 (pembumbunan 1)",
      fase: "vegetatif",
      kegiatan: "Susulan 2 — N tinggi + pembumbunan",
      produk: [
        {
          nama: "Urea",
          dosis: "8–10 g/tanaman, tabur di larikan",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "ZA",
          dosis: "10 g/tanaman (bisa menggantikan separuh Urea)",
          cara: "tabur",
          pupukId: "pupuk-za",
        },
      ],
      catatan:
        "Lakukan bersamaan dengan pembumbunan. Tabur pupuk lalu timbun dengan tanah saat membumbun. Ini pemupukan paling penting untuk jagung.",
    },
    {
      waktu: "HST 35–40 (pembumbunan 2)",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Beralih ke NPK seimbang",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 300 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Kurangi Urea, mulai berikan P dan K lebih banyak untuk inisiasi tongkol.",
    },
    {
      waktu: "HST 50–55 (pra-bunga)",
      fase: "generatif",
      kegiatan: "Susulan 4 — Penguat pembungaan",
      produk: [
        {
          nama: "KCl",
          dosis: "5–7 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "Boron foliar",
          dosis: "1 g/L, semprot 1×",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
      ],
      catatan:
        "Pemupukan terakhir sebelum panen. Fokus K untuk kualitas dan pengisian biji.",
    },
  ],

  tipsSukses: [
    "Penjarangan di HST 10–14 adalah WAJIB — 2 tanaman dalam 1 lubang akan menghasilkan tongkol kecil-kecil.",
    "Pembumbunan di HST 21–28 dan 35–40 mencegah tanaman rebah saat berbuah.",
    "Kekurangan air saat pembungaan (HST 50–65) adalah penyebab utama tongkol tidak penuh biji.",
    "Jagung manis harus dipanen tepat waktu — terlambat 2–3 hari sudah tidak manis lagi.",
    "Tanam dalam petak minimal 4 baris untuk penyerbukan angin yang optimal.",
    "Rotasi dengan kacang-kacangan (kedelai, kacang hijau) setelah panen jagung untuk memulihkan nitrogen tanah.",
    "Varietas hibrida memberikan hasil 2–3× lebih tinggi dari varietas lokal — investasi yang sangat worthwhile.",
  ],

  penyakitUtama: ["pd-klorosis", "pd-rebah-semai"],
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
