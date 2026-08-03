// ============================================================
// DATA UMUM BERTANI — Glosarium, Unsur Hara, Konsep Dasar
// Dipakai sebagai referensi bersama semua panduan tanaman.
// UI menampilkan ini di tab tersendiri; panduan tanaman
// cukup link anchor ke sini — tidak perlu duplikasi.
// ============================================================

export interface EntriGlosarium {
  id: string;
  istilah: string;
  kategori: "waktu" | "teknik" | "nutrisi" | "fase" | "struktur";
  penjelasan: string;
  contoh?: string;
}

export interface UnsurHara {
  id: string;
  simbol: string;
  nama: string;
  tipe: "makro_primer" | "makro_sekunder" | "mikro";
  emoji: string;
  fungsiUtama: string[];
  gejalaDekufisiensi: string[];
  /** Pupuk sumber utama unsur ini — id dari ensiklopedi pupuk */
  sumberPupuk: string[];
  catatan: string;
}

export interface KonsepPupuk {
  id: string;
  judul: string;
  emoji: string;
  penjelasan: string;
  poin: string[];
}

// ─── Glosarium Umum ──────────────────────────────────────────
export const glosariumUmum: EntriGlosarium[] = [
  {
    id: "hss",
    istilah: "HSS — Hari Setelah Semai",
    kategori: "waktu",
    penjelasan:
      "Hitungan hari dimulai sejak benih diletakkan di media semai. Digunakan selama fase pembibitan sebelum bibit dipindah ke lahan.",
    contoh: "HSS 7 = 7 hari setelah benih disemai di tray.",
  },
  {
    id: "hst",
    istilah: "HST — Hari Setelah Tanam",
    kategori: "waktu",
    penjelasan:
      "Hitungan hari dimulai sejak bibit dipindahkan ke lahan utama (transplanting). Standar paling umum dalam jadwal perawatan dan pemupukan.",
    contoh: "HST 30 = 30 hari setelah bibit dipindah ke bedengan.",
  },
  {
    id: "semai",
    istilah: "Semai",
    kategori: "teknik",
    penjelasan:
      "Proses menanam benih di media khusus (tray semai atau polybag kecil) sebelum dipindah ke lahan. Melindungi bibit muda dari kondisi ekstrem dan memastikan hanya bibit terbaik yang ditanam.",
    contoh:
      "Benih cabai disemai di tray 128 lubang, media: tanah+kompos+sekam.",
  },
  {
    id: "media-tanam",
    istilah: "Media Tanam",
    kategori: "struktur",
    penjelasan:
      "Campuran bahan tempat akar tumbuh dan menyerap nutrisi. Media ideal: gembur, drainase baik, pH 6–7, kaya bahan organik. Formula umum: tanah subur + kompos/pupuk kandang matang + sekam bakar (2:1:1).",
    contoh: "Untuk polybag: 60% tanah, 30% kompos, 10% sekam bakar.",
  },
  {
    id: "pruning",
    istilah: "Prung / Pruning",
    kategori: "teknik",
    penjelasan:
      "Pemangkasan bagian tanaman (tunas, cabang, daun) yang tidak produktif untuk mengarahkan energi ke buah. Jenis: wiwil (buang tunas air), topping (buang pucuk utama untuk paksa percabangan), pinching.",
    contoh: "Wiwil cabai: buang semua tunas di bawah cabang V pertama.",
  },
  {
    id: "wiwil",
    istilah: "Wiwil / Tunas Air",
    kategori: "teknik",
    penjelasan:
      "Tunas vegetatif yang tumbuh di ketiak daun. Pada tanaman buah (cabai, tomat), wiwil di bawah percabangan produktif harus dibuang karena hanya mengonsumsi energi tanpa menghasilkan buah.",
    contoh: "Lakukan wiwil saat tunas masih < 3 cm agar luka cepat kering.",
  },
  {
    id: "fase-vegetatif",
    istilah: "Fase Vegetatif",
    kategori: "fase",
    penjelasan:
      "Periode pertumbuhan aktif tanaman: akar, batang, dan daun berkembang pesat. Tanaman belum berbunga. Kebutuhan Nitrogen (N) tinggi untuk membangun biomassa. Fase ini menentukan kapasitas produktif tanaman.",
    contoh: "Cabai vegetatif HST 0–35, semangka vegetatif HST 0–25.",
  },
  {
    id: "fase-generatif",
    istilah: "Fase Generatif",
    kategori: "fase",
    penjelasan:
      "Periode tanaman mulai berbunga, berbuah, dan mematangkan buah. Kebutuhan beralih ke Fosfor (P) dan Kalium (K). Nitrogen dikurangi agar energi tidak terbuang untuk pertumbuhan daun berlebihan.",
    contoh: "Cabai generatif mulai HST 35+, tomat mulai HST 28+.",
  },
  {
    id: "fruit-set",
    istilah: "Fruit Set",
    kategori: "fase",
    penjelasan:
      "Proses keberhasilan pembentukan buah setelah penyerbukan. Bunga yang berhasil dibuahi akan menjadi calon buah; yang gagal akan rontok. Persentase fruit set yang tinggi = panen lebih banyak.",
    contoh:
      "Fruit set melon ditingkatkan dengan penyerbukan buatan (kuas/bantuan lebah).",
  },
  {
    id: "kocor",
    istilah: "Kocor",
    kategori: "teknik",
    penjelasan:
      "Cara aplikasi pupuk atau pestisida cair dengan menuangkan langsung ke zona akar (pangkal batang). Efektif untuk pupuk yang diserap melalui akar. Volume tiap tanaman umumnya 200–500 ml.",
    contoh: "Kocor NPK: larutkan 5 g NPK/liter, tuang 300 ml per tanaman.",
  },
  {
    id: "foliar",
    istilah: "Foliar / Semprot Daun",
    kategori: "teknik",
    penjelasan:
      "Aplikasi pupuk cair dengan menyemprotkan ke permukaan daun. Penyerapan jauh lebih cepat (1–2 hari) vs kocor ke tanah (3–7 hari). Cocok untuk koreksi defisiensi hara darurat atau hara mikro.",
    contoh: "Semprot daun Boron 1 g/L untuk mencegah bunga rontok.",
  },
  {
    id: "bedengan",
    istilah: "Bedengan",
    kategori: "struktur",
    penjelasan:
      "Gundukan tanah memanjang tempat tanaman ditanam. Tinggi bedengan 20–30 cm, lebar 80–120 cm. Fungsi: mencegah genangan air, sirkulasi udara lebih baik, memudahkan perawatan.",
    contoh: "Lebar bedengan 100 cm, tinggi 25 cm, parit antar bedengan 40 cm.",
  },
  {
    id: "mulsa",
    istilah: "Mulsa Plastik",
    kategori: "teknik",
    penjelasan:
      "Lembaran plastik penutup bedengan (warna hitam-perak). Fungsi: menekan gulma, menjaga kelembaban, memantulkan cahaya untuk mengusir serangga, mencegah percikan tanah yang membawa penyakit.",
    contoh: "Sisi perak menghadap ke atas untuk memantulkan cahaya matahari.",
  },
  {
    id: "karensa",
    istilah: "Masa Karensa",
    kategori: "waktu",
    penjelasan:
      "Jangka waktu (hari) yang harus lewat setelah penyemprotan pestisida sebelum hasil panen aman dikonsumsi. Wajib dipatuhi untuk keamanan pangan.",
    contoh: "Karensa 14 hari = berhenti semprot minimal 14 hari sebelum panen.",
  },
  {
    id: "drainase",
    istilah: "Drainase",
    kategori: "struktur",
    penjelasan:
      "Kemampuan tanah membuang kelebihan air. Drainase buruk = akar terendam = busuk akar = tanaman mati. Solusi: bedengan tinggi, tambah pasir atau sekam ke tanah liat.",
    contoh:
      "Cek drainase: siram lebat, air seharusnya tidak tergenang > 30 menit.",
  },
  {
    id: "ph-tanah",
    istilah: "pH Tanah",
    kategori: "struktur",
    penjelasan:
      "Skala keasaman tanah (1–14). pH 7 = netral, < 7 = asam, > 7 = basa. Sebagian besar tanaman tumbuh optimal di pH 6–7. pH di luar rentang ini menghambat penyerapan hara meski pupuk sudah diberikan.",
    contoh: "pH < 5.5: tambah kapur dolomit. pH > 7.5: tambah belerang/kompos.",
  },
];

// ─── Unsur Hara ──────────────────────────────────────────────
export const dataUnsurHara: UnsurHara[] = [
  // ── Makro Primer ─────────────────────────────
  {
    id: "nitrogen",
    simbol: "N",
    nama: "Nitrogen",
    tipe: "makro_primer",
    emoji: "🟢",
    fungsiUtama: [
      "Komponen utama klorofil (zat hijau daun) — tanaman butuh N untuk fotosintesis",
      "Pembentuk protein dan asam amino — fondasi seluruh struktur sel tanaman",
      "Mendorong pertumbuhan vegetatif: daun lebar, batang tegak, warna hijau tua",
      "Aktif di fase vegetatif; dikurangi saat memasuki fase generatif",
    ],
    gejalaDekufisiensi: [
      "Daun menguning dari bawah (daun tua dulu, lalu merambat ke atas)",
      "Tanaman kerdil dan pertumbuhan lambat",
      "Batang kurus dan lemah",
      "Hasil panen turun drastis",
    ],
    sumberPupuk: [
      "pupuk-urea",
      "pupuk-za",
      "pupuk-npk-phonska",
      "pupuk-npk-mutiara",
    ],
    catatan:
      "Terlalu banyak N di fase generatif = tanaman terlalu rimbun, buah sedikit dan kualitas rendah. Selalu kurangi N saat tanaman mulai berbunga.",
  },
  {
    id: "fosfor",
    simbol: "P",
    nama: "Fosfor",
    tipe: "makro_primer",
    emoji: "🔴",
    fungsiUtama: [
      "Pembentukan sistem akar yang kuat dan luas",
      "Transfer energi dalam sel (ATP) — 'bahan bakar' semua proses metabolisme",
      "Mendorong pembungaan dan pembuahan",
      "Mempercepat pematangan buah",
      "Meningkatkan ketahanan tanaman terhadap penyakit",
    ],
    gejalaDekufisiensi: [
      "Warna daun hijau keunguan/kemerahan (terutama di bawah daun)",
      "Akar kerdil dan pertumbuhan terhambat",
      "Pembungaan terlambat atau bunga sedikit",
      "Buah tidak terbentuk sempurna",
    ],
    sumberPupuk: [
      "pupuk-sp36",
      "pupuk-mkp",
      "pupuk-npk-phonska",
      "pupuk-npk-mutiara",
    ],
    catatan:
      "P larut sangat lambat di tanah dan tidak bergerak — harus dibenamkan dekat zona akar. Diberikan di awal (pupuk dasar) dan ditingkatkan saat pra-bunga.",
  },
  {
    id: "kalium",
    simbol: "K",
    nama: "Kalium",
    tipe: "makro_primer",
    emoji: "🟠",
    fungsiUtama: [
      "Mengatur buka-tutup stomata (pori daun) — efisiensi penggunaan air",
      "Meningkatkan kualitas buah: rasa manis, warna cerah, tekstur padat",
      "Memperkuat dinding sel dan batang (tahan roboh dan serangan penyakit)",
      "Mengaktifkan >60 enzim dalam metabolisme tanaman",
      "Mengurangi stres kekeringan dan suhu ekstrem",
    ],
    gejalaDekufisiensi: [
      "Tepi dan ujung daun tua mengering (nekrosis tepi daun)",
      "Buah kecil, kulit tipis, mudah memar",
      "Rasa buah hambar atau tidak manis (pada melon/semangka)",
      "Tanaman mudah rebah dan rentan penyakit",
    ],
    sumberPupuk: [
      "pupuk-kcl",
      "pupuk-mkp",
      "pupuk-npk-mutiara",
      "pupuk-organik-cair",
    ],
    catatan:
      "K sangat penting di fase generatif dan pra-panen. Untuk melon dan semangka, K tinggi = Brix (kadar gula) tinggi. Selalu tingkatkan K menjelang panen.",
  },
  // ── Makro Sekunder ───────────────────────────
  {
    id: "kalsium",
    simbol: "Ca",
    nama: "Kalsium",
    tipe: "makro_sekunder",
    emoji: "🔵",
    fungsiUtama: [
      "Membangun dinding sel — tanaman dengan Ca cukup jauh lebih kokoh",
      "Mencegah Blossom End Rot (BER): ujung buah busuk hitam pada tomat/cabai/melon",
      "Memperpanjang umur simpan buah setelah panen",
      "Membantu penyerapan mineral lain",
    ],
    gejalaDekufisiensi: [
      "Ujung buah membusuk berwarna hitam (BER)",
      "Ujung daun muda menggulung ke dalam dan menghitam",
      "Tanaman rapuh dan mudah patah",
    ],
    sumberPupuk: ["pupuk-dolomit"],
    catatan:
      "Sumber utama: Kalsium Nitrat (Ca(NO₃)₂), dolomit, kapur pertanian. Penyerapan Ca memerlukan drainase baik — tanah becek menghambat penyerapan Ca.",
  },
  {
    id: "magnesium",
    simbol: "Mg",
    nama: "Magnesium",
    tipe: "makro_sekunder",
    emoji: "🟡",
    fungsiUtama: [
      "Inti molekul klorofil — tanpa Mg, tidak ada klorofil",
      "Mengaktifkan enzim-enzim penting dalam fotosintesis",
      "Membantu mobilisasi fosfor dalam tanaman",
    ],
    gejalaDekufisiensi: [
      "Daun tua menguning di antara tulang daun (klorosis interveinal), tulang daun tetap hijau",
      "Gejala mirip kekurangan N tapi hanya pada daun tua",
    ],
    sumberPupuk: ["pupuk-dolomit"],
    catatan:
      "Dolomit mengandung Ca dan Mg sekaligus. Defisiensi Mg sering terjadi di tanah asam atau setelah musim hujan panjang.",
  },
  {
    id: "sulfur",
    simbol: "S",
    nama: "Sulfur / Belerang",
    tipe: "makro_sekunder",
    emoji: "🟤",
    fungsiUtama: [
      "Komponen asam amino esensial (metionin, sistein)",
      "Memberi aroma khas pada bawang, cabai, dan brassica",
      "Meningkatkan kualitas protein biji",
    ],
    gejalaDekufisiensi: [
      "Daun muda menguning merata (bedakan dengan N: N kuning dari daun tua)",
      "Pertumbuhan kerdil, daun kecil",
    ],
    sumberPupuk: ["pupuk-za"],
    catatan:
      "Pupuk ZA (Amonium Sulfat) mengandung N + S — pilihan bagus untuk cabai agar aroma lebih tajam.",
  },
  // ── Mikro ────────────────────────────────────
  {
    id: "boron",
    simbol: "B",
    nama: "Boron",
    tipe: "mikro",
    emoji: "🟣",
    fungsiUtama: [
      "Pembentukan dinding sel yang kuat",
      "Transportasi gula dari daun ke buah",
      "Perkembangan tabung serbuk sari — kunci keberhasilan penyerbukan",
      "Mencegah bunga rontok (flower drop)",
    ],
    gejalaDekufisiensi: [
      "Bunga rontok massal sebelum sempat dibuahi",
      "Buah cacat: berlubang di dalam, kulit pecah-pecah",
      "Pucuk tanaman mati (die-back) atau pertumbuhan tidak normal",
    ],
    sumberPupuk: ["pupuk-boron"],
    catatan:
      "Boron diperlukan dalam jumlah sangat kecil tapi kritis saat pembungaan. Semprot foliar 1–2 g/L selama fase pra-bunga sampai fruit set.",
  },
  {
    id: "besi",
    simbol: "Fe",
    nama: "Besi",
    tipe: "mikro",
    emoji: "⚫",
    fungsiUtama: [
      "Sintesis klorofil (tidak masuk klorofil tapi diperlukan proses pembentukannya)",
      "Transfer elektron dalam fotosintesis dan respirasi",
    ],
    gejalaDekufisiensi: [
      "Daun muda kuning (klorosis) sementara tulang daun tetap hijau",
      "Sering terjadi di tanah berkapur (pH tinggi) karena Fe tidak larut",
    ],
    sumberPupuk: [],
    catatan:
      "Defisiensi Fe sering disebabkan pH terlalu tinggi, bukan kekurangan kandungan Fe di tanah. Solusi: turunkan pH atau aplikasi Fe-EDTA (chelated iron) sebagai foliar.",
  },
  {
    id: "seng",
    simbol: "Zn",
    nama: "Seng / Zink",
    tipe: "mikro",
    emoji: "🔘",
    fungsiUtama: [
      "Aktivator enzim penting dalam sintesis protein",
      "Produksi hormon auksin (hormon pertumbuhan)",
      "Perkembangan benih dan biji",
    ],
    gejalaDekufisiensi: [
      "Daun kecil-kecil dengan ruas pendek (roset)",
      "Ruas batang memendek, tanaman kerdil",
      "Warna daun belang-belang kuning",
    ],
    sumberPupuk: [],
    catatan:
      "Zn sering kurang di tanah berpasir atau setelah pengapuran berlebihan. Sumber: ZnSO4 (zinc sulfat) semprot daun.",
  },
];

// ─── Konsep Pupuk Penting ─────────────────────────────────────
export const konsepPupuk: KonsepPupuk[] = [
  {
    id: "npk",
    judul: "Apa itu NPK?",
    emoji: "🧪",
    penjelasan:
      "NPK adalah singkatan tiga unsur hara makro primer: Nitrogen (N), Fosfor/Phosphor (P), dan Kalium/Potassium (K). Angka pada label pupuk NPK (misal 15-15-15) menunjukkan persentase kadar masing-masing unsur.",
    poin: [
      "NPK 15-15-15 = 15% N + 15% P₂O₅ + 15% K₂O — seimbang untuk fase vegetatif",
      "NPK 12-6-22 = tinggi K — cocok untuk fase generatif dan pematangan buah",
      "NPK 6-30-6 = tinggi P — cocok untuk fase pra-bunga dan pembentukan akar",
      "Angka yang lebih besar = kandungan unsur lebih tinggi per kilogram pupuk",
    ],
  },
  {
    id: "pupuk-dasar-vs-susulan",
    judul: "Pupuk Dasar vs Pupuk Susulan",
    emoji: "📋",
    penjelasan:
      "Pupuk dasar diberikan sebelum atau saat tanam untuk menyiapkan kondisi tanah. Pupuk susulan diberikan selama masa tanam sesuai kebutuhan fase pertumbuhan.",
    poin: [
      "Pupuk dasar: pupuk kandang, kompos, SP-36, KCl — diberikan 7–14 hari sebelum tanam",
      "Pupuk susulan: Urea/ZA, NPK, pupuk organik cair — diberikan berkala selama tanam",
      "Pupuk lambat larut (slow release) cocok sebagai dasar; cepat larut untuk susulan",
      "Pupuk organik membangun struktur tanah; kimia langsung tersedia untuk tanaman",
    ],
  },
  {
    id: "cara-aplikasi",
    judul: "Cara Aplikasi Pupuk",
    emoji: "✋",
    penjelasan:
      "Cara aplikasi yang benar menentukan efektivitas pupuk. Pupuk yang tepat tapi cara salah = pemborosan dan bisa membakar tanaman.",
    poin: [
      "Tabur: pupuk butiran ditabur melingkar 5–10 cm dari batang, lalu siram",
      "Kocor: larutkan pupuk di air, tuang langsung ke zona akar",
      "Semprot daun (foliar): larutan encer disemprotkan ke daun — absorpsi cepat",
      "Benam: pupuk dimasukkan ke lubang di samping tanaman lalu ditutup tanah",
      "Aturan umum: jangan tabur terlalu dekat batang (bisa terbakar) dan selalu siram setelah pupuk tabur",
    ],
  },
  {
    id: "organik-vs-kimia",
    judul: "Pupuk Organik vs Kimia",
    emoji: "⚖️",
    penjelasan:
      "Keduanya punya peran berbeda — bukan pilih salah satu, tapi kombinasikan keduanya untuk hasil terbaik.",
    poin: [
      "Organik: memperbaiki struktur tanah, aktivitas mikroba, kandungan hara lengkap tapi rendah — efeknya jangka panjang",
      "Kimia: kandungan hara tinggi dan tersedia langsung — efeknya cepat tapi tidak memperbaiki tanah",
      "Kombinasi ideal: organik sebagai pondasi + kimia sebagai booster sesuai fase",
      "Terlalu banyak kimia tanpa organik = tanah keras, mikroba mati, ketergantungan pupuk meningkat",
    ],
  },
  {
    id: "frekuensi-pemupukan",
    judul: "Frekuensi & Dosis Pemupukan",
    emoji: "⏰",
    penjelasan:
      "Prinsip: sedikit tapi sering lebih baik daripada sekaligus banyak. Tanaman hanya bisa menyerap hara sesuai kapasitasnya.",
    poin: [
      "Fase vegetatif aktif: pupuk NPK setiap 7–10 hari",
      "Fase generatif: pupuk kalium/foliar setiap 5–7 hari",
      "Pupuk organik cair: bisa setiap 3–5 hari tanpa risiko overdosis",
      "Overdosis pupuk kimia = daun terbakar (leaf burn), tanaman stres, penyerapan air terganggu",
      "Ciri overdosis: ujung daun mengering coklat, tanaman layu meski tanah basah",
    ],
  },
];
