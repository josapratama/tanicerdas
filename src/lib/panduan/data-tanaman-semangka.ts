import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Semangka
// Istilah umum (HSS, HST, N/P/K, dll) → lihat Ilmu Dasar
// ============================================================

export const semangka: PanduanTanaman = {
  id: "tanaman-semangka",
  nama: "Semangka",
  namaLatin: "Citrullus lanatus (Thunb.) Matsum. & Nakai",
  emoji: "🍉",
  kategori: "buah",
  deskripsiSingkat:
    "Buah musim panas dengan kadar air tinggi dan rasa manis. Masa tanam relatif singkat (60–80 hari) dan cocok untuk lahan terbuka dengan sinar matahari penuh.",

  infoUmum: {
    umurPanen: "60–80 HST (sejak pindah tanam, tergantung varietas)",
    jarakTanam: "100 × 200 cm (melar ke segala arah)",
    kebutuhanAir: "Sedang-tinggi di vegetatif, kurangi di pematangan buah",
    suhuOptimal:
      "25–35 °C, sangat tidak suka cuaca dingin dan hujan terus-menerus",
    phTanah: "6.0–7.0",
    mediaTanam:
      "Tanah lempung berpasir, gembur, drainase baik; tidak cocok di tanah liat berat",
  },

  glosarium: [
    {
      istilah: "Penyerbukan Buatan",
      penjelasan:
        "Sama seperti melon — pindahkan serbuk sari dari bunga jantan ke putik bunga betina menggunakan kuas atau bunga jantan langsung. Lakukan pagi hari jam 7–10. Lebih mudah dibantu lebah di kebun terbuka.",
    },
    {
      istilah: "Buah Pertama vs Buah Kedua",
      penjelasan:
        "Semangka biasanya menghasilkan 1 buah utama per tanaman. Buah pertama (di cabang utama) sering dibuang jika muncul terlalu awal — biarkan buah ke-2 atau ke-3 di cabang lateral yang lebih besar dan berat.",
    },
    {
      istilah: "Sulur (Tendril)",
      penjelasan:
        "Alat pegang tanaman merambat. Pada semangka, sulur dekat buah yang mulai mengering adalah tanda buah mendekati matang.",
    },
    {
      istilah: "Bunyi 'Buk' (Knock Test)",
      penjelasan:
        "Cara cek kematangan: ketuk buah dengan jari. Bunyi 'buk' dalam (duller) = matang. Bunyi 'pak' nyaring (higher pitch) = belum matang atau sudah terlalu matang.",
    },
    {
      istilah: "Ground Spot",
      penjelasan:
        "Bagian bawah buah yang menyentuh tanah. Warna ground spot kuning keemasan = buah matang. Putih = belum matang.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Persemaian",
      rentangHari: "HSS 1–7",
      emoji: "🌱",
      deskripsi:
        "Benih semangka berkecambah dalam 3–5 hari. Persemaian singkat — bibit pindah tanam saat 1–2 daun sejati.",
      ciriFisik: [
        "HSS 3–5: kecambah muncul, hipokotil mengangkat kotiledon",
        "HSS 5–7: kotiledon membuka, daun sejati pertama muncul",
        "HSS 7: bibit siap pindah tanam",
      ],
      fokusPerawatan: [
        "Suhu ideal untuk kecambah semangka: 28–32°C — bisa taruh di dalam plastik transparan 1–2 hari pertama untuk efek rumah kaca",
        "Siram hati-hati, media tidak boleh terlalu basah — semangka rentan busuk akar",
        "Jangan terlambat pindah ke lahan — akar semangka tidak suka terganggu saat sudah besar",
      ],
    },
    {
      nama: "Pindah Tanam & Adaptasi",
      rentangHari: "HST 1–10",
      emoji: "🌿",
      deskripsi:
        "Bibit dipindah ke lahan. Semangka tumbuh horizontal — siapkan lahan yang luas dan bebas dari tanaman yang bisa menaungi.",
      ciriFisik: [
        "HST 3–5: akar mulai terhubung, bibit tegak",
        "HST 7–10: sulur pertama mulai muncul",
      ],
      fokusPerawatan: [
        "Siram segera setelah tanam agar akar cepat kontak dengan tanah",
        "Tentukan arah tumbuh sulur sebelum memanjang — arahkan ke satu sisi yang rapi",
        "Pasang mulsa plastik hitam-perak — sangat penting untuk semangka karena lahan luas dan rawan gulma",
      ],
    },
    {
      nama: "Vegetatif — Pertumbuhan Sulur",
      rentangHari: "HST 10–28",
      emoji: "🌾",
      deskripsi:
        "Sulur memanjang pesat hingga 2–4 meter. Cabang lateral terbentuk. Fase ini menentukan kerangka tanaman untuk mendukung buah.",
      ciriFisik: [
        "HST 10–18: sulur utama memanjang 50–100 cm",
        "HST 18–25: cabang lateral aktif tumbuh",
        "HST 25–28: sulur bisa mencapai 200–300 cm",
      ],
      fokusPerawatan: [
        "Tabur Urea 3–5 g/tanaman + NPK Phonska 8–10 g/tanaman di sekitar pangkal dan siram — untuk mendorong sulur tumbuh panjang dan berdaun lebat",
        "Arahkan sulur ke satu sisi setiap 2 hari — semangka bisa 'berantakan' dan saling tumpang tindih jika dibiarkan",
        "Pinching: buang pucuk cabang sekunder yang tidak perlu agar energi fokus ke cabang utama",
        "Periksa bawah daun — kutu daun dan aphids (kutu hijau kecil) sering muncul di sulur muda",
      ],
    },
    {
      nama: "Pembungaan & Penyerbukan",
      rentangHari: "HST 28–40",
      emoji: "🌺",
      deskripsi:
        "Bunga jantan muncul lebih awal, lalu bunga betina. Penyerbukan buatan atau alami dengan bantuan lebah. Fruit set berlangsung 3–5 hari.",
      ciriFisik: [
        "Bunga jantan: tidak ada bakal buah di pangkal",
        "Bunga betina: ada bakal buah bulat kecil di pangkal",
        "Bunga mekar optimal jam 7–10 pagi",
      ],
      fokusPerawatan: [
        "Lakukan penyerbukan buatan pagi jam 7–10: petik bunga jantan, gosokkan ke putik bunga betina yang ada bakal buah bulat di pangkalnya",
        "Target bunga betina di ruas ke-12 hingga 18 pada cabang utama — posisi ini menghasilkan buah terbesar",
        "Kurangi pupuk Urea/ZA — tidak perlu N banyak selama penyerbukan berlangsung",
        "Jangan semprot pestisida apapun saat jam 7–10 pagi — waktu bunga mekar dan lebah aktif",
      ],
    },
    {
      nama: "Perkembangan Buah",
      rentangHari: "HST 40–55",
      emoji: "🟢",
      deskripsi:
        "Buah berkembang dari bakal kecil hingga ukuran bola sepak. Pertumbuhan cepat membutuhkan nutrisi tinggi.",
      ciriFisik: [
        "HST 40–45: buah sebesar bola tenis",
        "HST 45–52: buah sebesar bola voli, pola warna mulai terlihat",
        "Daging buah masih putih-hijau di dalam",
      ],
      fokusPerawatan: [
        "Tabur KCl (pupuk Kalium, butiran kemerahan) 5–10 g/tanaman melingkar + kocor Kalsium Nitrat 3 g/liter 300 ml/tanaman — untuk pembesaran buah maksimal dan mencegah retak",
        "Alas buah dengan jerami, daun kering, atau potongan karton agar tidak langsung menyentuh tanah (mencegah busuk bawah)",
        "Pangkas sulur-sulur kecil yang tidak ada buahnya — fokus nutrisi ke buah yang sudah terpilih",
      ],
    },
    {
      nama: "Pematangan Buah",
      rentangHari: "HST 55–75",
      emoji: "🍉",
      deskripsi:
        "Daging buah memerah dan kadar gula meningkat. Kurangi penyiraman untuk konsentrasi gula. Tidak ada buah lanjutan — semangka panen sekali.",
      ciriFisik: [
        "Sulur dekat buah mengering",
        "Ground spot berubah dari putih ke kuning keemasan",
        "Kulit berganti warna sesuai varietas",
        "Aroma tidak terlalu menyengat (berbeda dengan melon)",
      ],
      fokusPerawatan: [
        "Hentikan total pupuk Urea/ZA — boleh hanya KCl tabur 10 g/tanaman terakhir kali",
        "Kurangi penyiraman 50% selama 7–10 hari sebelum panen — ini kunci semangka manis",
        "Cek kematangan setiap 2 hari: ketuk buah — bunyi 'buk' dalam = matang, 'pak' nyaring = belum. Lihat ground spot (bawah buah): kuning keemasan = matang",
        "Cek label pestisida terakhir — pastikan sudah melewati masa karensa sebelum panen",
      ],
    },
  ],

  jadwalPemupukan: [
    // PERSIAPAN LAHAN
    {
      waktu: "14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar organik",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2–3 kg/m²",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Dolomit (jika pH < 6)",
          dosis: "100–150 g/m²",
          cara: "tabur",
          pupukId: "pupuk-dolomit",
        },
      ],
      catatan: "Benam pupuk kandang di larikan tanam, bukan disebar rata.",
    },
    {
      waktu: "7 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar kimia",
      produk: [
        {
          nama: "SP-36",
          dosis: "20–25 g/m² larikan",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        {
          nama: "KCl",
          dosis: "15 g/m² larikan",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "NPK Phonska",
          dosis: "20 g/m² larikan",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan:
        "Campur semua dan benam di larikan tanam, tutup tipis dengan tanah.",
    },
    // VEGETATIF
    {
      waktu: "HST 7–10",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter",
      produk: [
        {
          nama: "NPK 16-16-16",
          dosis: "5 g/tanaman, kocor 300 ml",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "POC",
          dosis: "3 ml/L, kocor",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
    },
    {
      waktu: "HST 14–16",
      fase: "vegetatif",
      kegiatan: "Susulan 2 — Pacu sulur (N dominan)",
      produk: [
        {
          nama: "Urea",
          dosis: "3–5 g/tanaman, tabur melingkar",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "NPK Phonska",
          dosis: "8–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan: "N dominan untuk sulur yang panjang dan berdaun lebat.",
    },
    {
      waktu: "HST 20–22",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Foliar & persiapan bunga",
      produk: [
        {
          nama: "NPK Cair / POC foliar",
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
        { nama: "Kalsium Nitrat", dosis: "2 g/L, kocor 200 ml", cara: "kocor" },
      ],
      catatan: "Boron dan Ca mulai penting untuk persiapan fase generatif.",
    },
    // GENERATIF
    {
      waktu: "HST 25–28",
      fase: "generatif",
      kegiatan: "Pra-bunga — Kurangi N, tingkatkan P dan K",
      produk: [
        {
          nama: "MKP 0-52-34",
          dosis: "2 g/L, kocor 250 ml/tanaman, 2×/minggu",
          cara: "kocor",
          pupukId: "pupuk-mkp",
        },
        {
          nama: "Boron + Ca foliar",
          dosis: "Boron 1 g/L + CaNO₃ 2 g/L",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
      ],
      catatan: "MKP mendorong pembungaan. Mulai kurangi N secara signifikan.",
    },
    {
      waktu: "HST 35–42",
      fase: "generatif",
      kegiatan: "Pasca fruit set — Nutrisi pembesaran awal",
      produk: [
        {
          nama: "NPK 16-16-16",
          dosis: "8 g/L → larutan 2 g/L, kocor 300 ml, 2×/minggu",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "3 g/L, kocor 250 ml, 2×/minggu",
          cara: "kocor",
        },
        {
          nama: "KCl",
          dosis: "5 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "Setelah fruit set berhasil, genjot nutrisi untuk membesarkan buah secepat mungkin.",
    },
    {
      waktu: "HST 42–55 (tiap 5–7 hari)",
      fase: "generatif",
      kegiatan: "Pembesaran buah — K dominan",
      produk: [
        {
          nama: "NPK tinggi K (12-6-22 atau KNO₃)",
          dosis: "10–15 g/tanaman, tabur atau 3 g/L kocor",
          cara: "kocor",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "3–4 g/L, kocor 300 ml",
          cara: "kocor",
        },
        {
          nama: "MKP foliar",
          dosis: "2 g/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-mkp",
        },
      ],
      catatan:
        "K tinggi = buah besar + rasa manis. Ca konsisten = cegah buah retak.",
    },
    // PRA PANEN
    {
      waktu: "HST 55–60",
      fase: "pra_panen",
      kegiatan: "Stop N, stressing air untuk Brix",
      produk: [
        {
          nama: "KCl / SOP terakhir",
          dosis: "10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "MKP 0-52-34 foliar",
          dosis: "2 g/L, semprot 2× terakhir",
          cara: "semprot_daun",
          pupukId: "pupuk-mkp",
        },
      ],
      catatan:
        "Hentikan semua pupuk N. Kurangi penyiraman 50% selama 7–10 hari terakhir untuk meningkatkan kadar gula.",
    },
  ],

  tipsSukses: [
    "Siapkan lahan luas — satu tanaman semangka bisa melilit area 3–4 m². Jangan tanam terlalu rapat.",
    "Arahkan sulur ke satu arah agar tidak saling tumpang tindih dan mudah perawatan.",
    "Penyerbukan buatan pagi hari jam 7–10 jauh lebih reliable daripada bergantung sepenuhnya pada lebah.",
    "Alas buah dengan jerami atau sekam agar tidak bersentuhan langsung dengan tanah yang bisa memicu busuk.",
    "Ciri panen: sulur dekat buah kering + ground spot kuning keemasan + bunyi 'buk' dalam saat diketuk.",
    "Kurangi air 7–10 hari sebelum panen — ini rahasia semangka manis.",
    "Semangka panen sekali per musim — fokus pada kualitas satu buah terbaik per tanaman.",
  ],

  penyakitUtama: [],
  pupukUtama: [
    "pupuk-npk-mutiara",
    "pupuk-npk-phonska",
    "pupuk-kcl",
    "pupuk-mkp",
    "pupuk-boron",
    "pupuk-sp36",
    "pupuk-kandang",
    "pupuk-organik-cair",
    "pupuk-urea",
  ],
};
