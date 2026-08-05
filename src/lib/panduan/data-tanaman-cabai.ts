import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Cabai Merah Besar
// Istilah umum (HSS, HST, Semai, dll) → lihat data-tanaman-umum.ts
// ============================================================

export const cabaiMerah: PanduanTanaman = {
  id: "tanaman-cabai-merah",
  nama: "Cabai Merah Besar",
  namaLatin: "Capsicum annuum L.",
  emoji: "🌶️",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Tanaman perdu semusim paling bernilai ekonomi di Indonesia. Perawatan intensif namun bisa panen 8–12 kali dalam satu musim tanam jika dirawat dengan benar.",

  infoUmum: {
    umurPanen: "90–110 HST (sejak pindah tanam)",
    jarakTanam: "50 × 60 cm atau 60 × 70 cm",
    kebutuhanAir: "Sedang — tanah lembab, tidak tergenang",
    suhuOptimal: "24–30 °C",
    phTanah: "6.0–7.0",
    mediaTanam:
      "Tanah gembur + kompos + sekam bakar (2:1:1); drainase wajib baik",
  },

  /** Istilah khusus cabai — istilah umum ada di Ilmu Dasar */
  glosarium: [
    {
      istilah: "Cabang V (Dikotom Pertama)",
      penjelasan:
        "Titik percabangan pertama tempat batang utama membelah menjadi 2. Semua tunas di bawah titik ini dibuang (wiwil). Cabang di atas V inilah yang menghasilkan buah.",
    },
    {
      istilah: "Flush Panen",
      penjelasan:
        "Gelombang panen. Cabai bisa menghasilkan 8–12 flush (gelombang panen) dalam satu musim. Setiap setelah panen, tanaman dipupuk agar muncul flush berikutnya dalam 10–14 hari.",
    },
    {
      istilah: "Flower Drop",
      penjelasan:
        "Bunga rontok sebelum sempat dibuahi. Penyebab: suhu terlalu tinggi (>35°C), kekeringan singkat, kelebihan N, atau defisiensi Boron. Pencegahan: jaga kelembaban & semprot Boron saat pra-bunga.",
    },
    {
      istilah: "Blossom End Rot (BER)",
      penjelasan:
        "Ujung buah membusuk berwarna hitam, bukan karena jamur tapi defisiensi Kalsium. Ditangani dengan Kalsium Nitrat kocor rutin saat pembesaran buah.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Persemaian",
      rentangHari: "HSS 1–25",
      emoji: "🌱",
      deskripsi:
        "Benih berkecambah dan tumbuh di media semai terkontrol. Tujuan: bibit akar kuat, batang kokoh, sehat sebelum dipindah ke lahan.",
      ciriFisik: [
        "HSS 3–5: kecambah muncul, akar pertama terlihat",
        "HSS 7–10: kotiledon (daun benih) terbuka sempurna",
        "HSS 15–20: daun sejati pertama muncul",
        "HSS 25: 3–5 daun sejati, tinggi 10–15 cm — siap pindah tanam",
      ],
      fokusPerawatan: [
        "Siram hati-hati tiap pagi — media lembab, tidak sampai becek",
        "Tempatkan di lokasi terang tapi terlindung dari hujan deras",
        "Mulai HSS 7: siram dengan larutan NPK Mutiara 1–2 g/liter air (1 sendok teh kecil per liter) 3× seminggu",
        "Seleksi: cabut dan buang bibit yang pertumbuhannya tidak normal atau terlalu kerdil",
      ],
    },
    {
      nama: "Pindah Tanam & Adaptasi",
      rentangHari: "HST 1–14",
      emoji: "🌿",
      deskripsi:
        "Bibit dipindah ke lahan. Fase kritis — stres transplanting bisa menyebabkan layu bahkan kematian. Akar sedang membangun koneksi baru dengan tanah.",
      ciriFisik: [
        "HST 1–3: bibit mungkin layu siang hari (normal)",
        "HST 5–7: bibit tegak kembali, tunas baru mulai tumbuh",
        "HST 10–14: pertumbuhan aktif, daun baru bermunculan",
      ],
      fokusPerawatan: [
        "Siram segera setelah tanam untuk mengurangi stres pindah",
        "Beri naungan sementara 2–3 hari jika cuaca terik — bisa pakai daun pisang atau paranet",
        "Cek dan sulam (ganti) bibit mati dalam 3 hari pertama",
        "Belum perlu pupuk susulan — biarkan akar membangun diri dulu",
      ],
    },
    {
      nama: "Vegetatif Aktif",
      rentangHari: "HST 14–35",
      emoji: "🌾",
      deskripsi:
        "Pertumbuhan vegetatif pesat. Batang menebal, daun lebat, akar menyebar. Masa membangun fondasi — vegetatif kuat = generatif produktif.",
      ciriFisik: [
        "HST 14–21: batang mulai berkayu di bagian bawah",
        "HST 21–28: daun lebat, warna hijau tua sehat",
        "HST 28–35: cabang V pertama mendekati — titik pemangkasan utama",
      ],
      fokusPerawatan: [
        "Tabur NPK Phonska (pupuk butiran merah-putih) 5–10 g per tanaman melingkar di sekitar pangkal, lalu siram — untuk memacu daun dan batang",
        "Lakukan wiwil: cabut semua tunas kecil yang tumbuh di bawah cabang V (percabangan pertama)",
        "Pasang ajir (bambu/kayu 100–120 cm) sebelum tanaman mulai miring, ikat longgar ke batang",
        "Periksa pucuk daun setiap pagi — thrips (kutu kecil) dan kutu daun sering muncul di sini, semprot insektisida jika ditemukan",
      ],
    },
    {
      nama: "Pra-Bunga",
      rentangHari: "HST 35–50",
      emoji: "🌸",
      deskripsi:
        "Tanaman mendekati puncak vegetatif, mulai siap berbunga. Cabang generatif terbentuk. Saat kritis mengatur N-P-K.",
      ciriFisik: [
        "Cabang V jelas, percabangan makin banyak",
        "HST 40–45: bunga pertama muncul di cabang V",
        "Daun tebal dan ukuran optimal",
      ],
      fokusPerawatan: [
        "Kurangi pupuk Urea/ZA, ganti ke NPK Mutiara 16-16-16 tabur 10 g/tanaman — untuk mulai mendorong bunga bukan daun",
        "Semprot Boron (pupuk mikro, cari di toko tani: 'Borax', 'Fertibor', atau 'Solubor') 1 g/liter air ke seluruh daun — mencegah bunga rontok sebelum dibuahi",
        "Lanjutkan wiwil tunas di bawah percabangan produktif",
        "Pastikan parit drainase tidak tersumbat — genangan air di fase ini memicu penyakit layu",
      ],
    },
    {
      nama: "Pembungaan",
      rentangHari: "HST 50–65",
      emoji: "🌺",
      deskripsi:
        "Bunga bermunculan di seluruh percabangan. Fase sensitif — suhu ekstrem, kekeringan, atau N berlebih menyebabkan flower drop massal.",
      ciriFisik: [
        "Bunga putih-ungu di setiap ujung cabang",
        "Penyerbukan alami terjadi 2–3 hari setelah bunga mekar",
        "Bunga berhasil: mahkota gugur, calon buah kecil terlihat",
      ],
      fokusPerawatan: [
        "Jaga penyiraman konsisten — kekeringan bahkan 1–2 hari di fase ini bisa menyebabkan seluruh bunga rontok",
        "Jika bunga banyak yang rontok: semprot ZPT (Zat Pengatur Tumbuh, contoh: 'Atonik' atau 'Rootone') encer sesuai label",
        "Hindari semprot pestisida saat jam 7–10 pagi (saat bunga mekar) agar lebah penyerbuk tidak terbunuh",
        "Semprot insektisida pagi atau sore untuk lindungi bunga dari serangan thrips",
      ],
    },
    {
      nama: "Pembesaran Buah",
      rentangHari: "HST 65–90",
      emoji: "🫑",
      deskripsi:
        "Buah berkembang menjadi ukuran penuh. Butuh K dan Ca untuk buah besar, padat, bebas BER.",
      ciriFisik: [
        "Buah hijau memanjang dan membesar",
        "Kulit buah tegang dan mengkilap",
        "Berat buah mulai terasa saat dipegang",
      ],
      fokusPerawatan: [
        "Tabur KCl (pupuk Kalium, butiran merah kecoklatan) 7–10 g/tanaman melingkar + siram — untuk ukuran dan kepadatan buah",
        "Kocor Kalsium Nitrat (beli di toko tani, larutkan 3–5 g/liter) 300 ml per tanaman 1× seminggu — mencegah ujung buah busuk hitam (BER)",
        "Pangkas cabang yang terlalu rimbun atau tidak punya buah — agar udara lancar dan jamur tidak berkembang",
        "Waspada bercak pada buah (antraknosa): semprot fungisida berbahan aktif mankozeb (contoh: Dithane M-45) jika terlihat bercak coklat",
      ],
    },
    {
      nama: "Panen & Recovery",
      rentangHari: "HST 90–120+",
      emoji: "🌶️",
      deskripsi:
        "Buah memerah bertahap. Panen dilakukan per gelombang (flush). Setelah panen, tanaman dipupuk untuk memicu flush berikutnya.",
      ciriFisik: [
        "Warna berubah: hijau tua → kuning/jingga → merah mengkilap",
        "Kulit tegang dan keras, tangkai masih segar",
      ],
      fokusPerawatan: [
        "Hentikan pupuk Urea/ZA — fokus hanya KCl tabur 10 g/tanaman + POC (Pupuk Organik Cair, contoh: 'Nasa', 'Hantu', 'POC Kotoran Ayam') 5 ml/liter kocor",
        "Panen saat 70–80% buah sudah berwarna merah — jangan tunggu 100% agar buah tidak terlalu matang dan cepat busuk",
        "Segera setelah panen: beri NPK Phonska 10–15 g/tanaman + POC kocor untuk memicu gelombang bunga berikutnya dalam 10–14 hari",
        "Cek label pestisida yang terakhir dipakai — pastikan sudah melewati masa karensa sebelum panen",
      ],
    },
  ],

  jadwalPemupukan: [
    // SEMAI
    {
      waktu: "HSS 0 — Siapkan Media",
      fase: "semai",
      kegiatan: "Persiapan media semai & sterilisasi",
      produk: [
        {
          nama: "Pupuk Kandang Matang",
          dosis: "30–40% dari campuran media",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Trichoderma",
          dosis: "5–10 g/L air siram media",
          cara: "kocor",
          pupukId: "pupuk-trichoderma",
        },
      ],
      catatan:
        "Media: tanah + pupuk kandang + sekam bakar = 2:1:1. Trichoderma mencegah damping-off (rebah kecambah).",
    },
    {
      waktu: "HSS 7",
      fase: "semai",
      kegiatan: "Pupuk starter bibit",
      produk: [
        {
          nama: "NPK 16-16-16 atau MAP",
          dosis: "1–2 g/L air, kocor 3×/minggu",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
      ],
      catatan:
        "Mulai saat kotiledon terbuka sempurna. Konsentrasi encer — bibit masih muda.",
    },
    {
      waktu: "HSS 14–21",
      fase: "semai",
      kegiatan: "Penguatan bibit & hardening",
      produk: [
        {
          nama: "POC (Pupuk Organik Cair)",
          dosis: "2–3 ml/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
        {
          nama: "Fungisida preventif (Mankozeb)",
          dosis: "2 g/L",
          cara: "semprot_daun",
        },
      ],
      catatan:
        "Hardening: kurangi naungan 3–5 hari sebelum pindah tanam agar bibit terbiasa kondisi lapangan.",
    },
    // PERSIAPAN LAHAN
    {
      waktu: "14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar organik & pengapuran",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2–3 kg/m² (20–30 ton/ha)",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Dolomit (jika pH < 6)",
          dosis: "100–200 g/m²",
          cara: "tabur",
          pupukId: "pupuk-dolomit",
        },
      ],
      catatan: "Campurkan merata ke tanah, diamkan 2 minggu.",
    },
    {
      waktu: "7 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar kimia",
      produk: [
        {
          nama: "SP-36",
          dosis: "20–30 g/m² (200–300 kg/ha)",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        {
          nama: "KCl",
          dosis: "15–20 g/m² (150–200 kg/ha)",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "SP-36 dan KCl larut lambat — diberikan awal untuk menyiapkan P dan K jangka panjang.",
    },
    // VEGETATIF
    {
      waktu: "HST 7–10",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Akar & adaptasi",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "5–10 g/tanaman, tabur melingkar",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC / Pupuk Hayati",
          dosis: "5 ml/L, kocor 250 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan: "Jarak tabur 5–7 cm dari batang. Siram setelah pemupukan.",
    },
    {
      waktu: "HST 14–17",
      fase: "vegetatif",
      kegiatan: "Susulan 2 — Pacu vegetatif (N dominan)",
      produk: [
        {
          nama: "Urea",
          dosis: "3–5 g/tanaman, tabur melingkar",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "ZA (alternatif Urea)",
          dosis: "5–7 g/tanaman",
          cara: "tabur",
          pupukId: "pupuk-za",
        },
      ],
      catatan:
        "ZA juga menyumbang Sulfur — baik untuk aroma buah. Berikan bergantian Urea dan ZA setiap 2 minggu.",
    },
    {
      waktu: "HST 21–24",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Foliar mikro & Boron",
      produk: [
        {
          nama: "POC / Pupuk Daun NPK Cair",
          dosis: "3–5 ml/L, semprot merata",
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
      catatan: "Semprot pagi hari (sebelum jam 9 atau setelah jam 4 sore).",
    },
    {
      waktu: "HST 28–30",
      fase: "vegetatif",
      kegiatan: "Susulan 4 — Terakhir dominan N",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "POC / Kompos Cair",
          dosis: "200–300 ml/tanaman, kocor",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Pemupukan terakhir dominan N sebelum beralih ke fase generatif.",
    },
    // GENERATIF
    {
      waktu: "HST 35–40",
      fase: "generatif",
      kegiatan: "Beralih ke generatif — Dorong bunga",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "10 g/tanaman, 1×/minggu",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Boron + Kalsium Nitrat foliar",
          dosis: "Boron 1 g/L + CaNO₃ 2 g/L, 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
      ],
      catatan:
        "Boron kritis untuk mencegah flower drop. Kalsium Nitrat memperkuat dinding sel bunga.",
    },
    {
      waktu: "HST 42–45",
      fase: "generatif",
      kegiatan: "Maksimalkan fruit set",
      produk: [
        {
          nama: "MKP 0-52-34",
          dosis: "2–3 g/L, kocor 250 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-mkp",
        },
        {
          nama: "KCl",
          dosis: "5–7 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "MKP ratio P:K tinggi — sempurna untuk dorong pembungaan dan pembesaran buah awal.",
    },
    {
      waktu: "HST 50–55",
      fase: "generatif",
      kegiatan: "Pembesaran buah — Ca & K",
      produk: [
        {
          nama: "Kalsium Nitrat Ca(NO₃)₂",
          dosis: "3–5 g/L, kocor 300 ml/tanaman",
          cara: "kocor",
        },
        {
          nama: "KCl atau SOP K₂SO₄",
          dosis: "7–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "Kalsium Nitrat 1×/minggu untuk cegah BER (ujung buah busuk). Konsisten hingga mendekati panen.",
    },
    {
      waktu: "HST 56–80 (ulangi tiap 7 hari)",
      fase: "generatif",
      kegiatan: "Rutin generatif — setiap seminggu sekali",
      produk: [
        {
          nama: "NPK tinggi K (12-6-22 atau sejenis)",
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
        "Diulang setiap 7 hari hingga mendekati panen. Sesuaikan jika ada tanda overdosis (daun terbakar).",
    },
    // PRA PANEN
    {
      waktu: "7 hari sebelum panen",
      fase: "pra_panen",
      kegiatan: "Stop N, perkuat kualitas buah",
      produk: [
        {
          nama: "KCl",
          dosis: "10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "POC Kalium tinggi",
          dosis: "5 ml/L, semprot daun",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Hentikan semua N. K fokus untuk warna merah intens dan rasa pedas optimal. Cek karensa pestisida.",
    },
    {
      waktu: "Setelah setiap panen",
      fase: "generatif",
      kegiatan: "Recovery — pacu flush berikutnya",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC / Pupuk Kandang Cair",
          dosis: "300 ml/tanaman, kocor",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Pupuk ini memicu flush (gelombang panen) berikutnya dalam 10–14 hari.",
    },
  ],

  tipsSukses: [
    "Wiwil rutin di bawah cabang V — lakukan saat tunas < 3 cm agar luka cepat kering.",
    "Pasang ajir di HST 14–21 sebelum tanaman mulai miring akibat beban buah.",
    "Rotasi bahan aktif pestisida setiap 2–3 kali semprot untuk cegah resistensi.",
    "Siram pagi hari ke zona akar, bukan ke daun — daun basah malam hari = undangan jamur.",
    "Mulsa plastik hitam-perak direkomendasikan: menekan gulma, jaga kelembaban, usir kutu.",
    "Monitor thrips dan kutu daun sejak awal — serangan ringan jauh lebih mudah dikendalikan.",
    "Setiap flush panen membutuhkan recovery pupuk — tanaman yang dirawat bisa 8–12 kali panen.",
  ],

  penyakitUtama: [
    "pd-antraknosa",
    "pd-layu-fusarium",
    "pd-virus-kuning",
    "pd-thrips",
    "pd-busuk-phytophthora",
  ],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-sp36",
    "pupuk-kcl",
    "pupuk-mkp",
    "pupuk-boron",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
