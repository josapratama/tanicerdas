import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Timun / Mentimun
// Istilah umum (HSS, HST, N/P/K, dll) → lihat Ilmu Dasar
// ============================================================

export const timun: PanduanTanaman = {
  id: "tanaman-timun",
  nama: "Timun / Mentimun",
  namaLatin: "Cucumis sativus L.",
  emoji: "🥒",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Sayuran buah paling mudah dan cepat panennya. Bisa dipanen mulai HST 35–45 dan terus berbuah hingga 3 bulan. Cocok untuk pemula dan lahan sempit.",

  infoUmum: {
    umurPanen: "35–45 HST (panen pertama), hingga 90 HST total",
    jarakTanam: "50 × 60 cm atau 40 × 60 cm (merambat vertikal)",
    kebutuhanAir: "Tinggi — konsisten lembab, tidak boleh kekeringan",
    suhuOptimal: "22–30 °C",
    phTanah: "5.8–6.8",
    mediaTanam: "Tanah gembur kaya organik + kompos; sensitif genangan",
  },

  glosarium: [
    {
      istilah: "Partenokarpi",
      penjelasan:
        "Kemampuan beberapa varietas timun membentuk buah tanpa penyerbukan. Varietas partenokarpi tidak butuh lebah dan lebih mudah ditanam di dalam greenhouse/naungan.",
    },
    {
      istilah: "Topping",
      penjelasan:
        "Memotong pucuk sulur utama di titik tertentu untuk memaksa tumbuhnya cabang lateral yang lebih banyak dan produktif. Pada timun merambat vertikal: topping saat mencapai ujung tali/kawat.",
    },
    {
      istilah: "Node Produktif",
      penjelasan:
        "Ruas (buku) batang tempat buah dan bunga tumbuh. Timun mulai berbuah di node ke-4 ke atas. Node 1–3 biasanya dibuang bunganya untuk membangun tanaman lebih dulu.",
    },
    {
      istilah: "Bitter Cucumber",
      penjelasan:
        "Timun terasa pahit akibat kandungan cucurbitacin tinggi. Penyebab: stres air, suhu ekstrem, atau kekurangan nutrisi. Pencegahan: jaga kelembaban konsisten dan pemupukan teratur.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Persemaian",
      rentangHari: "HSS 1–7",
      emoji: "🌱",
      deskripsi:
        "Timun berkecambah sangat cepat (2–4 hari). Biasanya bisa langsung tanam biji tanpa semai jika kondisi lapangan baik.",
      ciriFisik: [
        "HSS 2–4: kecambah muncul, pertumbuhan cepat",
        "HSS 5–7: kotiledon terbuka, daun sejati pertama muncul",
      ],
      fokusPerawatan: [
        "Bisa semai di tray ATAU langsung tanam 2 biji per lubang di lahan — pilih cara paling mudah",
        "Jika tanam langsung: setelah tumbuh, cabut dan sisakan 1 bibit yang paling kuat per lubang",
        "Gunakan media ringan (tanah + kompos = 1:1), tidak terlalu basah agar kecambah tidak busuk",
      ],
    },
    {
      nama: "Vegetatif Awal",
      rentangHari: "HST 1–20",
      emoji: "🌿",
      deskripsi:
        "Sulur tumbuh cepat dan mulai merambat. Sistem akar berkembang aktif. Fase ini menentukan kapasitas tanaman untuk berbuah.",
      ciriFisik: [
        "HST 5–10: sulur mulai merambat, daun membesar",
        "HST 10–15: node ke-4 sudah terlihat",
        "HST 15–20: sulur mencapai 50–80 cm, bunga jantan pertama muncul",
      ],
      fokusPerawatan: [
        "Tabur NPK Phonska 5 g/tanaman melingkar di sekitar pangkal lalu siram — mendorong pertumbuhan sulur yang cepat",
        "Pasang ajir bambu atau bentangkan tali vertikal sejak awal — timun harus merambat ke atas, bukan melata di tanah",
        "Buang bunga yang muncul di ruas 1–3 (paling bawah) — biarkan tanaman tumbuh dulu sebelum berbuah",
        "Ikat dan arahkan sulur ke tali setiap 2–3 hari agar rapi dan tidak kusut",
      ],
    },
    {
      nama: "Pembungaan & Awal Berbuah",
      rentangHari: "HST 20–35",
      emoji: "🌸",
      deskripsi:
        "Bunga jantan dan betina muncul bergantian. Timun mulai berbuah pertama kali. Penyerbukan alami cukup untuk varietas biasa.",
      ciriFisik: [
        "HST 20–25: bunga betina pertama (dengan bakal buah di pangkal)",
        "HST 25–30: buah pertama mulai terbentuk",
        "HST 30–35: buah pertama mendekati ukuran panen",
      ],
      fokusPerawatan: [
        "Beralih ke NPK Mutiara 16-16-16 + KCl: tabur 5–8 g/tanaman + 5 g KCl — untuk mendukung pembentukan buah bukan daun",
        "Periksa daun: jika terlalu rimbun dan saling menaungi, pangkas beberapa daun tua untuk sirkulasi udara",
        "Jaga penyiraman sangat konsisten — jangan sampai layu bahkan sebentar, karena kekeringan = timun pahit",
        "Periksa bawah daun secara rutin — kutu daun dan tungau bisa membawa virus yang merusak tanaman",
      ],
    },
    {
      nama: "Produksi Aktif",
      rentangHari: "HST 35–75",
      emoji: "🥒",
      deskripsi:
        "Masa panen bergulir. Timun bisa dipanen setiap 2–3 hari. Semakin rajin panen = tanaman semakin banyak berbuah.",
      ciriFisik: [
        "Buah terus muncul di seluruh batang",
        "Daun bagian bawah mulai menguning secara alami (normal — daun tua)",
        "Akar tetap aktif menyerap nutrisi",
      ],
      fokusPerawatan: [
        "Panen setiap 2–3 hari tanpa jeda — timun yang terlambat dipanen akan menua dan menghambat buah baru terbentuk",
        "Kocor NPK Phonska 5–10 g/tanaman atau POC (Pupuk Organik Cair) 5 ml/liter setiap minggu — timun yang terus berbuah butuh nutrisi terus-menerus",
        "Pangkas dan buang daun sakit (bercak atau menguning tidak normal) serta daun tua di bagian bawah",
        "Topping: potong pucuk sulur saat sudah mencapai ujung tali/kawat agar tumbuh cabang baru yang produktif",
      ],
    },
    {
      nama: "Akhir Masa Tanam",
      rentangHari: "HST 75–90",
      emoji: "⏳",
      deskripsi:
        "Produksi mulai menurun, daun banyak yang kuning. Timun tidak memiliki 'recovery' seperti cabai. Biasanya selesai musim dan diganti tanaman baru.",
      ciriFisik: [
        "Produksi buah berkurang signifikan",
        "Daun menguning dari bawah ke atas",
        "Batang mulai mengering",
      ],
      fokusPerawatan: [
        "Hitung produktivitas: jika satu panen sudah tidak worth biaya pupuk dan tenaga, pertimbangkan untuk bongkar dan ganti tanaman baru",
        "Cukup siram POC (Pupuk Organik Cair) 5 ml/liter saja — tidak perlu pupuk kimia lagi di fase ini",
        "Mulai persiapkan lahan untuk rotasi tanaman berikutnya",
      ],
    },
  ],

  jadwalPemupukan: [
    // PERSIAPAN LAHAN
    {
      waktu: "7–14 hari sebelum tanam",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "2 kg/m²",
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
          dosis: "10–15 g/m²",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "NPK Phonska",
          dosis: "15 g/m²",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan:
        "Benam merata di larikan tanam. Timun tumbuh cepat — pupuk dasar yang baik sangat membantu.",
    },
    // VEGETATIF
    {
      waktu: "HST 7–10",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter",
      produk: [
        {
          nama: "NPK 16-16-16",
          dosis: "3–5 g/tanaman, kocor 300 ml",
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
      kegiatan: "Susulan 2 — Pacu pertumbuhan",
      produk: [
        {
          nama: "Urea",
          dosis: "3 g/tanaman, tabur melingkar",
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
      catatan: "N aktif untuk pertumbuhan sulur cepat sebelum berbuah.",
    },
    {
      waktu: "HST 18–20",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Foliar pra-bunga",
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
      catatan: "Boron untuk persiapan pembungaan dan mencegah buah cacat.",
    },
    // GENERATIF — mulai berbuah
    {
      waktu: "HST 22–25",
      fase: "generatif",
      kegiatan: "Mulai berbuah — Beralih ke K dominan",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "5–8 g/tanaman, tabur atau 2 g/L kocor",
          cara: "kocor",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "KCl",
          dosis: "5 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        { nama: "Kalsium Nitrat", dosis: "2 g/L, kocor 200 ml", cara: "kocor" },
      ],
      catatan:
        "Saat bunga betina pertama muncul, kurangi N, tingkatkan K dan Ca.",
    },
    {
      waktu: "HST 28–35",
      fase: "generatif",
      kegiatan: "Awal panen — Rutin K dan Ca",
      produk: [
        {
          nama: "NPK tinggi K",
          dosis: "5–8 g/tanaman, tabur, 1×/minggu",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Kalsium Nitrat",
          dosis: "2–3 g/L, kocor 250 ml, 2×/minggu",
          cara: "kocor",
        },
        {
          nama: "POC foliar",
          dosis: "3 ml/L, semprot 2×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Timun harus dipupuk rutin karena berbuah terus. Jangan sampai nutrisi habis di tengah masa produksi.",
    },
    {
      waktu: "HST 35–70 (tiap 7 hari)",
      fase: "generatif",
      kegiatan: "Produksi aktif — Pupuk rutin mingguan",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "5–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "POC / Kompos Cair",
          dosis: "5 ml/L, kocor 300 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
        {
          nama: "MKP foliar",
          dosis: "1–2 g/L, semprot 1×/minggu",
          cara: "semprot_daun",
          pupukId: "pupuk-mkp",
        },
      ],
      catatan:
        "Pupuk rutin SETIAP MINGGU selama masa produksi. Timun yang berhenti dipupuk akan langsung turun produksinya.",
    },
    // PRA AKHIR
    {
      waktu: "HST 70–80",
      fase: "pra_panen",
      kegiatan: "Pertahankan produksi akhir",
      produk: [
        {
          nama: "POC / Kompos Cair saja",
          dosis: "5 ml/L, kocor 300 ml, 2×/minggu",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Fase akhir — kurangi pupuk kimia, cukup organik untuk mempertahankan produksi yang masih ada.",
    },
  ],

  tipsSukses: [
    "Panen setiap 2–3 hari — timun yang tidak dipanen akan menua di pohon dan menghambat buah baru tumbuh.",
    "Merambat vertikal jauh lebih efisien: sirkulasi udara baik, panen mudah, buah tidak menyentuh tanah.",
    "Jaga kelembaban tanah sangat konsisten — kekeringan singkat sudah bisa membuat timun pahit (cucurbitacin).",
    "Pupuk rutin mingguan adalah wajib selama masa produksi — timun sangat responsif terhadap pupuk.",
    "Pangkas daun tua di bagian bawah untuk sirkulasi udara dan mencegah jamur.",
    "Varietas hibrida umumnya lebih produktif dan tahan penyakit — pilih bibit bersertifikat.",
    "Timun cocok untuk rotasi setelah cabai atau tomat karena kebutuhan hara berbeda.",
  ],

  penyakitUtama: [],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-kcl",
    "pupuk-mkp",
    "pupuk-boron",
    "pupuk-sp36",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
