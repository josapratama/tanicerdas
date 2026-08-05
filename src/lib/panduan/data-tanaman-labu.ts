import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Labu Siam
// ============================================================

export const labuSiam: PanduanTanaman = {
  id: "tanaman-labu-siam",
  nama: "Labu Siam",
  namaLatin: "Sechium edule (Jacq.) Sw.",
  emoji: "🫑",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Tanaman merambat sangat produktif yang bisa berbuah ratusan buah per musim. Sekali tanam bisa produktif hingga beberapa tahun. Sangat mudah dirawat dan toleran berbagai kondisi tanah.",

  infoUmum: {
    umurPanen: "60–80 HST (panen pertama), produktif tahunan",
    jarakTanam: "2 × 3 m atau 3 × 3 m (butuh ruang merambat luas)",
    kebutuhanAir: "Sedang — toleran kekeringan ringan, tidak suka tergenang",
    suhuOptimal: "15–25 °C (tumbuh baik di dataran sedang–tinggi)",
    phTanah: "5.5–6.8",
    mediaTanam:
      "Adaptif hampir semua jenis tanah; subur dan gembur untuk hasil optimal",
  },

  glosarium: [
    {
      istilah: "Tanam dari Buah",
      penjelasan:
        "Labu siam tidak ditanam dari biji yang dikeluarkan, melainkan dari buah utuh yang sudah tua (biji di dalam). Buah ditanam langsung dengan posisi miring 45°, bagian tangkai di atas.",
    },
    {
      istilah: "Rambatan Pergola",
      penjelasan:
        "Sistem rambatan horizontal di atas (seperti atap/kanopi) yang paling ideal untuk labu siam. Buah menggantung ke bawah sehingga mudah dipanen dan tidak menyentuh tanah.",
    },
    {
      istilah: "Tanaman Tahunan",
      penjelasan:
        "Berbeda dari cabai atau timun, labu siam bisa hidup dan produktif selama bertahun-tahun tanpa dicabut. Batang utama semakin besar dan kuat setiap tahunnya.",
    },
    {
      istilah: "Tunas Muda (Pucuk)",
      penjelasan:
        "Pucuk/tunas muda labu siam juga bisa dimakan sebagai sayuran. Memanen pucuk secara rutin malah mendorong pertumbuhan cabang baru yang lebih produktif.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Perkecambahan dari Buah",
      rentangHari: "HST 1–21",
      emoji: "🌱",
      deskripsi:
        "Labu siam ditanam dari buah utuh yang tua — bukan dari biji terpisah. Tunas muncul langsung dari biji di dalam buah yang masih menyatu.",
      ciriFisik: [
        "HST 7–14: tunas hijau mulai terlihat di ujung buah yang ditanam",
        "HST 14–21: tunas memanjang 10–15 cm, daun pertama membuka",
      ],
      fokusPerawatan: [
        "Pilih buah labu siam yang sudah sangat tua (sudah ada tunas kecil di ujungnya) sebagai bibit",
        "Tanam buah utuh dengan posisi miring 45°, ujung yang ada tunasnya ke atas, setengah buah tertimbun tanah",
        "Siram ringan — jangan terlalu basah karena buah bisa membusuk sebelum berakar",
        "Tidak perlu pupuk sama sekali di fase ini — nutrisi dari buah itu sendiri sudah cukup",
      ],
    },
    {
      nama: "Vegetatif — Pertumbuhan Sulur",
      rentangHari: "HST 21–60",
      emoji: "🌿",
      deskripsi:
        "Sulur tumbuh cepat dan mulai merambat. Fase ini tanaman membangun sistem akar dan kerangka batang yang akan produktif bertahun-tahun.",
      ciriFisik: [
        "HST 21–35: sulur utama memanjang 50–100 cm",
        "HST 35–50: cabang lateral mulai aktif",
        "HST 50–60: kanopi mulai terbentuk di atas rambatan",
      ],
      fokusPerawatan: [
        "Arahkan sulur utama ke rambatan/pergola — ikat longgar dengan tali",
        "Tabur pupuk kandang + NPK Phonska di sekitar pangkal tanaman untuk mendorong pertumbuhan akar",
        "Biarkan sulur merambat bebas di atas pergola — tidak perlu topping atau pemangkasan paksa",
        "Sirami rutin 2–3 kali seminggu di musim kemarau",
      ],
    },
    {
      nama: "Pembungaan & Buah Pertama",
      rentangHari: "HST 60–80",
      emoji: "🌼",
      deskripsi:
        "Bunga jantan muncul lebih dahulu, kemudian bunga betina. Buah pertama terbentuk. Ini awal dari musim produksi panjang.",
      ciriFisik: [
        "HST 60–70: bunga jantan kecil berwarna putih-krem muncul",
        "HST 70–80: bunga betina muncul, buah pertama sebesar kelereng",
        "Buah bertumbuh cepat mencapai ukuran siap panen dalam 10–14 hari",
      ],
      fokusPerawatan: [
        "Mulai berikan pupuk NPK Mutiara 16-16-16 + KCl untuk mendukung pembentukan buah",
        "Kurangi sedikit N, tingkatkan K",
        "Biarkan penyerbukan alami — lebah dan serangga sangat aktif di bunga labu siam",
        "Pasang rambatan yang cukup kuat — buah labu siam bisa sangat berat saat panen penuh",
      ],
    },
    {
      nama: "Produksi Aktif (Tahunan)",
      rentangHari: "HST 80+",
      emoji: "🫑",
      deskripsi:
        "Produksi berlangsung terus-menerus. Satu tanaman labu siam bisa menghasilkan 50–200 buah per musim. Semakin tua tanaman, semakin produktif.",
      ciriFisik: [
        "Buah muncul di seluruh percabangan",
        "Daun tua menguning dan gugur secara alami",
        "Batang utama semakin besar dan berkayu setiap tahun",
      ],
      fokusPerawatan: [
        "Panen buah saat masih muda dan kulitnya masih halus — labu siam tua kulitnya mengeras dan berbiji keras",
        "Pupuk 2× sebulan: NPK Phonska tabur + pupuk kandang cair di sekitar batang",
        "Pangkas cabang yang sudah tidak produktif (terlalu tua) untuk merangsang tunas baru",
        "Di musim kemarau: siram 3–4× seminggu — labu siam butuh air cukup untuk terus berbuah",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "Persiapan lubang tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar lubang tanam",
      produk: [
        {
          nama: "Pupuk Kandang Matang",
          dosis: "5–10 kg per lubang tanam",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "SP-36",
          dosis: "50 g per lubang",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        {
          nama: "Dolomit (jika perlu)",
          dosis: "100 g per lubang",
          cara: "tabur",
          pupukId: "pupuk-dolomit",
        },
      ],
      catatan: "Campur dengan tanah lubang, diamkan 1 minggu sebelum tanam.",
    },
    {
      waktu: "HST 21–30",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Pacu akar & sulur",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "15–20 g/tanaman, tabur melingkar",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 500 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
    },
    {
      waktu: "HST 45–50",
      fase: "vegetatif",
      kegiatan: "Susulan 2 — Menjelang berbunga",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "20–25 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "KCl",
          dosis: "15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
    },
    {
      waktu: "Tiap 1 bulan (produksi aktif)",
      fase: "generatif",
      kegiatan: "Rutin bulanan — pertahankan produksi",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "3–5 kg/tanaman, ditabur di sekitar pangkal",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "25–30 g/tanaman",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 1 L/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Karena tanaman tahunan, pemupukan rutin bulanan sangat penting untuk mempertahankan produksi jangka panjang.",
    },
  ],

  tipsSukses: [
    "Pilih bibit (buah) yang sudah ada tunas kecilnya — perkecambahan jauh lebih cepat dan seragam.",
    "Bangun pergola yang kuat sebelum tanam — labu siam bisa sangat berat saat panen penuh.",
    "Panen buah muda secara rutin setiap 3–5 hari untuk mendorong terus bermunculannya buah baru.",
    "Labu siam lebih cocok di dataran 500–1500 mdpl — di dataran rendah panas pertumbuhan lebih lambat.",
    "Pupuk kandang organik adalah teman terbaik labu siam — berikan rutin setiap bulan.",
    "Pangkas tunas muda paling atas sesekali untuk mendorong percabangan lateral yang lebih produktif.",
    "Satu tanaman labu siam yang dirawat baik bisa menghasilkan 100–300 buah per musim.",
  ],

  penyakitUtama: ["pd-embun-tepung", "pd-klorosis"],
  pupukUtama: [
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-kcl",
    "pupuk-sp36",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
