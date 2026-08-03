import type { PupukData } from "./types";

export const dataPupukKimia: PupukData[] = [
  {
    id: "pupuk-urea",
    nama: "Pupuk Urea",
    singkatan: "CO(NH₂)₂",
    merekDagang: "Urea Petrokimia Gresik, Urea Pupuk Kaltim",
    kategori: "kimia_makro",
    kandungan: "N 46%",
    deskripsiSingkat:
      "Pupuk nitrogen paling murah dan paling tinggi kadar N-nya — bikin daun hijau lebat dan tanaman tumbuh cepat.",
    fungsi: [
      "Sumber nitrogen utama untuk pertumbuhan vegetatif",
      "Memacu pembelahan sel dan pembentukan daun",
      "Membuat daun hijau segar dan lebat",
    ],
    caraPakai:
      "Tabur di sekitar tanaman (jangan mengenai daun), lalu siram. Bisa dicampurkan dengan air irigasi.",
    dosis: "150–300 kg per hektar (atau 1–2 sendok teh per tanaman)",
    waktuPakai: "Fase vegetatif awal (2–4 minggu setelah tanam)",
    kelebihan: [
      "Kandungan N tertinggi, paling ekonomis per kg hara",
      "Larut cepat di air",
    ],
    kekurangan: [
      "Bisa membakar akar jika berlebihan",
      "Mudah menguap jika tidak segera disiram",
      "Tidak mengandung P dan K",
    ],
    harga: "Rp 2.000–3.000/kg (subsidi Rp 2.250/kg)",
    emoji: "🔵",
    tags: ["urea", "nitrogen", "n", "vegetatif", "daun"],
  },
  {
    id: "pupuk-sp36",
    nama: "Pupuk SP-36",
    singkatan: "SP-36",
    merekDagang: "SP-36 Petrokimia Gresik",
    kategori: "kimia_makro",
    kandungan: "P₂O₅ 36%",
    deskripsiSingkat:
      "Pupuk fosfat untuk memperkuat akar dan merangsang pembungaan serta pembuahan tanaman.",
    fungsi: [
      "Merangsang pertumbuhan dan perkembangan akar yang kuat",
      "Mempercepat pembungaan dan pembuahan",
      "Meningkatkan kualitas dan bobot buah/biji",
      "Menguatkan batang tanaman",
    ],
    caraPakai:
      "Campurkan dengan tanah di lubang tanam saat persiapan lahan. Bisa juga ditabur merata.",
    dosis: "100–200 kg per hektar",
    waktuPakai:
      "Saat persiapan lahan atau paling lambat saat tanam (pupuk dasar)",
    kelebihan: [
      "Larut lambat — hara tersedia lama",
      "Tidak menguap, efisiensi tinggi",
    ],
    kekurangan: [
      "Tidak mengandung N dan K",
      "Penyerapan optimal hanya di pH tanah 6–7",
    ],
    harga: "Rp 2.500–4.000/kg",
    emoji: "⚫",
    tags: ["sp36", "fosfat", "p", "akar", "buah"],
  },
  {
    id: "pupuk-kcl",
    nama: "Pupuk KCl (Kalium Klorida)",
    singkatan: "KCl",
    merekDagang: "KCl Impor (Rusia/Kanada), tersedia umum",
    kategori: "kimia_makro",
    kandungan: "K₂O 60%",
    deskripsiSingkat:
      "Pupuk kalium untuk meningkatkan kualitas buah, memperkuat ketahanan tanaman, dan memperbaiki rasa buah.",
    fungsi: [
      "Meningkatkan kualitas dan ukuran buah",
      "Memperkuat dinding sel (tahan hama dan penyakit)",
      "Memperbaiki warna, rasa, dan aroma buah",
      "Meningkatkan ketahanan tanaman terhadap kekeringan",
    ],
    caraPakai: "Tabur di sekeliling tanaman atau larutkan dan siramkan",
    dosis: "100–150 kg per hektar",
    waktuPakai: "Fase generatif (pembungaan hingga pembuahan)",
    kelebihan: ["Kandungan K tertinggi dan termurah", "Larut cepat di air"],
    kekurangan: [
      "Kandungan klorida bisa berbahaya untuk beberapa tanaman sensitif (tembakau)",
      "Tidak mengandung N dan P",
    ],
    harga: "Rp 7.000–12.000/kg",
    emoji: "🟤",
    tags: ["kcl", "kalium", "k", "buah", "kualitas"],
  },
  {
    id: "pupuk-npk-mutiara",
    nama: "NPK Mutiara 16-16-16",
    singkatan: "NPK 16-16-16",
    merekDagang: "Yaramila / Mutiara (Yara International)",
    kategori: "kimia_makro",
    kandungan: "N 16%, P₂O₅ 16%, K₂O 16%",
    deskripsiSingkat:
      "Pupuk NPK premium paling populer di Indonesia — satu pupuk untuk semua kebutuhan N, P, K dengan formula seimbang.",
    fungsi: [
      "Menyediakan tiga hara makro sekaligus (N, P, K) dalam satu butiran",
      "Mendukung pertumbuhan vegetatif dan generatif",
      "Praktis untuk semua fase pertumbuhan",
    ],
    caraPakai:
      "Tabur di sekitar tanaman atau larutkan untuk kocor/fertigasi. Bisa dikubur di lubang di sisi tanaman.",
    dosis: "300–500 kg per hektar (5–10 gram per tanaman per aplikasi)",
    waktuPakai: "Bisa sepanjang siklus tanam — dari tanam hingga pra-panen",
    kelebihan: [
      "Formula seimbang, cocok untuk semua tanaman dan semua fase",
      "Butiran slow-release — tidak mudah menguap atau tercuci",
      "Merek premium dengan kualitas terjamin",
    ],
    kekurangan: [
      "Harga lebih mahal dari pupuk tunggal",
      "Tidak ideal jika hanya butuh satu unsur saja",
    ],
    harga: "Rp 8.000–15.000/kg",
    emoji: "🟢",
    tags: ["npk", "mutiara", "yaramila", "16-16-16", "majemuk"],
  },
  {
    id: "pupuk-npk-phonska",
    nama: "NPK Phonska 15-15-15",
    singkatan: "NPK 15-15-15",
    merekDagang: "Phonska (Petrokimia Gresik) — pupuk bersubsidi",
    kategori: "kimia_makro",
    kandungan: "N 15%, P₂O₅ 15%, K₂O 15%, S 10%",
    deskripsiSingkat:
      "Pupuk NPK bersubsidi pemerintah yang paling mudah ditemukan di seluruh Indonesia — harga terjangkau dengan kandungan lengkap.",
    fungsi: [
      "Menyediakan N, P, K sekaligus dalam satu pupuk",
      "Kandungan sulfur (S) membantu tanaman aromatik seperti bawang dan cabai",
      "Cocok sebagai pupuk dasar maupun susulan",
    ],
    caraPakai:
      "Tabur merata di lahan atau di sekitar tanaman, siram setelah aplikasi",
    dosis: "300–500 kg per hektar",
    waktuPakai: "Pupuk dasar dan susulan pertama (3–4 MST)",
    kelebihan: [
      "Harga sangat terjangkau karena bersubsidi",
      "Mengandung sulfur tambahan",
      "Mudah ditemukan di seluruh Indonesia",
    ],
    kekurangan: [
      "Hanya bisa dibeli dengan kartu tani (untuk subsidi)",
      "Stok sering terbatas di puncak musim tanam",
    ],
    harga: "Rp 2.300/kg (subsidi) atau Rp 5.000–8.000/kg (non-subsidi)",
    emoji: "🟣",
    tags: ["phonska", "npk", "subsidi", "petrokimia", "15-15-15"],
  },
  {
    id: "pupuk-za",
    nama: "Pupuk ZA (Zwavel Ammonium)",
    singkatan: "ZA",
    merekDagang: "ZA Petrokimia Gresik",
    kategori: "kimia_makro",
    kandungan: "N 21%, S (Sulfur) 24%",
    deskripsiSingkat:
      "Pupuk nitrogen + sulfur yang cocok untuk tanaman yang butuh belerang seperti bawang merah, bawang putih, dan cabai.",
    fungsi: [
      "Sumber nitrogen untuk pertumbuhan daun dan batang",
      "Sumber sulfur untuk pembentukan protein, klorofil, dan senyawa aromatik",
      "Khusus cocok untuk tanaman yang butuh sulfur tinggi",
    ],
    caraPakai: "Tabur di sekitar perakaran dan siram, atau larutkan",
    dosis: "150–250 kg per hektar",
    waktuPakai: "Fase vegetatif, 3–4 minggu setelah tanam",
    kelebihan: [
      "Mengandung sulfur yang dibutuhkan tanaman aromatik (bawang, cabai)",
      "Lebih lambat menguap dibanding urea",
    ],
    kekurangan: [
      "Kandungan N lebih rendah dari urea",
      "Aplikasi berlebihan bisa membuat tanah lebih masam",
    ],
    harga: "Rp 2.500–4.000/kg",
    emoji: "🟡",
    tags: ["za", "sulfur", "nitrogen", "bawang", "cabai"],
  },
  {
    id: "pupuk-dolomit",
    nama: "Kapur Dolomit",
    singkatan: "CaMg(CO₃)₂",
    merekDagang: "Dolomit Pertanian (tersedia umum)",
    kategori: "pembenah_tanah",
    kandungan: "Ca 20–22%, Mg 11–13%",
    deskripsiSingkat:
      "Kapur pertanian untuk menaikkan pH tanah yang terlalu masam sekaligus menyuplai kalsium dan magnesium.",
    fungsi: [
      "Menaikkan pH tanah yang terlalu masam (di bawah 6)",
      "Sumber kalsium untuk memperkuat dinding sel tanaman",
      "Sumber magnesium untuk pembentukan klorofil",
      "Memperbaiki struktur tanah liat agar lebih gembur",
    ],
    caraPakai:
      "Sebarkan merata di lahan dan bajak/cangkul campurkan ke dalam tanah sedalam 15–20 cm",
    dosis: "1–3 ton per hektar tergantung tingkat keasaman tanah",
    waktuPakai: "2–4 minggu sebelum tanam agar bereaksi dengan tanah",
    kelebihan: [
      "Memperbaiki pH sekaligus menyuplai Ca dan Mg",
      "Aman, alami, dan murah",
    ],
    kekurangan: [
      "Perlu waktu 2–4 minggu untuk bereaksi",
      "Penggunaan berlebih bisa menaikkan pH terlalu tinggi",
    ],
    harga: "Rp 800–2.000/kg",
    emoji: "⬜",
    tags: ["dolomit", "kapur", "ph", "kalsium", "magnesium"],
  },
  {
    id: "pupuk-kieserit",
    nama: "Kieserit (MgSO₄)",
    singkatan: "MgSO₄",
    merekDagang: "Kieserit BASF, Kieserit K+S",
    kategori: "kimia_mikro",
    kandungan: "Mg 17.5%, S 22%",
    deskripsiSingkat:
      "Pupuk magnesium untuk mengatasi daun kuning di antara tulang daun — tanda kekurangan Mg yang sering salah didiagnosis.",
    fungsi: [
      "Sumber magnesium untuk pembentukan klorofil (zat hijau daun)",
      "Menghijaukan daun yang menguning akibat klorosis Mg",
      "Meningkatkan proses fotosintesis",
      "Membantu penyerapan fosfor",
    ],
    caraPakai: "Taburkan di sekitar perakaran atau larutkan dan siramkan",
    dosis: "50–100 kg per hektar",
    waktuPakai: "Saat gejala klorosis muncul atau preventif di fase vegetatif",
    kelebihan: [
      "Larut cepat, efek perbaikan warna daun terlihat dalam 7–10 hari",
      "Mengandung sulfur tambahan",
    ],
    kekurangan: ["Harga relatif lebih mahal dari pupuk makro"],
    harga: "Rp 3.000–6.000/kg",
    emoji: "🟩",
    tags: ["kieserit", "magnesium", "mg", "klorosis", "daun kuning"],
  },
  {
    id: "pupuk-boron",
    nama: "Pupuk Boron (Boraks / Boric Acid)",
    merekDagang: "Boron Fertibor, Borax Pertanian",
    kategori: "kimia_mikro",
    kandungan: "B (Boron) 11–17%",
    deskripsiSingkat:
      "Pupuk mikro boron untuk mencegah bunga rontok dan meningkatkan kualitas penyerbukan — dosis kecil tapi efeknya besar.",
    fungsi: [
      "Memperlancar transportasi gula ke buah",
      "Meningkatkan proses penyerbukan dan pembentukan biji",
      "Mencegah buah dan bunga rontok dini",
    ],
    caraPakai:
      "Larutkan dan semprot ke daun (foliar), encerkan 1–2 gram per liter air",
    dosis: "1–2 kg per hektar — HATI-HATI: overdosis meracuni tanaman",
    waktuPakai: "Saat muncul bunga pertama dan 2 minggu setelahnya",
    kelebihan: [
      "Sangat efektif mencegah buah rontok prematur",
      "Dosis kecil sudah memberikan efek signifikan",
    ],
    kekurangan: [
      "Overdosis bersifat racun bagi tanaman",
      "Harus ditakar dengan presisi, tidak bisa dikira-kira",
    ],
    harga: "Rp 15.000–30.000/kg",
    emoji: "🔬",
    tags: ["boron", "boraks", "bunga", "rontok", "mikro"],
  },
  {
    id: "asam-fosfat",
    nama: "Pupuk Fosfat / PhosGreen",
    merekDagang: "PhosGreen, Rock Phosphate, Pupuk Fosfat Alam",
    kategori: "kimia_makro",
    kandungan: "P₂O₅ 20–30%, Ca, Mg dari batuan fosfat alami",
    deskripsiSingkat:
      "Pupuk fosfat dari batuan alam yang ramah lingkungan — lebih lambat tersedia tapi aman untuk tanah organik.",
    fungsi: [
      "Sumber fosfor jangka panjang dari batuan fosfat alami",
      "Merangsang pertumbuhan akar",
      "Memperbaiki struktur tanah",
      "Cocok untuk sistem pertanian organik",
    ],
    caraPakai:
      "Campurkan dengan tanah saat pengolahan lahan, dikombinasikan dengan asam organik atau EM4 untuk mempercepat pelarutan",
    dosis: "200–500 kg per hektar",
    waktuPakai: "Saat persiapan lahan (pupuk dasar)",
    kelebihan: [
      "Ramah lingkungan, tidak mencemari tanah",
      "Harga lebih murah dari SP-36",
      "Cocok untuk pertanian organik",
    ],
    kekurangan: [
      "Pelarutan lambat, efek tidak seinstant SP-36",
      "Kurang efektif di pH tanah basa (> 7)",
    ],
    harga: "Rp 1.500–3.000/kg",
    emoji: "🪨",
    tags: ["fosfat", "batuan", "organik", "akar", "slow release"],
  },
  {
    id: "santagrow-map",
    nama: "SantaGrow MAP (Mono Ammonium Phosphate)",
    singkatan: "MAP 12-61-0",
    merekDagang: "SantaGrow MAP, MAP Haifa, MAP Fertigasi",
    kategori: "kimia_makro",
    kandungan: "N 12%, P₂O₅ 61%",
    deskripsiSingkat:
      "Pupuk fertigasi dengan fosfor sangat tinggi — dipakai melalui tetes air (drip) untuk mendorong akar dan vigor bibit.",
    fungsi: [
      "Sumber fosfor tertinggi untuk stimulasi akar",
      "Cocok untuk fertigasi (pupuk lewat air irigasi) dan hidroponik",
      "Mendorong vigor bibit dan perakaran di awal tanam",
      "Meningkatkan ketersediaan P di zona akar",
    ],
    caraPakai:
      "Larutkan dalam air, masukkan ke sistem drip irigasi atau kocor langsung ke zona akar",
    dosis: "2–5 gram per liter larutan fertigasi",
    waktuPakai: "Fase awal vegetatif (0–3 MST) untuk dorong akar",
    kelebihan: [
      "Kandungan P tertinggi di antara semua pupuk tunggal",
      "Larut sempurna dalam air, cocok untuk fertigasi dan hidroponik",
      "Mengasamkan sedikit pH zona akar — menguntungkan di tanah basa",
    ],
    kekurangan: [
      "Harga mahal dibanding SP-36",
      "Hanya efektif via irigasi, tidak cocok untuk tabur",
    ],
    harga: "Rp 15.000–25.000/kg",
    emoji: "💎",
    tags: ["map", "fertigasi", "drip", "hidroponik", "akar", "fosfat"],
  },
  {
    id: "npk-grow-more",
    nama: "NPK Grow More (Berbagai Formula)",
    merekDagang: "Grow More (USA) — Root, Bloom, Foliar formula",
    kategori: "kimia_makro",
    kandungan:
      "Tergantung formula: 10-55-10 (root), 6-30-30 (bloom), 20-20-20 (foliar)",
    deskripsiSingkat:
      "Pupuk premium asal Amerika dengan berbagai formula khusus untuk setiap fase — root untuk akar, bloom untuk bunga/buah, foliar untuk semprot daun.",
    fungsi: [
      "Formula Root: mendorong pertumbuhan akar yang kuat di awal tanam",
      "Formula Bloom: merangsang pembungaan dan kualitas buah",
      "Formula Foliar: penyempurnaan nutrisi lengkap melalui daun",
    ],
    caraPakai:
      "Larutkan dalam air sesuai petunjuk kemasan, bisa untuk kocor atau semprot daun",
    dosis: "1–2 gram per liter air",
    waktuPakai:
      "Root: 0–3 MST; Bloom: saat mulai berbunga; Foliar: sepanjang musim",
    kelebihan: [
      "Kualitas premium, larut sempurna tanpa residu",
      "Formula spesifik untuk setiap kebutuhan tanaman",
      "Cocok untuk tanaman hias, buah, dan sayuran premium",
    ],
    kekurangan: [
      "Harga paling mahal di antara pupuk NPK",
      "Perlu tahu formula mana yang dipakai kapan",
    ],
    harga: "Rp 50.000–150.000/kg",
    emoji: "⭐",
    tags: ["grow more", "npk", "premium", "root", "bloom", "foliar"],
  },
  {
    id: "pupuk-kalsium-nitrat",
    nama: "Kalsium Nitrat Ca(NO₃)₂",
    singkatan: "Ca(NO₃)₂",
    merekDagang: "YaraLiva Calcinit, Calcium Nitrate Haifa",
    kategori: "kimia_mikro",
    kandungan: "Ca 18–19%, N 15.5% (sebagai nitrat)",
    deskripsiSingkat:
      "Pupuk kalsium + nitrogen yang sangat penting untuk kualitas buah — mencegah busuk ujung buah pada tomat, paprika, dan cabai.",
    fungsi: [
      "Mencegah Blossom End Rot (busuk ujung buah) pada tomat, paprika, cabai",
      "Memperkuat dinding sel buah agar tahan benturan dan tidak mudah retak",
      "Sumber nitrogen dalam bentuk nitrat yang cepat diserap",
      "Meningkatkan daya simpan buah pasca panen",
    ],
    caraPakai:
      "Larutkan dan siramkan ke zona akar, atau semprot ke daun (foliar spray) saat pembungaan",
    dosis:
      "3–5 gram per liter air untuk kocor, 1–2 gram per liter untuk foliar",
    waktuPakai: "Fase generatif — dari bunga sampai buah sebesar kelereng",
    kelebihan: [
      "Satu-satunya sumber Ca yang mudah diserap tanaman secara cepat",
      "Mengatasi masalah busuk ujung buah yang sangat umum",
      "Mengandung N-nitrat yang tidak membutuhkan konversi di tanah",
    ],
    kekurangan: [
      "Harga mahal",
      "Tidak cocok dicampur dengan pupuk fosfat atau sulfat (mengendap)",
    ],
    harga: "Rp 20.000–40.000/kg",
    emoji: "🍅",
    tags: ["kalsium", "nitrat", "ca", "busuk ujung", "tomat", "paprika"],
  },
  {
    id: "pupuk-mkp",
    nama: "MKP (Mono Kalium Fosfat 0-52-34)",
    singkatan: "MKP 0-52-34",
    merekDagang: "MKP Haifa MKP, SQM MKP, Kalium Fosfat",
    kategori: "kimia_makro",
    kandungan: "P₂O₅ 52%, K₂O 34%",
    deskripsiSingkat:
      "Pupuk P + K tinggi tanpa nitrogen — dipakai saat fase generatif untuk memaksimalkan pembungaan, pembuahan, dan kualitas hasil panen.",
    fungsi: [
      "Merangsang pembungaan masif pada fase generatif",
      "Meningkatkan kualitas dan bobot buah",
      "Memaksimalkan ukuran dan kadar gula buah",
      "Cocok untuk 'switch' dari vegetatif ke generatif",
    ],
    caraPakai:
      "Larutkan dalam air, kocor ke zona akar atau semprot daun saat fase generatif",
    dosis: "1–3 gram per liter air",
    waktuPakai:
      "Saat tanaman mulai berbunga — 2 minggu sebelum dan selama pembungaan",
    kelebihan: [
      "Kandungan P dan K tertinggi, tanpa N yang menghambat fase generatif",
      "Larut sempurna, cocok untuk fertigasi",
      "Sangat efektif merangsang bunga pada tanaman yang susah berbunga",
    ],
    kekurangan: [
      "Harga mahal",
      "Tidak boleh dipakai di fase vegetatif (tanpa N, tanaman tidak tumbuh)",
    ],
    harga: "Rp 30.000–60.000/kg",
    emoji: "🌸",
    tags: ["mkp", "kalium fosfat", "generatif", "bunga", "buah", "fertigasi"],
  },
];
