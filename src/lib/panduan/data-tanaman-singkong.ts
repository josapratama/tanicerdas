import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Singkong / Ubi Kayu & Ubi Jalar
// ============================================================

export const singkong: PanduanTanaman = {
  id: "tanaman-singkong",
  nama: "Singkong / Ubi Kayu",
  namaLatin: "Manihot esculenta Crantz",
  emoji: "🪵",
  kategori: "umbi",
  deskripsiSingkat:
    "Tanaman umbi paling toleran kekeringan dan lahan marginal. Bisa tumbuh di tanah miskin sekalipun. Panen sekali dalam 8–12 bulan dengan hasil umbi yang sangat melimpah.",

  infoUmum: {
    umurPanen: "8–12 bulan (tergantung varietas dan tujuan)",
    jarakTanam: "80 × 100 cm atau 100 × 100 cm",
    kebutuhanAir: "Rendah — sangat toleran kekeringan, tidak boleh tergenang",
    suhuOptimal: "25–35 °C",
    phTanah: "5.5–7.5 (sangat adaptif)",
    mediaTanam:
      "Adaptif hampir semua jenis tanah; gembur dan berpasir untuk umbi paling besar",
  },

  glosarium: [
    {
      istilah: "Stek Batang",
      penjelasan:
        "Metode perbanyakan singkong menggunakan potongan batang (bukan biji). Batang dipotong 20–25 cm, ditanam miring atau tegak. Ini cara paling umum dan mudah untuk menanam singkong.",
    },
    {
      istilah: "Umbi Kayu",
      penjelasan:
        "Akar singkong yang membesar membentuk umbi. Umbi mengandung pati tinggi. Warna daging umbi bisa putih atau kuning (lebih bergizi). Umbi terbentuk dimulai sejak 3 bulan pertama.",
    },
    {
      istilah: "HCN (Asam Sianida)",
      penjelasan:
        "Senyawa alami dalam singkong yang bisa berbahaya jika dikonsumsi mentah dalam jumlah besar. Direbus, dikukus, atau dikeringkan sudah cukup untuk menghilangkan HCN. Varietas manis memiliki HCN jauh lebih rendah.",
    },
    {
      istilah: "Singkong Manis vs Pahit",
      penjelasan:
        "Singkong manis (kadar HCN rendah): cocok dikonsumsi langsung, direbus, atau digoreng. Singkong pahit (kadar HCN tinggi): lebih produktif dan tahan hama, tapi harus diproses dulu — cocok untuk tepung tapioka atau industri.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Penanaman Stek & Pertunasan",
      rentangHari: "HST 1–30",
      emoji: "🌱",
      deskripsi:
        "Stek batang ditanam dan mulai bertunas. Fase pembentukan akar dan tunas awal. Tidak ada persemaian — langsung tanam stek di lahan.",
      ciriFisik: [
        "HST 7–14: tunas daun pertama muncul dari mata tunas di batang",
        "HST 14–21: daun pertama membuka, beberapa tunas aktif",
        "HST 21–30: tanaman 20–30 cm, beberapa cabang awal terlihat",
      ],
      fokusPerawatan: [
        "Pilih stek dari batang singkong yang sudah tua (minimal 8 bulan), sehat, tidak berpenyakit",
        "Potong stek 20–25 cm dengan 5–7 mata tunas, biarkan kering 1–2 hari sebelum tanam",
        "Tanam miring 45° (untuk lahan kering) atau tegak lurus (untuk lahan basah/irigasi)",
        "Siram sekali saat tanam, kemudian biarkan — singkong tidak perlu disiram rutin di awal",
      ],
    },
    {
      nama: "Vegetatif Awal — Pertumbuhan Aktif",
      rentangHari: "HST 30–90",
      emoji: "🌿",
      deskripsi:
        "Tanaman tumbuh cepat. Batang memanjang, daun lebat, dan sistem akar berkembang pesat. Umbi mulai terbentuk sejak fase ini.",
      ciriFisik: [
        "HST 30–60: tanaman tumbuh 50–100 cm, batang mulai berkayu",
        "HST 60–90: tajuk lebat, batang kokoh, percabangan aktif",
        "Di bawah tanah: bakal umbi mulai terlihat",
      ],
      fokusPerawatan: [
        "Lakukan penyiangan gulma di HST 30 dan HST 60 — gulma adalah musuh terbesar singkong muda",
        "Tabur NPK Phonska 15-15-15 di larikan antar tanaman — untuk mendorong pertumbuhan umbi awal",
        "Pembubunan: timbun tanah ke pangkal batang setinggi 10–15 cm di HST 45–60 untuk merangsang umbi lebih banyak",
        "Singkong tidak perlu disiram rutin jika ada hujan — curah hujan 200–300 mm/bulan sudah lebih dari cukup",
      ],
    },
    {
      nama: "Vegetatif Akhir — Penimbunan Pati",
      rentangHari: "HST 90–240",
      emoji: "🌾",
      deskripsi:
        "Umbi terus membesar dan kadar pati meningkat. Daun tetap lebat untuk fotosintesis. Fase paling panjang dan paling menentukan hasil akhir.",
      ciriFisik: [
        "Tanaman tinggi 1.5–3 meter, tajuk rindang",
        "Di musim kemarau: daun mulai gugur (normal — singkong menyimpan pati di umbi)",
        "Batang mengeras dan berkayu semakin kuat",
      ],
      fokusPerawatan: [
        "Pemupukan susulan NPK di HST 90–120 untuk mendorong penimbunan pati maksimal di umbi",
        "Tidak perlu penyiraman khusus — singkong sangat toleran kekeringan",
        "Jika ada hama kutu putih (mealybug) di daun: semprot insektisida sistemik atau larutan sabun insektisida",
        "Biarkan tanaman tumbuh — intervensi berlebihan justru tidak perlu",
      ],
    },
    {
      nama: "Pematangan & Panen",
      rentangHari: "HST 240–360",
      emoji: "🪵",
      deskripsi:
        "Umbi mencapai ukuran maksimal dan kadar pati tertinggi. Panen bisa dilakukan bertahap atau sekaligus tergantung kebutuhan.",
      ciriFisik: [
        "Daun banyak gugur alami menjelang panen",
        "Kulit umbi berwarna coklat dengan bagian dalam putih/kuning",
        "Batang bawah mulai retak-retak (tanda umbi sudah penuh)",
      ],
      fokusPerawatan: [
        "Panen dengan mencabut batang utama atau menggali tanah di sekitarnya — hati-hati agar umbi tidak patah",
        "Singkong 8 bulan: kadar air lebih tinggi, cocok direbus/goreng langsung",
        "Singkong 12 bulan: kadar pati lebih tinggi, cocok untuk tepung tapioka",
        "Simpan umbi di tempat teduh — singkong segar hanya tahan 2–3 hari setelah dicabut",
        "Simpan batang dari tanaman yang paling produktif untuk stek musim berikutnya",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "Persiapan lahan",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar organik",
      produk: [
        {
          nama: "Pupuk Kandang / Kompos",
          dosis: "1–2 ton/ha (10–20 kg/m²)",
          cara: "tabur",
          pupukId: "pupuk-kandang",
        },
        {
          nama: "SP-36",
          dosis: "200–250 kg/ha (20–25 g/m²)",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
        {
          nama: "KCl",
          dosis: "100–150 kg/ha (10–15 g/m²)",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "P dan K diberikan sepenuhnya di awal karena larut lambat. Benamkan ke tanah saat pengolahan lahan.",
    },
    {
      waktu: "HST 30–40",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — N untuk vegetatif awal",
      produk: [
        {
          nama: "Urea",
          dosis: "15–20 g/tanaman, tabur di larikan",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "15 g/tanaman",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
      catatan: "Bersamaan dengan penyiangan pertama dan pembubunan awal.",
    },
    {
      waktu: "HST 90–120",
      fase: "generatif",
      kegiatan: "Susulan 2 — Dorong penimbunan pati",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "20–25 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "KCl",
          dosis: "10–15 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 500 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan:
        "Pemupukan terakhir untuk mendorong pati maksimal di umbi. K tinggi = kadar pati tinggi.",
    },
  ],

  tipsSukses: [
    "Stek dari batang tua (8–12 bulan) menghasilkan tanaman yang lebih vigor dan umbi lebih banyak.",
    "Penyiangan gulma di HST 30 dan 60 adalah pekerjaan terpenting — gulma di awal sangat menghambat pertumbuhan.",
    "Pembubunan di HST 45–60 terbukti meningkatkan jumlah dan ukuran umbi secara signifikan.",
    "Singkong sangat cocok untuk lahan marginal dan kering — tidak perlu irigasi jika ada hujan normal.",
    "Jangan panen sebelum 8 bulan — umbi belum optimal kadar patinya.",
    "Rotasi singkong dengan kacang-kacangan (kedelai/kacang hijau) memperbaiki kesuburan tanah.",
    "Batang singkong bekas panen bisa langsung dijadikan stek untuk penanaman berikutnya.",
  ],

  penyakitUtama: ["pd-klorosis", "pd-rebah-semai"],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-sp36",
    "pupuk-kcl",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};

export const ubiJalar: PanduanTanaman = {
  id: "tanaman-ubi-jalar",
  nama: "Ubi Jalar",
  namaLatin: "Ipomoea batatas (L.) Lam.",
  emoji: "🍠",
  kategori: "umbi",
  deskripsiSingkat:
    "Tanaman umbi dengan nilai gizi sangat tinggi — kaya beta-karoten, vitamin C, dan serat. Siklus pendek (3–4 bulan), cocok untuk dataran rendah hingga menengah, dan sangat toleran kondisi kurang ideal.",

  infoUmum: {
    umurPanen: "3–4 bulan (90–120 HST)",
    jarakTanam: "30 × 75 cm atau 25 × 80 cm",
    kebutuhanAir: "Sedang — toleran kekeringan, tidak suka tergenang",
    suhuOptimal: "21–32 °C",
    phTanah: "5.5–6.8",
    mediaTanam:
      "Tanah gembur berpasir — umbi paling besar di tanah ringan; bisa di tanah merah laterit",
  },

  glosarium: [
    {
      istilah: "Stek Pucuk",
      penjelasan:
        "Metode perbanyakan ubi jalar menggunakan potongan ujung sulur sepanjang 20–25 cm. Jauh lebih mudah berakar dibanding stek batang singkong. Stek langsung ditanam di lahan atau disemai sebentar.",
    },
    {
      istilah: "Pembalikan Sulur",
      penjelasan:
        "Membalik/memindahkan sulur yang sudah berakar di tanah kembali ke permukaan. Dilakukan di HST 45–60 untuk mencegah umbi terbentuk di banyak titik (umbi kecil-kecil) dan mengarahkan energi ke umbi utama.",
    },
    {
      istilah: "Ubi Jalar Oranye vs Ungu vs Putih",
      penjelasan:
        "Oranye (beta-karoten tinggi, paling bergizi): varietas Cilembu, Papua Patippi. Ungu (antosianin tinggi, antioksidan kuat): varietas Antin, Ayamurasaki. Putih: tekstur pulen, kadar pati tinggi.",
    },
    {
      istilah: "Bedengan Tinggi",
      penjelasan:
        "Bedengan ditinggikan 25–35 cm untuk ubi jalar. Tanah yang gembur dan drainase baik membuat umbi bisa membesar tanpa hambatan fisik dan bebas dari genangan.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Penanaman Stek & Perakaran",
      rentangHari: "HST 1–21",
      emoji: "🌱",
      deskripsi:
        "Stek pucuk ditanam langsung di lahan. Akar adventif tumbuh cepat dari buku-buku batang. Fase adaptasi berlangsung singkat.",
      ciriFisik: [
        "HST 3–7: stek sudah mulai berakar di titik-titik buku",
        "HST 10–14: tunas baru tumbuh aktif, sulur mulai memanjang",
        "HST 14–21: tanaman segar dan pertumbuhan aktif dimulai",
      ],
      fokusPerawatan: [
        "Tanam stek pucuk 20–25 cm, benamkan 2–3 buku ke dalam tanah, sisakan 2–3 daun di atas",
        "Siram setelah tanam dan setiap hari selama 7 hari pertama sampai perakaran stabil",
        "Tanam sore hari untuk mengurangi stres panas",
        "Sulam stek mati dalam 5–7 hari",
      ],
    },
    {
      nama: "Vegetatif — Pertumbuhan Sulur",
      rentangHari: "HST 21–60",
      emoji: "🌿",
      deskripsi:
        "Sulur tumbuh cepat menjalar ke segala arah. Umbi mulai terbentuk di bawah tanah sejak HST 30. Fase kritis untuk manajemen sulur.",
      ciriFisik: [
        "HST 21–35: sulur memanjang pesat, daun lebat",
        "HST 35–45: sulur menjalar menutupi bedengan",
        "HST 45–60: di bawah tanah umbi muda sudah terbentuk",
      ],
      fokusPerawatan: [
        "Pembalikan sulur pertama di HST 45–50: angkat sulur yang berakar di tanah, balik ke atas — ini memaksa energi ke umbi utama di pangkal",
        "Tabur Urea + NPK Phonska di larikan antar bedengan untuk mendorong pertumbuhan",
        "Bersihkan gulma sebelum sulur menutupi bedengan (setelah tertutup gulma tidak bisa tumbuh)",
        "Jaga drainase bedengan — genangan air menyebabkan umbi busuk",
      ],
    },
    {
      nama: "Pembesaran Umbi",
      rentangHari: "HST 60–100",
      emoji: "🍠",
      deskripsi:
        "Umbi tumbuh membesar dengan cepat. Kadar gula dan pati meningkat. Tanaman mengurangi pertumbuhan sulur baru dan fokus ke pengisian umbi.",
      ciriFisik: [
        "Sulur tidak lagi tumbuh sepanjang sebelumnya",
        "Daun mulai sedikit menguning dari bawah (normal)",
        "Tanah di sekitar pangkal tanaman terlihat sedikit terangkat oleh umbi",
      ],
      fokusPerawatan: [
        "Pembalikan sulur kedua di HST 60–65 jika sulur sudah berakar lagi",
        "Berikan KCl + NPK Mutiara untuk mendorong ukuran dan kadar gula umbi",
        "Kurangi penyiraman di 2 minggu terakhir sebelum panen — umbi yang sedikit stres air lebih manis",
        "Waspada hama lanas (ulat penggerek umbi) — tanda: lubang-lubang kecil di umbi. Semprot insektisida karbofuran di tanah sekitar tanaman",
      ],
    },
    {
      nama: "Panen",
      rentangHari: "HST 90–120",
      emoji: "✨",
      deskripsi:
        "Umbi siap dipanen. Panen dilakukan dengan mencabut tanaman atau menggali manual. Panen tepat waktu penting — terlambat umbi menjadi berserat.",
      ciriFisik: [
        "Daun menguning dan mulai mengering",
        "Kulit umbi keras dan berwarna sesuai varietas",
        "Tanah di pangkal tanaman terangkat (umbi sudah penuh)",
      ],
      fokusPerawatan: [
        "Gali umbi hati-hati agar tidak lecet — umbi yang lecet cepat busuk",
        "Anginkan umbi di tempat teduh 2–3 hari sebelum disimpan agar kulitnya mengeras",
        "Simpan di tempat kering dan sejuk — ubi jalar bisa tahan 1–2 bulan jika disimpan baik",
        "Simpan stek dari tanaman terbaik untuk penanaman berikutnya",
      ],
    },
  ],

  jadwalPemupukan: [
    {
      waktu: "Persiapan bedengan",
      fase: "vegetatif",
      kegiatan: "Pupuk dasar bedengan",
      produk: [
        {
          nama: "Pupuk Kandang Matang",
          dosis: "1.5–2 kg/m²",
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
      ],
      catatan:
        "Campurkan merata ke tanah bedengan saat membuat bedengan tinggi.",
    },
    {
      waktu: "HST 14–21",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter N",
      produk: [
        {
          nama: "Urea",
          dosis: "3–5 g/tanaman, tabur di larikan",
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
        "N rendah cukup — ubi jalar tidak butuh banyak N, kelebihan N malah membuat sulur lebat tapi umbi kecil.",
    },
    {
      waktu: "HST 45–55",
      fase: "generatif",
      kegiatan: "Susulan 2 — Pacu pembesaran umbi",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "8–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "KCl",
          dosis: "7–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
      ],
      catatan:
        "Bersamaan dengan pembalikan sulur. K tinggi = umbi besar dan manis.",
    },
  ],

  tipsSukses: [
    "Bedengan tinggi 25–35 cm adalah kunci umbi besar — tanah gembur tanpa hambatan fisik.",
    "Pembalikan sulur di HST 45–50 dan 60–65 adalah teknik terpenting untuk memaksimalkan ukuran umbi.",
    "Jangan berikan terlalu banyak Nitrogen — sulur lebat tapi umbi kecil adalah tanda kelebihan N.",
    "Varietas ungu (Antin, Beniazuma) memiliki nilai jual lebih tinggi karena permintaan pasar yang besar.",
    "Kurangi penyiraman 2 minggu sebelum panen untuk meningkatkan kadar gula — ubi jalar lebih manis.",
    "Hama lanas (penggerek umbi) adalah ancaman terbesar — kendalikan sejak awal dengan insektisida tanah.",
    "Anginkan umbi 2–3 hari setelah panen sebelum disimpan agar kulit mengering dan tahan lebih lama.",
  ],

  penyakitUtama: ["pd-klorosis"],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-kcl",
    "pupuk-sp36",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
