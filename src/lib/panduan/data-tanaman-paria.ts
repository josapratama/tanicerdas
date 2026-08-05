import type { PanduanTanaman } from "./types";

// ============================================================
// DATA PANDUAN TANAMAN — Paria / Pare
// ============================================================

export const paria: PanduanTanaman = {
  id: "tanaman-paria",
  nama: "Paria / Pare",
  namaLatin: "Momordica charantia L.",
  emoji: "🥒",
  kategori: "sayuran_buah",
  deskripsiSingkat:
    "Sayuran buah dengan rasa pahit khas yang justru dicari karena khasiat kesehatan. Tumbuh merambat cepat, adaptif di iklim tropis panas. Bisa panen mulai HST 45–55 dan terus berbuah hingga 3–4 bulan.",

  infoUmum: {
    umurPanen: "45–55 HST (panen pertama), produktif hingga 3–4 bulan",
    jarakTanam: "50 × 80 cm atau 60 × 100 cm (perlu ruang merambat)",
    kebutuhanAir: "Sedang — tahan kekeringan ringan, tidak suka tergenang",
    suhuOptimal: "24–32 °C",
    phTanah: "5.5–6.7",
    mediaTanam: "Tanah gembur + kompos; sangat adaptif di berbagai jenis tanah",
  },

  glosarium: [
    {
      istilah: "Momordisida",
      penjelasan:
        "Senyawa triterpenoid dalam paria yang memberikan rasa pahit. Semakin matang buah, semakin pahit dan semakin tinggi kandungan momordisidin. Panen saat masih hijau segar dan kulit masih kencang untuk rasa yang lebih ringan.",
    },
    {
      istilah: "Penyerbukan Silang",
      penjelasan:
        "Paria memiliki bunga jantan dan betina terpisah dalam satu tanaman (monoecious). Penyerbukan alami dilakukan oleh serangga (lebah, kutu, dll). Di lahan tanpa serangga, bisa bantu penyerbukan manual.",
    },
    {
      istilah: "Rambatan Horizontal vs Vertikal",
      penjelasan:
        "Paria bisa ditata merambat secara vertikal (ajir + kawat) atau horizontal (pergola). Vertikal lebih hemat lahan, horizontal lebih produktif dan mudah panen.",
    },
  ],

  faseTumbuh: [
    {
      nama: "Perkecambahan",
      rentangHari: "HST 1–7",
      emoji: "🌱",
      deskripsi:
        "Benih paria memiliki kulit keras — perlu perendaman sebelum tanam. Bisa tanam biji langsung atau semai dulu.",
      ciriFisik: [
        "HST 5–7: kecambah muncul setelah perendaman",
        "HST 7–10: kotiledon membuka, bibit siap",
      ],
      fokusPerawatan: [
        "Rendam benih paria 12–24 jam dalam air hangat sebelum tanam — kulit keras akan melunak dan perkecambahan lebih seragam",
        "Bisa langsung tanam 2 biji per lubang atau semai di polybag kecil terlebih dahulu",
        "Media: tanah + kompos (1:1), siram ringan",
        "Jika tanam langsung: setelah tumbuh, sisakan 1 bibit terkuat per lubang di HST 10–14",
      ],
    },
    {
      nama: "Vegetatif — Pertumbuhan Sulur",
      rentangHari: "HST 7–30",
      emoji: "🌿",
      deskripsi:
        "Sulur tumbuh cepat dan aktif merambat. Paria memiliki sistem cabang yang lebat — perlu pengarahan dan pembentukan kanopi sejak dini.",
      ciriFisik: [
        "HST 7–14: sulur mulai tumbuh dan merambat",
        "HST 14–21: cabang lateral terbentuk",
        "HST 21–30: kanopi mulai rimbun, sulur butuh ajir/tali untuk merambat",
      ],
      fokusPerawatan: [
        "Pasang rambatan/ajir lebih awal — sulur paria tumbuh sangat cepat",
        "Tabur NPK Phonska 5–8 g/tanaman di sekitar pangkal untuk mendorong pertumbuhan sulur yang kuat",
        "Arahkan dan ikat sulur utama ke arah yang diinginkan setiap 2–3 hari",
        "Tidak perlu topping paksa — biarkan sulur tumbuh natural sambil diarahkan",
      ],
    },
    {
      nama: "Pembungaan",
      rentangHari: "HST 30–45",
      emoji: "🌼",
      deskripsi:
        "Bunga jantan muncul lebih dulu, diikuti bunga betina. Penyerbukan serangga berlangsung alami. Fruit set awal terjadi di fase ini.",
      ciriFisik: [
        "HST 30–35: bunga jantan kuning pertama muncul",
        "HST 35–40: bunga betina (ada bakal buah kecil berduri di pangkal) mulai muncul",
        "HST 40–45: buah pertama mulai terbentuk",
      ],
      fokusPerawatan: [
        "Beralih ke NPK tinggi P dan K: tabur NPK Mutiara 16-16-16 8–10 g/tanaman",
        "Semprot Boron 1 g/liter sekali untuk meningkatkan fruit set",
        "Jika bunga betina banyak tapi buah tidak terbentuk: bantu penyerbukan manual dengan memindahkan serbuk sari bunga jantan ke putik bunga betina",
        "Jaga penyiraman tetap konsisten",
      ],
    },
    {
      nama: "Produksi Aktif",
      rentangHari: "HST 45–120",
      emoji: "🥒",
      deskripsi:
        "Panen bergulir. Paria sangat produktif jika dirawat rutin. Semakin rajin dipanen = tanaman semakin banyak berbuah.",
      ciriFisik: [
        "Buah memanjang berwarna hijau muda dengan tonjolan khas",
        "Daun tua menguning dari bawah (normal)",
        "Buah yang tidak dipanen akan memerah dan meledak mengeluarkan biji merah",
      ],
      fokusPerawatan: [
        "Panen setiap 2–3 hari — paria yang terlambat dipanen akan cepat menguning/memerah dan menghambat buah baru",
        "Berikan pupuk recovery NPK Phonska 10 g/tanaman + POC setiap 2 minggu sekali",
        "Pangkas daun tua dan sulur yang tidak produktif untuk sirkulasi udara",
        "Semprot insektisida untuk mencegah lalat buah — hama utama paria",
      ],
    },
  ],

  jadwalPemupukan: [
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
          dosis: "15 g/m²",
          cara: "tabur",
          pupukId: "pupuk-sp36",
        },
      ],
    },
    {
      waktu: "HST 7–10",
      fase: "vegetatif",
      kegiatan: "Susulan 1 — Starter",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "5–8 g/tanaman, tabur",
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
      kegiatan: "Susulan 2 — N dominan",
      produk: [
        {
          nama: "Urea",
          dosis: "3–5 g/tanaman",
          cara: "tabur",
          pupukId: "pupuk-urea",
        },
        {
          nama: "NPK Phonska",
          dosis: "5 g/tanaman",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
      ],
    },
    {
      waktu: "HST 28–35",
      fase: "vegetatif",
      kegiatan: "Susulan 3 — Beralih ke generatif",
      produk: [
        {
          nama: "NPK Mutiara 16-16-16",
          dosis: "8–10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-mutiara",
        },
        {
          nama: "Boron foliar",
          dosis: "1 g/L, semprot daun",
          cara: "semprot_daun",
          pupukId: "pupuk-boron",
        },
      ],
    },
    {
      waktu: "HST 40–100 (tiap 14 hari)",
      fase: "generatif",
      kegiatan: "Rutin produksi — K + organik",
      produk: [
        {
          nama: "NPK Phonska 15-15-15",
          dosis: "10 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-npk-phonska",
        },
        {
          nama: "KCl",
          dosis: "5 g/tanaman, tabur",
          cara: "tabur",
          pupukId: "pupuk-kcl",
        },
        {
          nama: "POC",
          dosis: "5 ml/L, kocor 300 ml/tanaman",
          cara: "kocor",
          pupukId: "pupuk-organik-cair",
        },
      ],
      catatan: "Diulang setiap 2 minggu selama masa produksi aktif.",
    },
  ],

  tipsSukses: [
    "Rendam benih 12–24 jam sebelum tanam — perkecambahan jauh lebih cepat dan seragam.",
    "Pasang rambatan sejak awal — paria merambat sangat cepat dan sulur yang tidak diarahkan akan kusut.",
    "Panen setiap 2–3 hari untuk memaksimalkan produksi — buah yang tidak dipanen menghambat buah baru.",
    "Lalat buah adalah hama utama — gunakan perangkap lalat buah (Methyl Eugenol) atau semprot insektisida sore hari.",
    "Paria sangat toleran panas dan kekeringan ringan dibanding anggota cucurbit lainnya.",
    "Untuk rasa lebih ringan: panen saat masih hijau muda dan ukuran sedang; paria besar lebih pahit.",
    "Biji merah dalam buah paria matang bisa dijadikan benih untuk musim berikutnya.",
  ],

  penyakitUtama: ["pd-embun-tepung", "pd-klorosis"],
  pupukUtama: [
    "pupuk-urea",
    "pupuk-npk-phonska",
    "pupuk-npk-mutiara",
    "pupuk-sp36",
    "pupuk-kcl",
    "pupuk-boron",
    "pupuk-kandang",
    "pupuk-organik-cair",
  ],
};
