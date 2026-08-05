import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Kangkung & Bayam
// (2 tanaman dalam 1 file karena penanganannya serupa)
// File ini mengekspor `kangkung` dan `bayam` secara terpisah
// ============================================================

export const kangkung: PanduanTanaman = {
  id: "tanaman-kangkung",
  nama: "Kangkung",
  namaLatin: "Ipomoea aquatica Forssk.",
  emoji: "🥬",
  kategori: "sayuran_daun",
  deskripsiSingkat:
    "Sayuran daun paling cepat dan mudah ditanam. Bisa dipanen 20–25 HST untuk kangkung darat. Cocok untuk pemula, lahan sempit, pot, atau polybag. Sangat toleran kondisi kurang ideal.",

  infoUmum: {
    umurPanen:
      "20–25 HST (panen pertama), bisa panen berulang setelah dipotong",
    jarakTanam: "20 × 20 cm untuk bedengan; atau sebar langsung (broadcast)",
    kebutuhanAir: "Tinggi — kangkung suka air, media selalu lembab",
    suhuOptimal: "25–35 °C",
    phTanah: "5.5–7.0",
    mediaTanam:
      "Adaptif hampir semua jenis tanah; tumbuh subur di tanah berlempung atau gambut",
  },

  glosarium: [
    {
      istilah: "Kangkung Darat vs Kangkung Air",
      penjelasan:
        "Kangkung darat (budidaya biasa di bedengan): batang lebih keras, daun lebih kecil. Kangkung air (ditanam di perairan dangkal atau sawah): batang berongga, daun lebih lebar dan lembut. Panduan ini fokus untuk kangkung darat.",
    },
    {
      istilah: "Panen Selektif (Cut and Come Again)",
      penjelasan:
        "Memotong batang menyisakan 5–10 cm dari pangkal. Tunasnya akan tumbuh kembali dan bisa dipanen 2–3 minggu kemudian. Satu penanaman bisa menghasilkan 3–5 kali panen.",
    },
    {
      istilah: "Broadcast Seeding",
      penjelasan:
        "Teknik menyebar benih langsung ke bedengan tanpa jarak tanam tertentu — cocok untuk kangkung. Hasil lebih rapat tapi panen lebih cepat dan tidak perlu penjarangan.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Perkecambahan",
      rentangHari: "HST 1–7",
      emoji: "🌱",
      deskripsi:
        "Kangkung langsung tanam biji — tidak perlu semai terpisah. Kecambah muncul sangat cepat dalam 3–5 hari.",
      ciriFisik: [
        "HST 3–5: kecambah muncul dari tanah",
        "HST 5–7: daun benih (kotiledon) membuka",
      ],
      fokusPerawatan: [
        "Tanam biji langsung di bedengan: buat larikan 2–3 cm, isi biji, tutup tipis",
        "Atau sebar langsung (broadcast) lalu siram merata",
        "Siram 1–2× sehari — media harus selalu lembab",
        "Tidak perlu pupuk di fase ini — nutrisi dari media sudah cukup",
      ],
    },
    {
      nama: "Pertumbuhan Aktif",
      rentangHari: "HST 7–20",
      emoji: "🌿",
      deskripsi:
        "Daun muda tumbuh sangat cepat. Dalam kondisi optimal, tanaman bisa tumbuh 3–5 cm per hari. Fase ini sangat singkat.",
      ciriFisik: [
        "HST 7–10: daun sejati pertama muncul",
        "HST 10–15: batang mulai memanjang, daun semakin besar",
        "HST 15–20: tanaman tinggi 15–25 cm, siap mendekati panen",
      ],
      fokusPerawatan: [
        "Siram setiap pagi dan sore jika tidak ada hujan — kangkung tidak boleh kekeringan",
        "Tabur Urea tipis-tipis 2–3 g/m² atau kocor NPK 1 g/liter encer seminggu sekali untuk mendorong pertumbuhan daun yang lebat",
        "Bersihkan gulma yang tumbuh lebih tinggi dari kangkung",
        "Periksa hama ulat daun — jika ada, ambil manual atau semprot insektisida nabati",
      ],
    },
    {
      nama: "Siap Panen & Panen Berulang",
      rentangHari: "HST 20–60",
      emoji: "🥬",
      deskripsi:
        "Panen pertama dan panen berikutnya. Kangkung yang dipotong akan tumbuh kembali. Perawatan berlanjut untuk mendapatkan 3–5 kali panen dari satu penanaman.",
      ciriFisik: [
        "HST 20–25: batang berisi, daun lebar — siap panen pertama",
        "Setelah dipotong: tunas baru muncul dari tunggul dalam 3–5 hari",
      ],
      fokusPerawatan: [
        "Potong batang menyisakan 5–10 cm dari pangkal menggunakan pisau/gunting bersih",
        "Segera setelah panen: siram larutan NPK encer (1–2 g/liter) atau POC 3 ml/liter untuk recovery dan mendorong tunas baru",
        "Panen ke-2 bisa 2–3 minggu setelah panen pertama",
        "Setelah 3–5 kali panen, tanaman mulai berkayu dan kualitas menurun — ganti dengan penanaman baru",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "Sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Persiapan bedengan",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2–3 kg/m² (dicampur ke tanah bedengan)",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "10–15 g/m², tabur merata",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan:
        "Persiapan sederhana — kangkung tidak butuh pupuk dasar kompleks.",
    },
    {
      waktu: "HST 7–10",
      fase: "vegetatif",
      kegiatan: "Pupuk nitrogen untuk pacu daun",
      produk: [
        {
          nama: "Urea",
          dosis: "2–3 g/m², tabur tipis merata lalu siram",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
      ],
      catatan:
        "N tinggi untuk mempercepat pertumbuhan daun yang lebat dan berwarna hijau tua.",
    },
    {
      waktu: "Setelah setiap panen",
      fase: "vegetatif",
      kegiatan: "Recovery — dorong tunas baru",
      produk: [
        {
          nama: "POC",
          dosis: "3–5 ml/L, siram ke bedengan",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
        {
          nama: "Urea",
          dosis: "2 g/m², tabur tipis",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
      ],
      catatan:
        "Pupuk ringan setelah setiap panen untuk memastikan tunas baru tumbuh lebat.",
    },
  ],

  tipsSukses: [
    "Kangkung adalah tanaman terbaik untuk pemula — toleran kondisi kurang ideal dan sangat cepat hasilnya.",
    "Siram minimal 2× sehari di musim kemarau — kangkung yang kekeringan akan cepat berbunga dan tidak enak dimakan.",
    "Panen pagi hari saat daun masih segar dan berembun untuk kualitas terbaik.",
    "Satu bedengan bisa menghasilkan 3–5 kali panen — sangat efisien lahan.",
    "Kangkung darat lebih renyah dan cocok untuk ditumis; kangkung air lebih lembut untuk sayur bening.",
    "Rotasi kangkung dengan tomat atau cabai membantu memutus siklus hama dan penyakit tanah.",
    "Bisa ditanam di polybag atau pot ukuran minimal 30 cm — cocok untuk halaman rumah.",
  ],

  penyakitUtama: ["pd-klorosis", "pd-rebah-semai"],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};

export const bayam: PanduanTanaman = {
  id: "tanaman-bayam",
  nama: "Bayam",
  namaLatin: "Amaranthus tricolor L.",
  emoji: "🥗",
  kategori: "sayuran_daun",
  deskripsiSingkat:
    "Sayuran daun paling bergizi dengan kandungan zat besi tinggi. Panen 25–30 HST, sangat cocok untuk lahan sempit dan rumahan. Tumbuh cepat di iklim tropis.",

  infoUmum: {
    umurPanen:
      "25–35 HST (cabut seluruh tanaman) atau 20–25 HST (panen daun selektif)",
    jarakTanam: "15 × 20 cm atau sebar langsung",
    kebutuhanAir: "Sedang — lembab namun tidak tergenang",
    suhuOptimal: "25–32 °C",
    phTanah: "6.0–7.5",
    mediaTanam: "Tanah gembur subur + kompos; adaptif di berbagai jenis tanah",
  },

  glosarium: [
    {
      istilah: "Bayam Cabut vs Bayam Petik",
      penjelasan:
        "Bayam cabut: panen dengan mencabut seluruh tanaman beserta akarnya saat masih muda (25–30 HST) — populer di pasar. Bayam petik: panen hanya daun atau pucuknya, biarkan tanaman terus tumbuh — bisa panen berulang.",
    },
    {
      istilah: "Bolting",
      penjelasan:
        "Bayam berbunga terlalu cepat (bolting) akibat suhu terlalu panas, hari yang terlalu panjang, atau stres air. Saat bolting, daun menjadi kecil, keras, dan kurang enak. Panen sebelum bolting terjadi.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Perkecambahan",
      rentangHari: "HST 1–5",
      emoji: "🌱",
      deskripsi:
        "Benih bayam sangat kecil — sebar langsung dan tipis di bedengan. Berkecambah dalam 3–5 hari.",
      ciriFisik: [
        "HST 3–5: kecambah sangat kecil muncul",
        "HST 5–7: daun benih (kotiledon) terbuka",
      ],
      fokusPerawatan: [
        "Campur benih dengan pasir halus sebelum disebar agar lebih merata",
        "Siram dengan semprotan halus (spray) — siram kasar akan menumpuk benih ke satu sisi",
        "Tutup tipis dengan tanah halus atau kompos kering sekitar 0.5 cm",
        "Jaga media tetap lembab sampai kecambah muncul semua",
      ],
    },
    {
      nama: "Pertumbuhan Aktif & Panen",
      rentangHari: "HST 5–30",
      emoji: "🥗",
      deskripsi:
        "Bayam tumbuh cepat. Penjarangan dilakukan sekaligus sebagai panen awal. Panen utama saat tinggi 20–25 cm.",
      ciriFisik: [
        "HST 10–15: 3–4 daun sejati, perlu penjarangan",
        "HST 20–25: tinggi 15–20 cm, daun lebar — siap panen selektif",
        "HST 25–35: tinggi 20–30 cm — siap panen cabut total",
      ],
      fokusPerawatan: [
        "HST 10–15: lakukan penjarangan (cabut bayam yang terlalu rapat) — yang dicabut bisa langsung dimakan",
        "Siram setiap pagi — cukup lembab, tidak perlu menggenang",
        "Tabur Urea tipis 2 g/m² di HST 10 untuk mendorong daun yang lebat",
        "Panen sebelum bayam mulai keluar bunga (bolting) — begitu berbunga, daun mengeras",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "Sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Persiapan bedengan",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2 kg/m²",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "10 g/m², tabur merata lalu cangkul",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
    },
    {
      waktu: "HST 10–12",
      fase: "vegetatif",
      kegiatan: "Pupuk N untuk daun lebat",
      produk: [
        {
          nama: "Urea",
          dosis: "2–3 g/m², tabur tipis merata lalu siram",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
      ],
      catatan:
        "Satu kali pemupukan susulan sudah cukup untuk bayam cabut. Untuk bayam petik berulang, ulangi setelah setiap panen.",
    },
  ],

  tipsSukses: [
    "Bayam sangat cocok untuk kebun rumahan — tumbuh cepat di pot atau polybag ukuran 25 cm ke atas.",
    "Panen sebelum berbunga — begitu terlihat batang memanjang ke atas dengan bunga, segera panen semua.",
    "Sebar benih dicampur pasir untuk distribusi yang merata di bedengan.",
    "Bayam merah (Amaranthus tricolor var. rubra) lebih menarik secara visual dan kandungan antioksidannya lebih tinggi.",
    "Rotasi cepat bayam cocok dikombinasi dengan tanaman buah seperti cabai atau tomat.",
    "Siram dengan semprotan halus — siram keras akan menumpuk benih dan merusak akar bayam muda.",
    "Bayam bisa ditanam di sela-sela tanaman keras (intercropping) sebagai tanaman penutup tanah.",
  ],

  penyakitUtama: ["pd-klorosis", "pd-rebah-semai"],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
