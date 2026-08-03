import type { PenyakitPanduan } from "./types";

export const dataPenyakitPanduan: PenyakitPanduan[] = [
  {
    id: "pd-rebah-semai",
    nama: "Rebah Semai (Damping-off)",
    kategori: "jamur",
    jenisTanaman: "Umum (semua tanaman)",
    emoji: "🌱",
    penyebab:
      "Jamur Pythium sp., Rhizoctonia solani, Fusarium sp. — berkembang di media semai yang terlalu lembab dan tidak steril.",
    gejala: [
      "Pangkal batang bibit menyempit seperti tercekik kemudian membusuk",
      "Bibit roboh ke tanah meski daun masih hijau",
      "Bercak coklat basah di pangkal batang",
      "Penyebaran cepat — satu bibit bisa menularkan ke sekitarnya",
    ],
    kondisiPemicu: [
      "Media semai terlalu basah atau lembab",
      "Drainase persemaian buruk",
      "Suhu dingin dan kurang cahaya matahari",
      "Kepadatan bibit terlalu tinggi",
    ],
    pencegahan: [
      "Sterilisasi media semai (kukus atau siram fungisida sebelum pakai)",
      "Gunakan media tanam berdrainase baik (campuran cocopeat + sekam bakar)",
      "Jangan menyiram berlebihan",
      "Beri jarak antar benih",
      "Pastikan sinar matahari cukup",
    ],
    pengobatan: [
      {
        langkah:
          "Cabut dan musnahkan bibit yang sudah roboh agar tidak menyebar",
      },
      { langkah: "Kurangi frekuensi penyiraman segera" },
      {
        langkah: "Kocorkan fungisida propamokarb ke media semai",
        produkId: "previcur",
        tipeRef: "agrokimia",
        namaProduk: "Previcur N",
      },
      {
        langkah:
          "Setelah kondisi terkendali, siram dengan Trichoderma untuk menekan jamur patogen",
        produkId: "pupuk-trichoderma",
        tipeRef: "pupuk",
        namaProduk: "Trichoderma sp.",
      },
    ],
    produkTerkait: [
      "previcur",
      "pupuk-trichoderma",
      "ridomil-gold",
      "pupuk-hayati",
    ],
    tingkatBahaya: "tinggi",
  },
  {
    id: "pd-antraknosa",
    nama: "Antraknosa / Patek",
    kategori: "jamur",
    jenisTanaman: "Cabai, Semangka, Melon",
    emoji: "🌶️",
    penyebab:
      "Jamur Colletotrichum capsici dan C. gloeosporioides — menyebar lewat percikan air hujan dan alat pertanian yang tidak disteril.",
    gejala: [
      "Bercak coklat gelap cekung pada buah, membesar dengan cepat",
      "Bagian tengah bercak berwarna hitam dan lembab",
      "Buah mengkerut, keriput, dan membusuk dari dalam",
      "Pada daun: bercak coklat dengan tepi kuning",
    ],
    kondisiPemicu: [
      "Musim hujan dengan kelembaban tinggi",
      "Sirkulasi udara buruk antar tanaman",
      "Luka pada buah akibat serangga atau gesekan",
    ],
    pencegahan: [
      "Gunakan benih sehat dan perlakukan dengan fungisida sebelum semai",
      "Jaga jarak tanam agar ada sirkulasi udara",
      "Rotasi tanaman setiap musim",
      "Hindari irigasi dari atas, gunakan drip irigasi",
      "Buang buah terinfeksi segera",
    ],
    pengobatan: [
      {
        langkah:
          "Semprot fungisida mankozeb atau propineb setiap 7 hari sebagai preventif",
        produkId: "antracol",
        tipeRef: "agrokimia",
        namaProduk: "Antracol 70 WP / Dithane M-45",
      },
      {
        langkah:
          "Untuk serangan berat, ganti ke fungisida sistemik difenokonazol",
        produkId: "score",
        tipeRef: "agrokimia",
        namaProduk: "Score 250 EC",
      },
      {
        langkah: "Perkuat ketahanan tanaman dengan kalium",
        produkId: "pupuk-kcl",
        tipeRef: "pupuk",
        namaProduk: "Pupuk KCl",
      },
      {
        langkah: "Semprot kalsium foliar untuk perkuat dinding sel buah",
        produkId: "pupuk-kalsium-nitrat",
        tipeRef: "pupuk",
        namaProduk: "Kalsium Nitrat",
      },
    ],
    produkTerkait: [
      "antracol",
      "dithane-m45",
      "score",
      "pupuk-kcl",
      "pupuk-kalsium-nitrat",
    ],
    tingkatBahaya: "tinggi",
  },
  {
    id: "pd-layu-fusarium",
    nama: "Layu Fusarium",
    kategori: "jamur",
    jenisTanaman: "Cabai, Tomat, Semangka",
    emoji: "🥀",
    penyebab:
      "Jamur Fusarium oxysporum — bertahan lama di dalam tanah dan masuk melalui luka akar. Sangat sulit diberantas sekali tanah sudah terinfeksi.",
    gejala: [
      "Daun menguning dimulai dari daun terbawah, menjalar ke atas",
      "Tanaman layu meskipun tanah cukup air",
      "Batang dibelah: pembuluh berwarna coklat (tanda pembuluh tersumbat)",
      "Tanaman mati perlahan dalam 1–2 minggu",
    ],
    kondisiPemicu: [
      "Tanah dengan pH sangat rendah (di bawah 5.5)",
      "Drainase buruk atau tanah sering tergenang",
      "Monokultur bertahun-tahun tanpa rotasi",
      "Luka akar akibat nematoda atau pengolahan tanah",
    ],
    pencegahan: [
      "Rotasi tanaman minimal 2–3 tahun dengan tanaman berbeda famili",
      "Perbaiki pH tanah ke 6–6.5 dengan kapur dolomit",
      "Perbaiki drainase lahan",
      "Gunakan varietas tahan Fusarium",
      "Inokulasi Trichoderma ke tanah sebelum tanam",
    ],
    pengobatan: [
      {
        langkah: "Cabut dan bakar tanaman terinfeksi segera — jangan komposkan",
      },
      {
        langkah: "Siram area sekitar dengan larutan Trichoderma sp.",
        produkId: "pupuk-trichoderma",
        tipeRef: "pupuk",
        namaProduk: "Trichoderma sp.",
      },
      {
        langkah: "Perbaiki pH tanah dengan kapur dolomit",
        produkId: "pupuk-dolomit",
        tipeRef: "pupuk",
        namaProduk: "Kapur Dolomit",
      },
      {
        langkah:
          "Siram fungisida sistemik di pangkal batang tanaman sehat di sekitarnya",
        produkId: "score",
        tipeRef: "agrokimia",
        namaProduk: "Score 250 EC",
      },
    ],
    produkTerkait: [
      "pupuk-trichoderma",
      "pupuk-dolomit",
      "pupuk-hayati",
      "pupuk-kompos",
      "score",
    ],
    tingkatBahaya: "tinggi",
  },
  {
    id: "pd-klorosis",
    nama: "Klorosis (Daun Kuning)",
    kategori: "fisiologis",
    jenisTanaman: "Umum (semua tanaman)",
    emoji: "🍂",
    penyebab:
      "Kekurangan unsur hara — terutama Nitrogen (N), Magnesium (Mg), atau Besi (Fe). Bisa juga akibat pH tanah tidak optimal sehingga hara tidak bisa diserap.",
    gejala: [
      "Daun menguning merata (N kurang) atau menguning di antara tulang daun (Mg kurang)",
      "Pertumbuhan terhambat dan tanaman terlihat kerdil",
      "Daun tua kuning = N atau Mg kurang; daun muda kuning = Fe atau Mn kurang",
    ],
    kondisiPemicu: [
      "Kekurangan pupuk nitrogen",
      "pH tanah terlalu rendah (< 5.5) — Fe dan Mn menjadi tidak tersedia",
      "pH tanah terlalu tinggi (> 7.5) — Fe, Mn, Zn tidak tersedia",
      "Drainase buruk menyebabkan akar tidak menyerap hara dengan baik",
    ],
    pencegahan: [
      "Lakukan tes pH tanah sebelum tanam",
      "Perbaiki pH dengan dolomit (jika asam) atau belerang (jika basa)",
      "Aplikasikan pupuk organik secara rutin untuk menjaga ketersediaan hara",
    ],
    pengobatan: [
      {
        langkah: "Daun tua menguning merata → beri pupuk Urea atau ZA",
        produkId: "pupuk-urea",
        tipeRef: "pupuk",
        namaProduk: "Pupuk Urea",
      },
      {
        langkah: "Daun menguning di antara tulang daun → beri Kieserit (Mg)",
        produkId: "pupuk-kieserit",
        tipeRef: "pupuk",
        namaProduk: "Kieserit MgSO₄",
      },
      {
        langkah: "Semua daun pucat hijau → perbaiki pH dengan Dolomit",
        produkId: "pupuk-dolomit",
        tipeRef: "pupuk",
        namaProduk: "Kapur Dolomit",
      },
      {
        langkah: "Semprot POC sebagai quick fix hara mikro",
        produkId: "pupuk-organik-cair",
        tipeRef: "pupuk",
        namaProduk: "Pupuk Organik Cair (POC)",
      },
    ],
    produkTerkait: [
      "pupuk-urea",
      "pupuk-kieserit",
      "pupuk-dolomit",
      "pupuk-organik-cair",
      "pupuk-za",
    ],
    tingkatBahaya: "sedang",
  },
  {
    id: "pd-busuk-phytophthora",
    nama: "Busuk Phytophthora",
    kategori: "jamur",
    jenisTanaman: "Cabai, Melon, Tomat",
    emoji: "🍅",
    penyebab:
      "Oomycete Phytophthora capsici — bukan jamur sejati tapi berperilaku seperti jamur. Berkembang pesat di kondisi lembab dan basah, menyebar lewat tanah dan percikan air.",
    gejala: [
      "Buah membusuk dengan sangat cepat (1–2 hari hingga buah hancur)",
      "Bercak coklat kehitaman basah pada buah",
      "Batang membusuk dari pangkal ke atas seperti tercekik",
      "Daun dan buah rontok massal dalam waktu singkat",
    ],
    kondisiPemicu: [
      "Musim hujan lebat berkepanjangan",
      "Tanah tidak berdrainase baik atau tergenang",
      "Penyiraman berlebihan",
      "Buah menyentuh tanah langsung",
    ],
    pencegahan: [
      "Buat bedengan tinggi (min 30 cm) agar buah tidak menyentuh tanah",
      "Pasang mulsa plastik untuk cegah percikan tanah",
      "Perbaiki drainase lahan sebelum musim hujan",
      "Gunakan drip irigasi — hindari basahi daun dan buah",
    ],
    pengobatan: [
      {
        langkah: "Semprot fungisida metalaksil-M + mankozeb segera",
        produkId: "ridomil-gold",
        tipeRef: "agrokimia",
        namaProduk: "Ridomil Gold MZ",
      },
      { langkah: "Kurangi penyiraman drastis hingga kondisi membaik" },
      {
        langkah: "Perkuat tanaman dengan kalium agar dinding sel lebih kuat",
        produkId: "pupuk-kcl",
        tipeRef: "pupuk",
        namaProduk: "Pupuk KCl",
      },
      {
        langkah: "Semprot kalsium nitrat untuk perkuat dinding sel buah",
        produkId: "pupuk-kalsium-nitrat",
        tipeRef: "pupuk",
        namaProduk: "Kalsium Nitrat",
      },
    ],
    produkTerkait: [
      "ridomil-gold",
      "pupuk-kcl",
      "pupuk-kalsium-nitrat",
      "pupuk-dolomit",
    ],
    tingkatBahaya: "tinggi",
  },
  {
    id: "pd-virus-kuning",
    nama: "Virus Kuning (Begomovirus)",
    kategori: "virus",
    jenisTanaman: "Cabai, Tomat",
    emoji: "🟡",
    penyebab:
      "Virus Begomovirus, ditularkan oleh serangga kutu kebul (Bemisia tabaci). Tidak ada obat — pengendalian vektor (kutu kebul) adalah satu-satunya kunci.",
    gejala: [
      "Daun muda berwarna kuning cerah (klorosis intens)",
      "Daun mengkerut, melengkung ke atas",
      "Pertumbuhan sangat terhambat, tanaman kerdil",
      "Buah kecil, cacat, dan produksi sangat sedikit",
    ],
    kondisiPemicu: [
      "Populasi kutu kebul tinggi di lahan",
      "Musim kemarau panas mendukung kutu kebul berkembang biak",
      "Tidak ada tanaman refugia atau musuh alami",
    ],
    pencegahan: [
      "Pasang mulsa plastik perak untuk memantulkan cahaya dan repel kutu kebul",
      "Pasang perangkap kuning (yellow sticky trap) untuk monitoring",
      "Tanam tanaman refugia (bunga matahari, kenikir) sebagai habitat musuh alami",
      "Rotasi tanaman dan bersihkan gulma yang menjadi inang kutu kebul",
    ],
    pengobatan: [
      {
        langkah: "Semprot insektisida sistemik untuk basmi kutu kebul vektor",
        produkId: "confidor",
        tipeRef: "agrokimia",
        namaProduk: "Confidor 200 SL",
      },
      {
        langkah:
          "Cabut dan musnahkan tanaman bergejala parah untuk cegah penyebaran virus",
      },
      {
        langkah: "Perkuat tanaman sehat dengan pupuk NPK berimbang",
        produkId: "pupuk-npk-mutiara",
        tipeRef: "pupuk",
        namaProduk: "NPK Mutiara",
      },
      {
        langkah: "Semprot POC untuk meningkatkan imunitas tanaman sehat",
        produkId: "pupuk-organik-cair",
        tipeRef: "pupuk",
        namaProduk: "Pupuk Organik Cair",
      },
    ],
    produkTerkait: [
      "confidor",
      "avidor",
      "pupuk-npk-mutiara",
      "pupuk-organik-cair",
    ],
    tingkatBahaya: "tinggi",
  },
  {
    id: "pd-thrips",
    nama: "Hama Thrips",
    kategori: "hama",
    jenisTanaman: "Cabai, Bawang",
    emoji: "🐛",
    penyebab:
      "Serangga Thrips parvispinus yang menghisap cairan sel daun muda. Ukurannya sangat kecil (1–2 mm) sehingga sering tidak terlihat dengan mata telanjang. Juga berperan sebagai vektor virus.",
    gejala: [
      "Daun muda menggulung ke atas seperti sendok",
      "Permukaan daun berwarna perak mengkilap (bekas hisapan)",
      "Titik hitam kecil (kotoran thrips) di permukaan daun",
      "Pucuk dan bunga rontok",
    ],
    kondisiPemicu: [
      "Musim kemarau dengan angin kencang (thrips menyebar dengan angin)",
      "Tidak ada musuh alami di lahan",
      "Tanaman stress akibat kekurangan air atau hara",
    ],
    pencegahan: [
      "Pasang perangkap kuning atau biru (thrips tertarik warna biru)",
      "Tanam refugia di sekitar lahan",
      "Semprot insektisida secara bergantian (rotasi) agar thrips tidak resisten",
    ],
    pengobatan: [
      {
        langkah: "Semprot abamektin — efektif untuk thrips dan juga tungau",
        produkId: "abacell",
        tipeRef: "agrokimia",
        namaProduk: "Abacell / Agrimec",
      },
      {
        langkah: "Rotasi dengan spinosad untuk manajemen resistensi",
        produkId: "spintor",
        tipeRef: "agrokimia",
        namaProduk: "Spintor 120 SC",
      },
      {
        langkah:
          "Semprot pagi hari saat thrips bersembunyi di daun muda yang menggulung",
      },
      {
        langkah:
          "Perkuat tanaman dengan pupuk kalium agar dinding sel lebih sulit ditembus",
        produkId: "pupuk-kcl",
        tipeRef: "pupuk",
        namaProduk: "Pupuk KCl",
      },
    ],
    produkTerkait: [
      "abacell",
      "spintor",
      "confidor",
      "pupuk-kcl",
      "pupuk-npk-mutiara",
    ],
    tingkatBahaya: "sedang",
  },
  {
    id: "pd-embun-tepung",
    nama: "Embun Tepung (Powdery Mildew)",
    kategori: "jamur",
    jenisTanaman: "Semangka, Melon, Timun",
    emoji: "⬜",
    penyebab:
      "Jamur Sphaerotheca fuliginea atau Erysiphe cichoracearum. Uniknya, berbeda dari jamur lain — tidak butuh permukaan basah untuk berkembang. Justru berkembang saat udara kering tapi lembab.",
    gejala: [
      "Lapisan putih seperti tepung di permukaan atas dan bawah daun",
      "Daun menguning dan mengering dari ujung",
      "Bercak putih awalnya kecil lalu menutup seluruh daun",
      "Serangan terutama saat musim kemarau",
    ],
    kondisiPemicu: [
      "Kelembaban udara sedang (60–80%, bukan kondisi basah)",
      "Suhu fluktuatif — panas siang, dingin malam",
      "Pemupukan nitrogen berlebihan membuat daun lunak dan rentan",
      "Tanaman terlalu rapat",
    ],
    pencegahan: [
      "Jaga jarak tanam agar sirkulasi udara baik",
      "Hindari pemupukan nitrogen berlebih di fase generatif",
      "Pilih varietas yang tahan powdery mildew",
    ],
    pengobatan: [
      {
        langkah:
          "Semprot belerang (sulfur) — efektif dan murah untuk embun tepung",
        produkId: "kumulus",
        tipeRef: "agrokimia",
        namaProduk: "Kumulus 80 WG",
      },
      {
        langkah: "Untuk serangan berat, ganti ke fungisida sistemik triazol",
        produkId: "score",
        tipeRef: "agrokimia",
        namaProduk: "Score 250 EC",
      },
      {
        langkah:
          "Pangkas daun yang terinfeksi dan musnahkan (jangan dikomposkan)",
      },
      {
        langkah: "Perkuat ketahanan tanaman dengan pupuk kalium",
        produkId: "pupuk-kcl",
        tipeRef: "pupuk",
        namaProduk: "Pupuk KCl",
      },
    ],
    produkTerkait: ["kumulus", "score", "antracol", "pupuk-kcl", "pupuk-za"],
    tingkatBahaya: "sedang",
  },
  {
    id: "pd-layu-bakteri",
    nama: "Layu Bakteri (Ralstonia)",
    kategori: "bakteri",
    jenisTanaman: "Tomat, Cabai, Semangka",
    emoji: "🦠",
    penyebab:
      "Bakteri Ralstonia solanacearum yang menyumbat pembuluh pengangkut air tanaman. Menyebar lewat tanah, air, dan alat pertanian yang terkontaminasi.",
    gejala: [
      "Tanaman layu tiba-tiba meskipun tanah basah (layu total dalam 1–2 hari)",
      "Batang dibelah: terlihat lendir putih kekuningan keluar (tes rendam batang di air)",
      "Daun menguning tapi layu lebih dulu dari pada mengering",
      "Tes rendam: potong batang dan rendam di air bening — terlihat kolom cairan putih mengalir ke bawah",
    ],
    kondisiPemicu: [
      "Tanah terinfeksi bakteri dari musim sebelumnya",
      "Luka pada akar akibat hama atau pengolahan tanah",
      "Suhu tanah tinggi (di atas 28°C) memperburuk infeksi",
      "Irigasi berlebihan atau genangan",
    ],
    pencegahan: [
      "Rotasi tanaman minimal 3 tahun — jangan tanam solanaceae (tomat, cabai) berturut-turut",
      "Sterilisasi alat pertanian sebelum berpindah blok",
      "Gunakan varietas tahan Ralstonia",
      "Perbaiki drainase lahan",
    ],
    pengobatan: [
      {
        langkah: "Kocorkan bakterisida streptomisin ke pangkal tanaman",
        produkId: "agrept",
        tipeRef: "agrokimia",
        namaProduk: "Agrept 20 WP",
      },
      { langkah: "Cabut dan musnahkan tanaman terinfeksi — JANGAN komposkan" },
      {
        langkah:
          "Tabur kapur dolomit di bekas lubang tanaman untuk sterilisasi",
        produkId: "pupuk-dolomit",
        tipeRef: "pupuk",
        namaProduk: "Kapur Dolomit",
      },
      {
        langkah:
          "Inokulasi Trichoderma pada tanaman sehat di sekitarnya sebagai proteksi",
        produkId: "pupuk-trichoderma",
        tipeRef: "pupuk",
        namaProduk: "Trichoderma sp.",
      },
    ],
    produkTerkait: [
      "agrept",
      "pupuk-dolomit",
      "pupuk-trichoderma",
      "pupuk-hayati",
    ],
    tingkatBahaya: "tinggi",
  },
  {
    id: "pd-tungau-merah",
    nama: "Tungau Merah (Red Spider Mite)",
    kategori: "hama",
    jenisTanaman: "Cabai, Melon, Kacang",
    emoji: "🕷️",
    penyebab:
      "Tungau Tetranychus urticae — bukan serangga (berkaki 8), sehingga insektisida biasa tidak mempan. Menghisap cairan sel daun dengan cara menusuk sel satu per satu.",
    gejala: [
      "Daun bercak-bercak putih atau perak tersebar merata (bekas tusukan)",
      "Bagian bawah daun terlihat ada sarang web/jaring halus",
      "Daun mengering dari tepi lalu rontok",
      "Populasi besar terlihat bergerak di permukaan daun saat cuaca panas",
    ],
    kondisiPemicu: [
      "Musim kemarau panjang dan kering",
      "Suhu tinggi (di atas 30°C) memperburuk perkembangbiakan tungau",
      "Tidak ada musuh alami (predator tungau) di lahan",
      "Aplikasi insektisida berlebihan yang membunuh predator tungau",
    ],
    pencegahan: [
      "Jaga kelembaban lahan dengan irigasi yang tepat",
      "Tanam refugia untuk habitat predator tungau",
      "Hindari aplikasi insektisida berlebihan yang mematikan predator alami",
    ],
    pengobatan: [
      {
        langkah:
          "Semprot akarisida propargite khusus untuk tungau — insektisida biasa tidak efektif",
        produkId: "samite",
        tipeRef: "agrokimia",
        namaProduk: "Samite 135 EC",
      },
      {
        langkah: "Abamektin juga efektif untuk tungau dan bisa sebagai rotasi",
        produkId: "abacell",
        tipeRef: "agrokimia",
        namaProduk: "Abacell / Agrimec",
      },
      {
        langkah:
          "Semprot bagian bawah daun dengan tekanan tinggi — fokus di sana tungau bersembunyi",
      },
      {
        langkah:
          "Perkuat tanaman dengan pupuk kalium agar dinding sel lebih tahan",
        produkId: "pupuk-kcl",
        tipeRef: "pupuk",
        namaProduk: "Pupuk KCl",
      },
    ],
    produkTerkait: ["samite", "abacell", "kumulus", "pupuk-kcl"],
    tingkatBahaya: "sedang",
  },
];
