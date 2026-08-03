import type { PupukData } from "./types";

export const dataPupukOrganik: PupukData[] = [
  {
    id: "pupuk-kandang",
    nama: "Pupuk Kandang",
    merekDagang: "NASA, Cap Bintang (tersedia di semua toko pertanian)",
    kategori: "organik",
    kandungan: "N 0.5–1%, P 0.3–0.5%, K 0.5–1%, unsur mikro, humus",
    deskripsiSingkat:
      "Kotoran hewan ternak (sapi/ayam/kambing) yang sudah dikomposkan — pupuk paling dasar dan murah untuk memperbaiki tanah.",
    fungsi: [
      "Memperbaiki struktur dan tekstur tanah agar gembur",
      "Meningkatkan aktivitas mikroorganisme tanah",
      "Sumber hara makro dan mikro yang lengkap (walau kadarnya rendah)",
      "Meningkatkan kapasitas tanah menahan air",
    ],
    caraPakai:
      "Campurkan dengan tanah saat pengolahan lahan atau taburkan di sekitar tanaman lalu tutup dengan tanah",
    dosis: "2–5 ton per hektar (sekitar 1–2 kg per m²)",
    waktuPakai: "2–4 minggu sebelum tanam agar sudah matang sempurna",
    kelebihan: [
      "Memperbaiki fisika, kimia, dan biologi tanah sekaligus",
      "Ramah lingkungan dan sangat murah",
      "Efek jangka panjang untuk kesuburan tanah",
    ],
    kekurangan: [
      "Kandungan hara rendah, perlu dosis besar",
      "Bisa membawa benih gulma jika belum matang",
      "Bau tidak sedap jika belum matang sempurna",
    ],
    harga: "Rp 500–1.500/kg",
    emoji: "🐄",
    tags: ["kandang", "sapi", "ayam", "kambing", "organik", "dasar"],
  },
  {
    id: "pupuk-kompos",
    nama: "Pupuk Kompos",
    merekDagang: "Bintang Tani, Hijau Daun (atau buat sendiri)",
    kategori: "organik",
    kandungan: "N 1–3%, P 0.5–1%, K 1–2%, pH mendekati netral",
    deskripsiSingkat:
      "Sampah organik (daun, jerami, sisa sayuran) yang sudah membusuk sempurna menjadi bahan kaya nutrisi untuk tanah.",
    fungsi: [
      "Memperbaiki struktur tanah agar gembur dan tidak padat",
      "Menyuplai hara secara perlahan (slow release)",
      "Membantu menetralkan pH tanah masam",
      "Meningkatkan populasi cacing tanah dan mikroba baik",
    ],
    caraPakai: "Campurkan pada bedengan atau isi ke lubang tanam",
    dosis: "2–4 ton per hektar",
    waktuPakai: "1–2 minggu sebelum tanam",
    kelebihan: [
      "Ramah lingkungan, bisa dibuat sendiri dari sampah dapur",
      "Mengurangi sampah organik rumah tangga",
      "Kandungan hara lebih stabil dan tinggi dibanding pupuk kandang mentah",
    ],
    kekurangan: [
      "Proses pembuatan memerlukan waktu 2–3 bulan",
      "Kandungan hara masih lebih rendah dari pupuk kimia",
    ],
    harga: "Rp 700–2.000/kg",
    emoji: "🌿",
    tags: ["kompos", "organik", "slow release", "tanah"],
  },
  {
    id: "pupuk-organik-cair",
    nama: "Pupuk Organik Cair (POC)",
    singkatan: "POC",
    merekDagang: "NASA POC, Grow More Organic, Bio Sugih",
    kategori: "organik",
    kandungan: "N, P, K organik, asam amino, hormon tumbuh alami, unsur mikro",
    deskripsiSingkat:
      "Pupuk cair dari bahan organik fermentasi yang bisa disemprot ke daun agar diserap lebih cepat.",
    fungsi: [
      "Merangsang pertumbuhan akar dan tunas baru",
      "Penyerapan hara lebih cepat melalui daun (foliar)",
      "Meningkatkan ketahanan tanaman terhadap stress kekeringan dan penyakit",
    ],
    caraPakai:
      "Semprotkan pada daun (foliar) atau siramkan ke tanah, encerkan 5–10 ml per liter air",
    dosis: "5–10 ml per liter air, aplikasi setiap 7–14 hari",
    waktuPakai: "Sepanjang masa pertumbuhan vegetatif",
    kelebihan: [
      "Penyerapan sangat cepat melalui daun (12–24 jam)",
      "Bisa dibuat sendiri dari bahan rumah tangga (bonggol pisang, air cucian beras)",
    ],
    kekurangan: [
      "Kandungan hara rendah dibanding pupuk kimia",
      "Efek cepat hilang, perlu aplikasi rutin",
    ],
    harga: "Rp 15.000–50.000/liter",
    emoji: "💧",
    tags: ["cair", "foliar", "semprot", "organik", "poc"],
  },
  {
    id: "pupuk-hayati",
    nama: "Pupuk Hayati / Biofertilizer",
    merekDagang: "Bio Max Grow, Rhizofos, BioGroe",
    kategori: "hayati",
    kandungan: "Bakteri Rhizobium, Azospirillum, Azotobacter, Mikoriza",
    deskripsiSingkat:
      "Pupuk berisi bakteri dan jamur baik hidup yang membantu tanaman menyerap hara dari tanah secara alami.",
    fungsi: [
      "Mengikat nitrogen bebas dari udara (Rhizobium, Azotobacter) — gratis dari alam",
      "Melarutkan fosfat yang terikat di tanah agar bisa diserap tanaman",
      "Meningkatkan penyerapan air dan hara (mikoriza)",
      "Menekan pertumbuhan jamur patogen (beberapa strain)",
    ],
    caraPakai:
      "Campur dengan benih sebelum semai, atau encerkan dan siram ke tanah saat tanam",
    dosis:
      "Sesuai petunjuk produk (umumnya 5–10 kg per hektar atau 5 ml/liter)",
    waktuPakai: "Saat semai atau saat tanam",
    kelebihan: [
      "Sangat ramah lingkungan, tidak mencemari tanah",
      "Mengurangi kebutuhan pupuk kimia hingga 30–50%",
      "Efek jangka panjang untuk kesehatan tanah",
    ],
    kekurangan: [
      "Efek lebih lambat terlihat dibanding pupuk kimia",
      "Sensitif terhadap panas dan cahaya matahari langsung",
      "Tidak bisa dicampur dengan pestisida kimia",
    ],
    harga: "Rp 20.000–80.000/kg",
    emoji: "🦠",
    tags: ["hayati", "bakteri", "mikoriza", "bio", "organik"],
  },
  {
    id: "pupuk-trichoderma",
    nama: "Trichoderma sp.",
    merekDagang: "Tricoderma BPMC, Bio Fungisida Trichoderma, Glio",
    kategori: "hayati",
    kandungan: "Jamur Trichoderma viride / harzianum hidup",
    deskripsiSingkat:
      "Jamur baik yang hidup di tanah dan secara aktif menyerang serta membunuh jamur jahat penyebab penyakit tanaman.",
    fungsi: [
      "Menekan jamur patogen tanah: Fusarium, Pythium, Rhizoctonia",
      "Mencegah rebah semai pada persemaian",
      "Merangsang pertumbuhan akar",
      "Meningkatkan ketahanan tanaman terhadap penyakit",
    ],
    caraPakai:
      "Campurkan dengan media tanam atau kompos sebelum digunakan, atau larutkan dan siram ke area perakaran",
    dosis:
      "5–10 gram per liter air untuk semprot, atau 100–200 gram per m² tanah",
    waktuPakai:
      "1–2 minggu sebelum tanam sebagai pencegahan, atau saat ada gejala awal penyakit jamur tanah",
    kelebihan: [
      "Pengendalian hayati yang ramah lingkungan",
      "Tidak berbahaya bagi manusia dan hewan",
      "Bisa dikombinasikan dengan pupuk organik",
    ],
    kekurangan: [
      "Tidak bisa dicampur fungisida kimia (akan mati)",
      "Perlu kondisi lembab untuk berkembang",
      "Tidak efektif untuk penyakit jamur di atas tanah",
    ],
    harga: "Rp 25.000–75.000/kg",
    emoji: "🍄",
    tags: ["trichoderma", "hayati", "jamur baik", "fusarium", "rebah semai"],
  },
  {
    id: "pupuk-em4",
    nama: "EM4 (Effective Microorganism 4)",
    merekDagang: "EM4 Pertanian (botol hijau), EM4 Peternakan (botol kuning)",
    kategori: "hayati",
    kandungan:
      "Lactobacillus sp., Actinomycetes, ragi (Saccharomyces), bakteri fotosintetik, jamur fermentasi",
    deskripsiSingkat:
      "Cairan berisi ribuan mikroorganisme menguntungkan yang mempercepat pengomposan dan menyehatkan tanah.",
    fungsi: [
      "Mempercepat proses pengomposan bahan organik",
      "Meningkatkan ketersediaan hara di tanah",
      "Menekan bakteri dan jamur patogen",
      "Menghilangkan bau pada kotoran ternak",
      "Merangsang pertumbuhan dan ketahanan tanaman",
    ],
    caraPakai:
      "Encerkan 10 ml EM4 + 10 ml molase/gula merah per liter air, siramkan ke tanah atau semprotkan ke kompos",
    dosis: "10–20 ml per liter air, siram 1–2 kali seminggu",
    waktuPakai: "Sepanjang masa tanam, terutama saat pengolahan lahan",
    kelebihan: [
      "Multifungsi: bisa untuk kompos, tanah, maupun tanaman",
      "Harga sangat terjangkau",
      "Mudah ditemukan di semua toko pertanian",
    ],
    kekurangan: [
      "Perlu gula/molase sebagai aktivator tambahan",
      "Efek tidak seinstant pupuk kimia",
    ],
    harga: "Rp 15.000–30.000/liter",
    emoji: "🧫",
    tags: ["em4", "mikroorganisme", "fermentasi", "kompos", "hayati"],
  },
  {
    id: "asam-humat",
    nama: "Asam Humat (Humic Acid)",
    merekDagang: "Humiplus, Humifert, Aktifhumus, Power Humate",
    kategori: "pembenah_tanah",
    kandungan: "Asam humat 65–85%, asam fulvat 10–15%",
    deskripsiSingkat:
      "Hasil dekomposisi bahan organik kuno dari dalam bumi — bukan pupuk biasa, tapi meningkatkan kemampuan tanaman menyerap pupuk secara dramatis.",
    fungsi: [
      "Meningkatkan penyerapan hara N, P, K hingga 30–50%",
      "Memperbaiki struktur tanah berpasir maupun tanah liat",
      "Meningkatkan Kapasitas Tukar Kation (KTK) tanah",
      "Merangsang pertumbuhan akar secara signifikan",
      "Mengikat logam berat di tanah agar tidak diserap tanaman",
    ],
    caraPakai:
      "Larutkan dalam air dan siramkan ke tanah, atau campurkan dengan pupuk kimia sebelum aplikasi",
    dosis:
      "2–5 liter per hektar (produk cair) atau 10–20 kg per hektar (butiran)",
    waktuPakai: "Saat pengolahan lahan dan awal pertumbuhan vegetatif",
    kelebihan: [
      "Meningkatkan efisiensi pupuk kimia secara dramatis — hemat biaya",
      "Sangat baik untuk tanah rusak atau miskin bahan organik",
      "Efek perbaikan tanah jangka panjang",
    ],
    kekurangan: [
      "Bukan pengganti pupuk utama, hanya pelengkap",
      "Harga relatif lebih mahal dari pupuk organik biasa",
    ],
    harga: "Rp 50.000–200.000/liter",
    emoji: "🪨",
    tags: ["humat", "humic acid", "pembenah", "penyerapan", "efisiensi"],
  },
  {
    id: "m21-decomposer",
    nama: "M21 Decomposer",
    merekDagang: "M21, Bio Decomposer M21, Decomax",
    kategori: "hayati",
    kandungan: "Campuran bakteri selulolitik, lignolitik, dan fungi pengurai",
    deskripsiSingkat:
      "Aktivator pengomposan yang mempercepat pembusukan bahan organik — jerami, batang jagung, dan daun kering bisa jadi kompos dalam 2–3 minggu.",
    fungsi: [
      "Mempercepat dekomposisi bahan organik kasar (jerami, batang, daun)",
      "Menghasilkan kompos berkualitas dalam waktu lebih singkat",
      "Meningkatkan aktivitas mikroba tanah",
      "Mengurangi volume sampah organik pertanian",
    ],
    caraPakai:
      "Encerkan 10 ml M21 per liter air, siramkan merata ke tumpukan bahan organik, balik setiap 3–4 hari",
    dosis: "10–20 ml per liter air, 1 liter larutan untuk 100 kg bahan kompos",
    waktuPakai: "Saat membuat atau memulai tumpukan kompos",
    kelebihan: [
      "Mempercepat pengomposan dari 3 bulan menjadi 3–4 minggu",
      "Hasil kompos lebih halus dan matang sempurna",
      "Mengurangi bau selama proses pengomposan",
    ],
    kekurangan: [
      "Membutuhkan kelembaban dan aerasi yang tepat agar efektif",
      "Harus diaktifkan dengan air terlebih dahulu",
    ],
    harga: "Rp 20.000–60.000/liter",
    emoji: "♻️",
    tags: ["decomposer", "kompos", "aktivator", "jerami", "pengurai"],
  },
];
