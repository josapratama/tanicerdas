import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Tomat
// ============================================================

export const tomat: PanduanTanaman = {
  id: "tanaman-tomat",
  nama: "Tomat",
  namaLatin: "Solanum lycopersicum L.",
  emoji: "🍅",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Tanaman buah populer dengan nilai ekonomi tinggi. Bisa panen berkali-kali dalam satu musim. Membutuhkan sinar matahari penuh dan drainase baik. Cocok ditanam di dataran menengah hingga tinggi.",

  infoUmum: {
    umurPanen: "60–80 HST (sejak pindah tanam)",
    jarakTanam: "50 × 60 cm atau 60 × 70 cm",
    kebutuhanAir: "Sedang — konsisten lembab, hindari tergenang",
    suhuOptimal: "20–28 °C (ideal malam 15–20 °C)",
    phTanah: "6.0–6.8",
    mediaTanam:
      "Tanah gembur + kompos + sekam bakar (2:1:1); drainase wajib sangat baik",
  },

  glosarium: [
    {
      istilah: "Perempelan / Pewiwilan Tunas Air",
      penjelasan:
        "Membuang tunas yang tumbuh di ketiak daun (antara batang utama dan cabang). Tunas air tidak produktif dan mengambil nutrisi. Untuk tomat indeterminate, lakukan setiap 3–5 hari.",
    },
    {
      istilah: "Indeterminate vs Determinate",
      penjelasan:
        "Indeterminate: tanaman terus tumbuh memanjang ke atas dan berbuah sepanjang musim — butuh ajir tinggi dan perempelan rutin. Determinate: berhenti tumbuh setelah mencapai ketinggian tertentu, semua buah matang hampir bersamaan — cocok untuk panen borongan.",
    },
    {
      istilah: "Blossom End Rot (BER)",
      penjelasan:
        "Ujung buah membusuk kehitaman bukan karena jamur, melainkan kekurangan Kalsium atau penyerapan Ca yang terganggu oleh fluktuasi kelembaban. Tangani dengan Kalsium Nitrat kocor rutin.",
    },
    {
      istilah: "Catface",
      penjelasan:
        "Buah tomat berbentuk tidak normal, berkerut atau belah di bagian bawah. Disebabkan suhu dingin saat penyerbukan atau variasi kelembaban ekstrem. Pencegahan: jaga kondisi stabil saat pembungaan.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Persemaian",
      rentangHari: "HSS 1–21",
      emoji: "🌱",
      deskripsi:
        "Tomat membutuhkan waktu persemaian lebih lama dari timun. Bibit yang kuat dan berakar dalam adalah kunci keberhasilan setelah pindah tanam.",
      ciriFisik: [
        "HSS 5–7: kecambah muncul",
        "HSS 10–14: 2 daun sejati pertama",
        "HSS 18–21: 4–6 daun sejati, tinggi 10–15 cm, siap pindah tanam",
      ],
      fokusPerawatan: [
        "Gunakan media steril: tanah + kompos + sekam bakar (1:1:1) untuk mencegah penyakit rebah kecambah",
        "Siram pagi hari, media cukup lembab — tidak becek",
        "Mulai HSS 10: siram NPK 16-16-16 larutan encer 1 g/liter, 3× seminggu",
        "3–5 hari sebelum pindah tanam: kurangi naungan (hardening) agar bibit terbiasa kondisi lapangan",
      ],
    },
    {
      nama: "Pindah Tanam & Adaptasi",
      rentangHari: "HST 1–14",
      emoji: "🌿",
      deskripsi:
        "Bibit pindah ke lahan. Tomat relatif tahan terhadap stres transplanting jika dilakukan sore hari. Akar membangun koneksi baru dengan tanah.",
      ciriFisik: [
        "HST 1–4: mungkin layu siang hari, normal",
        "HST 5–7: tunas baru bermunculan, tanda adaptasi berhasil",
        "HST 10–14: pertumbuhan aktif, batang mulai berkayu di bagian bawah",
      ],
      fokusPerawatan: [
        "Tanam sore hari untuk mengurangi stres — pagi hari terlalu terik",
        "Beri naungan 2–3 hari pertama dengan daun pisang atau paranet 50%",
        "Segera siram setelah tanam dan pasang ajir bambu 120–150 cm sejak awal",
        "Sulam bibit mati dalam 3 hari pertama",
      ],
    },
    {
      nama: "Vegetatif Aktif",
      rentangHari: "HST 14–35",
      emoji: "🌾",
      deskripsi:
        "Pertumbuhan batang dan daun pesat. Sistem akar berkembang dan meluas. Fase membangun kapasitas produksi.",
      ciriFisik: [
        "HST 14–21: batang berkayu, daun majemuk besar",
        "HST 21–28: ruas batang semakin panjang, tunas air mulai aktif tumbuh",
        "HST 28–35: tinggi 50–80 cm, bunga pertama mendekati",
      ],
      fokusPerawatan: [
        "Perempelan wajib dimulai: buang SEMUA tunas yang tumbuh di ketiak daun setiap 3–5 hari — untuk tomat indeterminate ini rutinitas terpenting",
        "Ikat batang ke ajir setiap 15–20 cm menggunakan tali rafia yang diikat angka 8 (longgar)",
        "Tabur NPK Phonska 5–10 g/tanaman melingkar di sekitar pangkal lalu siram",
        "Semprot insektisida preventif (terutama untuk thrips dan kutu daun) setiap 5–7 hari",
      ],
    },
    {
      nama: "Pembungaan",
      rentangHari: "HST 35–55",
      emoji: "🌼",
      deskripsi:
        "Bunga tumbuk (cluster) muncul di setiap ruas. Penyerbukan tomat sangat dibantu getaran — angin atau lebah. Di greenhouse bisa dibantu dengan menggetarkan ajir.",
      ciriFisik: [
        "HST 35–40: tandan bunga pertama (flower truss) muncul",
        "HST 40–50: bunga mekar, berwarna kuning cerah",
        "HST 50–55: buah pertama mulai terbentuk, kecil kehijauan",
      ],
      fokusPerawatan: [
        "Beralih dari N dominan ke K+P dominan: ganti dari Urea ke NPK Mutiara 16-16-16 + KCl",
        "Semprot Boron 1 g/liter setiap 5–7 hari untuk mencegah flower drop",
        "Jaga kelembaban tanah konsisten — fluktuasi kelembaban drastis = bunga rontok",
        "Lanjutkan perempelan tunas air tanpa berhenti — jangan sampe ada tunas air yang tumbuh besar",
      ],
    },
    {
      nama: "Pembesaran Buah",
      rentangHari: "HST 55–70",
      emoji: "🍅",
      deskripsi:
        "Buah berkembang dari hijau kecil hingga mendekati ukuran penuh. Nutrisi K dan Ca sangat penting untuk mencegah BER dan menghasilkan buah besar padat.",
      ciriFisik: [
        "Buah cluster membesar, warna hijau tua mengkilap",
        "Tandan buah berikutnya terus bermunculan di atas",
        "Akar aktif menyerap nutrisi dalam jumlah besar",
      ],
      fokusPerawatan: [
        "Kocor Kalsium Nitrat 3–5 g/liter secara rutin 2× seminggu — pencegahan BER (ujung buah busuk hitam)",
        "Tabur KCl 7–10 g/tanaman untuk membesarkan buah dan meningkatkan rasa",
        "Pangkas daun tua di bagian bawah (yang sudah menguning) untuk sirkulasi udara",
        "Waspada penyakit bercak daun (early/late blight) — semprot fungisida mankozeb jika ada bercak kuning-coklat",
      ],
    },
    {
      nama: "Pematangan & Panen",
      rentangHari: "HST 70–100+",
      emoji: "✨",
      deskripsi:
        "Buah memerah bertahap dari bawah ke atas. Tomat indeterminate bisa terus dipanen dalam beberapa gelombang jika tanaman dirawat.",
      ciriFisik: [
        "Warna berubah: hijau tua → hijau muda → kuning/jingga → merah mengkilap",
        "Buah terasa kenyal dan sedikit lunak saat dipencet",
        "Daun bagian bawah mulai menguning alami",
      ],
      fokusPerawatan: [
        "Panen saat warna merah 70–80% — jangan tunggu merah sempurna di pohon agar tidak cepat busuk",
        "Hentikan pupuk N, berikan hanya KCl + POC untuk mempertahankan produksi",
        "Setelah panen satu tandan, beri NPK Phonska 10–15 g/tanaman untuk recovery dan memicu tandan berikutnya",
        "Cek masa karensa pestisida yang terakhir digunakan sebelum memanen",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "HSS 0 — Persiapan media semai",
      fase: "semai",
      kegiatan: "Media semai steril",
      produk: [
        {
          nama: "Pupuk Kandang Matang",
          dosis: "30% dari campuran media",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "Trichoderma",
          dosis: "5 g/L air siram media",
          cara: "kocor",
          pupukId: "pupuk-trichoderma",
        },
      ],
      catatan:
        "Trichoderma mencegah damping-off (rebah kecambah) yang sering menyerang bibit tomat.",
    },
    {
      waktu: "HSS 10",
      fase: "semai",
      kegiatan: "Pupuk starter bibit",
      produk: [
        {
          nama: "NPK 16-16-16",
          dosis: "1 g/L, kocor 3×/minggu",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
      ],
    },
    {
      waktu: "14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar organik & pengapuran",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2–3 kg/m²",
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
      catatan: "Campurkan merata ke tanah, diamkan minimal 2 minggu.",
    },
    {
      waktu: "7 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar kimia",
      produk: [
        {
          nama: "SP-36",
          dosis: "20–25 g/m²",
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
      kegiatan: "Susulan 1 — Starter akar",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "5–8 g/tanaman, tabur melingkar",
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
      kegiatan: "Susulan 2 — Pacu batang (N dominan)",
      produk: [
        {
          nama: "Urea",
          dosis: "3–5 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "NPK Phonska",
          dosis: "5 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan:
        "N aktif untuk membangun batang dan daun yang kuat sebelum fase generatif.",
    },
    {
      waktu: "HST 21–24",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Foliar mikro",
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
      catatan: "Mulai tambahkan Kalsium Nitrat sejak dini untuk mencegah BER.",
    },
    {
      waktu: "HST 35–50",
      fase: "generatif",
      kegiatan: "Fase bunga — Boron & Kalsium rutin",
      produk: [
        {
          nama: "Boron foliar",
          dosis: "1 g/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "3 g/L, kocor 250 ml/tanaman, 2×/minggu",
          cara: "kocor",
        },
        {
          nama: "MKP 0-52-34",
          dosis: "2 g/L, kocor bergantian",
          cara: "kocor",
          pupukId: "pupuk-mkp",
        },
      ],
      catatan: "Boron mencegah flower drop. Kalsium mencegah BER sejak dini.",
    },
    {
      waktu: "HST 50–75 (tiap 7 hari)",
      fase: "generatif",
      kegiatan: "Pembesaran buah — K & Ca rutin",
      produk: [
        {
          nama: "KCl",
          dosis: "7–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "3–5 g/L, kocor 300 ml/tanaman",
          cara: "kocor",
        },
        {
          nama: "POC foliar",
          dosis: "5 ml/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Diulang setiap 7 hari. Konsistensi adalah kunci buah besar bebas BER.",
    },
    {
      waktu: "7 hari sebelum panen",
      fase: "pra_panen",
      kegiatan: "Stop N, perkuat warna & rasa",
      produk: [
        {
          nama: "KCl",
          dosis: "10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "MKP foliar",
          dosis: "2 g/L, semprot 2×",
          cara: "semprot_daun",
          pupukId: "pupuk-mkp",
        },
      ],
      catatan:
        "Hentikan semua N. Kalium untuk warna merah intens dan rasa manis-asam optimal.",
    },
    {
      waktu: "Setelah setiap tandan panen",
      fase: "generatif",
      kegiatan: "Recovery — pacu tandan berikutnya",
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
      catatan:
        "Pupuk recovery memicu tandan bunga berikutnya dalam 10–14 hari.",
    },
  ],

  tipsSukses: [
    "Perempelan tunas air adalah rutinitas terpenting untuk tomat indeterminate — lakukan setiap 3–5 hari.",
    "Pasang ajir tinggi (120–150 cm) sejak awal sebelum tanaman perlu disangga.",
    "Tanam di sore hari untuk meminimalkan stres transplanting.",
    "Kalsium Nitrat kocor rutin 2× seminggu adalah perlindungan terbaik dari BER.",
    "Jangan siram ke daun — daun basah malam hari mengundang penyakit early blight dan late blight.",
    "Rotasi bahan aktif fungisida setiap 2–3 aplikasi untuk mencegah resistensi.",
    "Tomat tumbuh optimal di dataran 200–1000 mdpl — di dataran rendah panas, pilih varietas toleran panas.",
  ],

  penyakitUtama: [
    "pd-layu-fusarium",
    "pd-layu-bakteri",
    "pd-busuk-phytophthora",
    "pd-klorosis",
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
