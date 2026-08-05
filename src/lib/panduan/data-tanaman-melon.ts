import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Melon
// Istilah umum (HSS, HST, N/P/K, dll) → lihat Ilmu Dasar
// ============================================================

export const melon: PanduanTanaman = {
  id: "tanaman-melon",
  nama: "Melon",
  namaLatin: "Cucumis melo L.",
  emoji: "🍈",
  kategori: "buah",
  deskripsiSingkat:
    "Buah premium dengan kadar gula tinggi (Brix 12–16°). Butuh manajemen air dan nutrisi yang presisi, serta penyerbukan buatan untuk fruit set yang optimal.",

  infoUmum: {
    umurPanen: "65–75 HST (sejak pindah tanam)",
    jarakTanam: "60 × 70 cm atau 70 × 70 cm",
    kebutuhanAir:
      "Tinggi tapi sensitif — tidak boleh tergenang, irigasi tetes ideal",
    suhuOptimal: "25–35 °C siang, 18–20 °C malam",
    phTanah: "6.0–6.8",
    mediaTanam: "Tanah lempung berpasir + kompos; drainase sangat baik wajib",
  },

  glosarium: [
    {
      istilah: "Brix (°Bx)",
      penjelasan:
        "Satuan kadar gula buah diukur dengan refraktometer. Melon premium: Brix ≥ 12°. Dicapai dengan K tinggi, pengurangan N menjelang panen, dan pengelolaan air yang tepat di akhir masa tanam.",
    },
    {
      istilah: "Penyerbukan Buatan (Hand Pollination)",
      penjelasan:
        "Memindahkan serbuk sari bunga jantan ke kepala putik bunga betina menggunakan kuas atau dengan memetik bunga jantan. Dilakukan pagi hari jam 7–10. Penting karena melon butuh penyerbukan tepat waktu untuk fruit set yang baik.",
    },
    {
      istilah: "Jaring / Net Melon",
      penjelasan:
        "Pola jaringan retak pada kulit melon tertentu (net melon). Terbentuk saat kulit luar tumbuh lebih lambat dari daging dalam — pertanda buah berkembang baik.",
    },
    {
      istilah: "Seleksi Buah (Fruit Thinning)",
      penjelasan:
        "Memilih 1–2 buah terbaik per tanaman dan membuang buah lainnya. Bertujuan agar semua nutrisi terkonsentrasi ke buah terpilih untuk ukuran dan Brix yang maksimal.",
    },
    {
      istilah: "Penopang Buah (Net/Jala)",
      penjelasan:
        "Kantong jala yang digantung untuk menopang buah agar tidak jatuh. Dipasang saat buah sebesar kepalan tangan (HST 30–35).",
    },
    {
      istilah: "Stressing Air",
      penjelasan:
        "Teknik mengurangi penyiraman secara signifikan 7–10 hari sebelum panen untuk meningkatkan kadar gula (Brix). Tanaman sedikit stress air tapi gula terkonsentrasi di buah.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Persemaian",
      rentangHari: "HSS 1–10",
      emoji: "🌱",
      deskripsi:
        "Benih melon berkecambah cepat dalam 3–5 hari. Media semai ringan dan hangat kunci keberhasilan. Persemaian melon lebih singkat dari cabai.",
      ciriFisik: [
        "HSS 3–5: kecambah muncul, hipokotil terangkat",
        "HSS 5–7: kotiledon membuka sempurna",
        "HSS 7–10: daun sejati pertama muncul, bibit siap pindah",
      ],
      fokusPerawatan: [
        "Gunakan media ringan: tanah + kompos + sekam bakar (1:1:1) — melon tidak suka media berat",
        "Siram hati-hati, jangan sampai media terendam — bibit melon sangat rentan busuk pangkal",
        "Bibit melon rapuh, pindahkan bersama gumpalan medianya agar akar tidak rusak",
      ],
    },
    {
      nama: "Pindah Tanam & Adaptasi",
      rentangHari: "HST 1–7",
      emoji: "🌿",
      deskripsi:
        "Bibit dipindah saat 1 daun sejati. Fase adaptasi melon lebih singkat karena pertumbuhannya cepat.",
      ciriFisik: [
        "HST 1–3: bibit bisa layu ringan (normal)",
        "HST 5–7: sulur pertama mulai terlihat",
      ],
      fokusPerawatan: [
        "Siram segera setelah tanam, beri naungan sementara jika cuaca terik",
        "Siapkan tiang dan bentangkan tali/kawat vertikal sejak sebelum tanam — sulur melon tumbuh cepat",
        "Sulam (ganti) bibit mati dalam 2 hari pertama",
      ],
    },
    {
      nama: "Vegetatif — Pertumbuhan Sulur",
      rentangHari: "HST 7–25",
      emoji: "🌾",
      deskripsi:
        "Sulur tumbuh cepat dan memanjat. Cabang-cabang lateral terbentuk. Ini saat pembentukan 'kerangka' tanaman yang menentukan jumlah node generatif.",
      ciriFisik: [
        "HST 7–14: sulur utama memanjang 20–40 cm",
        "HST 14–20: cabang lateral (sulur samping) mulai tumbuh",
        "HST 20–25: daun besar dan lebat, percabangan aktif",
      ],
      fokusPerawatan: [
        "Topping: potong pucuk sulur utama dengan gunting steril saat mencapai node (ruas) ke-12 hingga 15 — ini memaksa tumbuhnya cabang samping yang lebih produktif",
        "Ikat dan arahkan sulur ke tali/kawat setiap 2 hari — jangan dibiarkan menjuntai",
        "Tabur NPK Phonska 5–8 g/tanaman + sedikit Urea 2–3 g/tanaman untuk mendorong pertumbuhan sulur yang cepat",
        "Periksa bawah daun setiap pagi — kutu daun dan tungau merah (titik merah kecil) sering bersembunyi di sana",
      ],
    },
    {
      nama: "Pembungaan & Penyerbukan",
      rentangHari: "HST 25–35",
      emoji: "🌺",
      deskripsi:
        "Bunga jantan dan betina muncul. Penyerbukan buatan dilakukan setiap pagi. Ini fase paling kritis — fruit set yang berhasil menentukan segalanya.",
      ciriFisik: [
        "Bunga jantan muncul lebih dahulu (tidak ada bakal buah di pangkal)",
        "Bunga betina: ada bakal buah kecil bulat di pangkal",
        "Bunga mekar optimal jam 7–10 pagi",
      ],
      fokusPerawatan: [
        "Lakukan penyerbukan buatan setiap pagi jam 7–10: petik bunga jantan, gosokkan langsung ke putik bunga betina, atau gunakan kuas kecil",
        "Targetkan bunga betina di ruas ke-10 hingga 15 pada cabang samping ke-2 — ini posisi buah terbaik",
        "Semprot ZPT (contoh: 'Atonik') encer sesuai dosis label setelah penyerbukan untuk meningkatkan keberhasilan buah terbentuk",
        "Hindari semprot pestisida apapun saat jam 7–10 pagi — lebah penyerbuk aktif di waktu ini",
      ],
    },
    {
      nama: "Fruit Set & Seleksi Buah",
      rentangHari: "HST 35–45",
      emoji: "🫐",
      deskripsi:
        "Bakal buah berkembang dari biji kacang hingga sebesar kepalan tangan. Seleksi buah dilakukan — sisakan 1–2 buah terbaik per tanaman.",
      ciriFisik: [
        "Bakal buah yang berhasil membesar dengan cepat",
        "Hari 3–5 setelah fruit set, ukuran sudah sebesar bola pingpong",
        "HST 40: buah sebesar kepalan tangan",
      ],
      fokusPerawatan: [
        "Seleksi ketat: pilih 1–2 buah terbesar, paling bulat, dan sempurna per tanaman — buang sisanya meski berat",
        "Pasang jala/kantong penopang buah (beli di toko tani atau buat dari tali rafia) saat ukuran buah sebesar kepalan tangan",
        "Kocor NPK Mutiara 16-16-16 (3 g/liter, 300 ml/tanaman) + Kalsium Nitrat (3 g/liter) bergantian 2× seminggu",
        "Pangkas semua sulur di atas posisi buah — sisakan hanya 2 daun di atas buah untuk fotosintesis",
      ],
    },
    {
      nama: "Pembesaran Buah",
      rentangHari: "HST 45–60",
      emoji: "🍈",
      deskripsi:
        "Fase pertumbuhan buah paling cepat. Daging buah berkembang penuh. Nutrisi K dan Ca sangat menentukan ukuran akhir dan kualitas.",
      ciriFisik: [
        "Buah tumbuh pesat, berat bertambah cepat",
        "Pada net melon: jaring mulai terbentuk di kulit",
        "Sulur dekat buah mulai mengering sedikit",
      ],
      fokusPerawatan: [
        "Tabur KCl (pupuk Kalium, butiran kemerahan) 10–15 g/tanaman atau kocor larutan NPK tinggi K (12-6-22) 3 g/liter — Kalium tinggi = buah besar + gula tinggi",
        "Kocor Kalsium Nitrat 3–4 g/liter secara rutin 2× seminggu — mencegah buah retak dan memperpanjang umur simpan",
        "Mulai kurangi sedikit frekuensi siram — tanah sedikit lebih kering membantu konsentrasi gula di buah",
        "Balik posisi buah 1–2 kali agar semua sisi mendapat cahaya dan warna merata",
      ],
    },
    {
      nama: "Pematangan & Panen",
      rentangHari: "HST 60–75",
      emoji: "✨",
      deskripsi:
        "Buah mencapai ukuran akhir dan kadar gula meningkat drastis. Stressing air di 7–10 hari terakhir untuk memaksimalkan Brix.",
      ciriFisik: [
        "Aroma wangi mulai tercium di pangkal buah",
        "Retak/slip: tangkai buah mulai sedikit terlepas dari buah (tanda matang)",
        "Warna kulit sesuai varietas (kuning, krem, hijau tua)",
        "Sulur dekat buah mengering sempurna",
      ],
      fokusPerawatan: [
        "Hentikan total pupuk Nitrogen (Urea, ZA) — hanya boleh KCl atau MKP (pupuk Mono Kalium Fosfat, warna putih kristal)",
        "Kurangi penyiraman 40–50% selama 7–10 hari sebelum perkiraan panen — ini kunci Brix (gula) tinggi",
        "Panen saat: aroma wangi kuat di pangkal buah + sulur dekat buah mengering + tangkai buah sedikit retak (slip) — tanda kematangan alami",
        "Potong tangkai minimal 3 cm dari buah agar daya simpan lebih lama",
      ],
    },
  ],

  jadwalPemupukan: [
    // SEMAI
    {
      waktu: "HSS 0",
      fase: "semai",
      kegiatan: "Persiapan media semai",
      produk: [
        {
          nama: "Pupuk Kandang Matang",
          dosis: "20–30% dari media",
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
      catatan:
        "Media ringan: tanah + kompos + sekam bakar = 1:1:1. Melon lebih menyukai media lebih porous dibanding cabai.",
    },
    // PERSIAPAN LAHAN
    {
      waktu: "14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar — organik & pengapuran",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2–3 kg/m²",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Dolomit (jika pH < 6)",
          dosis: "150–200 g/m²",
          cara: "tabur",
          pupukId: "pupuk-dolomit",
        },
      ],
      catatan: "Melon sangat sensitif pH — pastikan pH 6.0–6.8 sebelum tanam.",
    },
    {
      waktu: "7 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar kimia",
      produk: [
        {
          nama: "SP-36",
          dosis: "25 g/m²",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        { nama: "KCl", dosis: "15 g/m²", cara: "tabur", pupukId: "pupuk-kcl" },
      ],
    },
    // VEGETATIF
    {
      waktu: "HST 5–7",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter setelah adaptasi",
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
      catatan:
        "Mulai pemupukan susulan setelah tanaman benar-benar tegak kembali.",
    },
    {
      waktu: "HST 10–12",
      fase: "vegetatif",
      kegiatan: "Susulan 2 — Pacu sulur",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "5–8 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "Urea",
          dosis: "2–3 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
      ],
      catatan:
        "N dominan untuk mendorong pertumbuhan sulur yang cepat dan kuat.",
    },
    {
      waktu: "HST 15–17",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Foliar mikro & Boron",
      produk: [
        {
          nama: "POC / NPK Cair foliar",
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
      catatan: "Boron penting untuk persiapan pembungaan yang akan datang.",
    },
    {
      waktu: "HST 20–22",
      fase: "vegetatif",
      kegiatan: "Susulan 4 — Terakhir dominan N",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "8–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "2 g/L, kocor 200 ml/tanaman",
          cara: "kocor",
        },
      ],
      catatan:
        "Kalsium Nitrat mulai diberikan sejak dini untuk membangun dinding sel yang kuat.",
    },
    // GENERATIF — PEMBUNGAAN & FRUIT SET
    {
      waktu: "HST 25–30",
      fase: "generatif",
      kegiatan: "Pra-bunga — Dorong pembungaan",
      produk: [
        {
          nama: "MKP 0-52-34",
          dosis: "2 g/L, kocor 250 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-mkp",
        },
        {
          nama: "Boron + Kalsium foliar",
          dosis: "Boron 1 g/L + CaNO₃ 2 g/L",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
      ],
      catatan:
        "MKP mendorong pembungaan. Semprot Boron + Ca SEBELUM bunga mekar untuk meningkatkan fruit set.",
    },
    {
      waktu: "HST 30–38 (setiap 2 hari)",
      fase: "generatif",
      kegiatan: "Fase penyerbukan — nutrisi ringan, fokus fruit set",
      produk: [
        {
          nama: "NPK rendah N (6-20-30 atau sejenis)",
          dosis: "3 g/L, kocor 200 ml/tanaman, 2×/minggu",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "2 g/L, kocor bergantian",
          cara: "kocor",
        },
      ],
      catatan:
        "Selama penyerbukan berlangsung, hindari perubahan kondisi dratis (siram terlambat, pupuk berlebih). Stabil = fruit set berhasil.",
    },
    // PEMBESARAN BUAH
    {
      waktu: "HST 38–45",
      fase: "generatif",
      kegiatan: "Setelah seleksi — Fokus pembesaran buah",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "10 g/tanaman, tabur atau kocor 3 g/L",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "3 g/L, kocor 300 ml/tanaman, 2×/minggu",
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
        "Setelah seleksi buah, seluruh nutrisi diarahkan ke 1–2 buah pilihan.",
    },
    {
      waktu: "HST 45–55 (tiap 5–7 hari)",
      fase: "generatif",
      kegiatan: "Rutin pembesaran — K dominan",
      produk: [
        {
          nama: "NPK tinggi K (12-6-22 atau SOP K₂SO₄)",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "3–4 g/L, kocor 300 ml/tanaman",
          cara: "kocor",
        },
        {
          nama: "POC Kalium tinggi foliar",
          dosis: "5 ml/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Kalium tinggi = Brix tinggi. Konsisten hingga stressing air dimulai.",
    },
    // PRA PANEN
    {
      waktu: "HST 55–60",
      fase: "pra_panen",
      kegiatan: "Stop N, mulai stressing air",
      produk: [
        {
          nama: "KCl atau SOP",
          dosis: "10 g/tanaman, tabur terakhir",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "MKP 0-52-34 foliar",
          dosis: "2 g/L, semprot 2×",
          cara: "semprot_daun",
          pupukId: "pupuk-mkp",
        },
      ],
      catatan:
        "Hentikan semua N. Kurangi penyiraman 40–50% selama 7–10 hari sebelum panen untuk memaksimalkan Brix (kadar gula).",
    },
  ],

  tipsSukses: [
    "Penyerbukan buatan jam 7–10 pagi adalah kunci — lewat dari jam 11 serbuk sari sudah tidak aktif.",
    "Seleksi buah ketat: 1 tanaman 1 buah premium jauh lebih baik dari 3 buah kecil.",
    "Stressing air 7–10 hari sebelum panen bisa meningkatkan Brix hingga 2–3 poin.",
    "Topping sulur utama di node ke-12–15 untuk memaksa cabang lateral yang lebih produktif.",
    "Irigasi tetes (drip) sangat ideal untuk melon — kelembaban stabil dan daun tidak basah.",
    "Pasang jala penopang buah saat ukuran sebesar kepalan tangan untuk mencegah buah jatuh.",
    "Periksa refraktometer saat panen: Brix ≥ 12° = premium, ≥ 14° = sangat premium.",
  ],

  penyakitUtama: [
    "pd-antraknosa",
    "pd-embun-tepung",
    "pd-busuk-phytophthora",
    "pd-tungau-merah",
  ],
  pupukUtama: [
    "pupuk-npk-mutiara",
    "pupuk-npk-phonska",
    "pupuk-kcl",
    "pupuk-mkp",
    "pupuk-boron",
    "pupuk-sp36",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
