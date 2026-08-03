import type { TataCara } from "./types";

export const dataTataCara: TataCara[] = [
  {
    id: "tc-persiapan-lahan",
    judul: "Persiapan Lahan",
    emoji: "🏞️",
    deskripsi:
      "Fondasi bertani yang baik dimulai dari lahan yang dipersiapkan dengan benar. Tanah yang gembur, subur, dan berdrainase baik adalah kunci keberhasilan.",
    langkah: [
      {
        nomor: 1,
        judul: "Pilih & Bersihkan Lahan",
        detail:
          "Pilih lahan yang mendapat sinar matahari penuh (min 6–8 jam/hari). Bersihkan dari sisa tanaman lama, rumput liar, dan bebatuan. Bakar atau komposkan sisa tanaman — jangan biarkan membusuk di lahan karena bisa jadi sumber penyakit.",
        tips: "Hindari lahan yang sering tergenang air. Tanah agak miring kecil lebih baik untuk drainase.",
        waktu: "2–4 minggu sebelum tanam",
      },
      {
        nomor: 2,
        judul: "Cek & Perbaiki pH Tanah",
        detail:
          "Idealnya pH tanah untuk kebanyakan sayuran adalah 6.0–7.0. Beli alat pH meter murah di toko pertanian. Jika pH di bawah 5.5 (terlalu asam), tambahkan kapur dolomit. Jika di atas 7.5 (terlalu basa), tambahkan belerang atau kompos.",
        tips: "Bawa sampel tanah ke toko pertanian terdekat untuk uji pH.",
        produkTerkait: ["pupuk-dolomit"],
        waktu: "3–4 minggu sebelum tanam",
      },
      {
        nomor: 3,
        judul: "Olah Tanah (Bajak & Cangkul)",
        detail:
          "Gemburkan tanah sedalam 20–30 cm menggunakan cangkul, bajak, atau traktor. Tujuannya agar akar bisa menembus tanah dengan mudah. Pecah gumpalan tanah besar hingga seperti tepung kasar.",
        tips: "Tanah yang baik saat diremas akan menggumpal tapi mudah diurai dengan satu jari.",
        waktu: "2–3 minggu sebelum tanam",
      },
      {
        nomor: 4,
        judul: "Tambahkan Pupuk Dasar",
        detail:
          "Setelah tanah gembur, aplikasikan pupuk organik (pupuk kandang matang atau kompos) dan pupuk kimia dasar (SP-36 dan KCl atau NPK). Campurkan merata dengan tanah. Pupuk ini menjadi modal nutrisi awal tanaman.",
        tips: "Jangan pakai pupuk kandang mentah — fermentasinya menghasilkan panas yang bisa membakar akar.",
        produkTerkait: [
          "pupuk-kandang",
          "pupuk-kompos",
          "pupuk-sp36",
          "pupuk-kcl",
        ],
        waktu: "2 minggu sebelum tanam",
      },
      {
        nomor: 5,
        judul: "Buat Bedengan",
        detail:
          "Buat bedengan selebar 80–120 cm, tinggi 20–30 cm, dengan parit antar bedengan selebar 30–40 cm. Bedengan tinggi penting untuk: (1) mencegah genangan air, (2) memudahkan panen, (3) sirkulasi udara lebih baik.",
        tips: "Di lahan berlereng, buat bedengan melintang lereng (teras) untuk mencegah erosi.",
        waktu: "1–2 minggu sebelum tanam",
      },
      {
        nomor: 6,
        judul: "Pasang Mulsa (Sangat Dianjurkan)",
        detail:
          "Tutup bedengan dengan mulsa plastik hitam perak (sisi perak menghadap atas). Mulsa berfungsi: (1) menekan gulma, (2) menjaga kelembaban, (3) memantulkan cahaya untuk repel serangga, (4) mencegah percikan tanah.",
        tips: "Beri lubang di mulsa menggunakan kaleng bekas yang dipanaskan, jarak sesuai kebutuhan tanaman.",
        waktu: "1 minggu sebelum tanam",
      },
    ],
  },
  {
    id: "tc-persemaian",
    judul: "Persemaian (Semai Benih)",
    emoji: "🌱",
    deskripsi:
      "Persemaian adalah 'ruang bayi' tanaman Anda. Di sini benih berkecambah dan bibit tumbuh hingga cukup kuat untuk dipindah ke lahan.",
    langkah: [
      {
        nomor: 1,
        judul: "Pilih Benih Berkualitas",
        detail:
          "Beli benih dari toko pertanian terpercaya. Pilih yang berlabel 'benih bersertifikat'. Pilih varietas yang tahan penyakit dan produktif. Cek tanggal kadaluarsa benih.",
        tips: "Uji daya kecambah: rendam 10 benih di air selama 8 jam, letakkan di tisu basah 3–5 hari. Hitung berapa yang berkecambah.",
        waktu: "Sebelum musim tanam",
      },
      {
        nomor: 2,
        judul: "Siapkan Media Semai",
        detail:
          "Campurkan: 2 bagian tanah gembur + 1 bagian pupuk kandang matang + 1 bagian sekam bakar (atau cocopeat). Campuran ini ringan, gembur, dan drainase baik — sempurna untuk bibit.",
        produkTerkait: ["pupuk-kandang", "pupuk-hayati"],
        waktu: "1 minggu sebelum semai",
      },
      {
        nomor: 3,
        judul: "Semai Benih",
        detail:
          "Isi polybag kecil atau tray semai dengan media. Buat lubang sedalam 0.5–1 cm. Masukkan 1–2 benih per lubang. Tutup tipis dengan media. Siram hati-hati menggunakan sprayer.",
        tips: "Rendam benih dalam air hangat 50°C selama 15–30 menit sebelum semai untuk mempercepat perkecambahan.",
        waktu: "Hari semai",
      },
      {
        nomor: 4,
        judul: "Rawat Bibit",
        detail:
          "Siram setiap pagi secara hati-hati. Letakkan di tempat yang mendapat cahaya namun tidak terkena hujan deras. Setelah 3–5 hari bibit mulai berkecambah. Setelah 2–3 minggu (2–4 daun sejati) bibit siap dipindah.",
        tips: "Beri sedikit pupuk cair organik (POC) encer setiap seminggu sekali untuk mempercepat pertumbuhan.",
        produkTerkait: ["pupuk-organik-cair"],
        waktu: "2–4 minggu setelah semai",
      },
    ],
  },
  {
    id: "tc-pemupukan",
    judul: "Pemupukan yang Benar",
    emoji: "🌾",
    deskripsi:
      "Pemupukan yang tepat sasaran — jenis pupuk yang benar, dosis yang tepat, dan waktu yang pas — adalah perbedaan antara panen melimpah dan tanaman kurus.",
    langkah: [
      {
        nomor: 1,
        judul: "Pahami 3 Unsur Utama (N, P, K)",
        detail:
          "Setiap tanaman butuh 3 unsur utama: N (Nitrogen) = daun hijau dan pertumbuhan. P (Fosfor) = akar kuat, bunga, dan buah. K (Kalium) = kualitas buah dan ketahanan penyakit.",
        tips: "Ingat: N = iNgat 'aNgin' daun, P = Pertumbuhan akar & buah, K = Kualitas.",
        produkTerkait: [
          "pupuk-urea",
          "pupuk-sp36",
          "pupuk-kcl",
          "pupuk-npk-mutiara",
        ],
      },
      {
        nomor: 2,
        judul: "Pupuk Dasar (Sebelum/Saat Tanam)",
        detail:
          "Saat persiapan lahan, aplikasikan: pupuk kandang/kompos + SP-36 (fosfat) + KCl. Pupuk ini larut lambat dan menyediakan hara untuk awal pertumbuhan.",
        produkTerkait: ["pupuk-kandang", "pupuk-sp36", "pupuk-kcl"],
        waktu: "1–2 minggu sebelum tanam",
      },
      {
        nomor: 3,
        judul: "Pupuk Susulan Fase Vegetatif",
        detail:
          "2–4 minggu setelah tanam, beri pupuk Urea atau ZA (nitrogen) untuk memacu pertumbuhan daun dan batang. Taburkan melingkar di sekitar tanaman, lalu siram.",
        tips: "Jika daun mulai pucat/kuning — tanda kekurangan N, segera aplikasikan Urea.",
        produkTerkait: ["pupuk-urea", "pupuk-za", "pupuk-npk-phonska"],
        waktu: "2–4 MST (Minggu Setelah Tanam)",
      },
      {
        nomor: 4,
        judul: "Pupuk Susulan Fase Generatif (Berbunga-Berbuah)",
        detail:
          "Saat tanaman mulai berbunga, kurangi N dan tingkatkan K. Gunakan NPK formula tinggi K atau tambah KCl. Ini meningkatkan kualitas dan ukuran buah. Bisa tambah boron foliar untuk cegah bunga rontok.",
        produkTerkait: [
          "pupuk-npk-mutiara",
          "pupuk-kcl",
          "pupuk-boron",
          "pupuk-mkp",
        ],
        waktu: "Saat mulai berbunga",
      },
      {
        nomor: 5,
        judul: "Pupuk Foliar (Semprot Daun)",
        detail:
          "Pupuk cair semprot daun (foliar) menyerap lebih cepat daripada pupuk tanah. Gunakan saat tanaman butuh pertolongan cepat atau untuk top-up hara mikro. Semprot pagi hari.",
        produkTerkait: ["pupuk-organik-cair"],
        tips: "Bisa campurkan pupuk foliar bersamaan dengan pestisida untuk efisiensi.",
        waktu: "Sepanjang masa tanam sesuai kebutuhan",
      },
    ],
  },
  {
    id: "tc-pengairan",
    judul: "Pengairan & Manajemen Air",
    emoji: "💧",
    deskripsi:
      "Air adalah kebutuhan mutlak tanaman. Terlalu sedikit = kering dan layu. Terlalu banyak = akar busuk dan penyakit jamur.",
    langkah: [
      {
        nomor: 1,
        judul: "Prinsip Dasar: Cek Dulu, Siram Kemudian",
        detail:
          "Sebelum menyiram, tancapkan jari sedalam 3–5 cm ke tanah. Jika terasa lembab = JANGAN siram. Jika sudah kering = SIRAM. Frekuensi siram tidak perlu setiap hari.",
        tips: "Penyiraman terbaik pagi hari (jam 6–9) agar daun kering sebelum malam.",
      },
      {
        nomor: 2,
        judul: "Teknik Penyiraman",
        detail:
          "Siram di zona akar (sekitar pangkal tanaman), bukan dari atas mengenai daun. Daun yang sering basah = undangan untuk jamur. Untuk skala kecil: gunakan gembor. Skala besar: sistem drip irigasi sangat dianjurkan.",
        tips: "Drip irigasi bisa DIY dengan botol bekas: lubangi tutup botol, balik dan tancapkan ke tanah.",
      },
      {
        nomor: 3,
        judul: "Tanda Tanaman Kekurangan Air",
        detail:
          "Daun layu di siang hari tapi segar lagi di pagi hari = kurang air. Daun menggulung = stress kekeringan. Tepi daun coklat kering = kekurangan air parah. Segera siram jika melihat gejala ini.",
      },
      {
        nomor: 4,
        judul: "Tanda Tanaman Kelebihan Air",
        detail:
          "Tanah terus basah, berlendir = drainase buruk. Daun menguning dari bawah = akar mulai membusuk. Jamur tumbuh di permukaan tanah. Segera perbaiki drainase dan kurangi penyiraman.",
      },
    ],
  },
  {
    id: "tc-panen",
    judul: "Panen & Pasca Panen",
    emoji: "🌽",
    deskripsi:
      "Momen yang ditunggu! Panen di waktu yang tepat menentukan kualitas dan harga jual hasil kebun.",
    langkah: [
      {
        nomor: 1,
        judul: "Ciri Buah Siap Panen",
        detail:
          "Cabai: warna merah merata, kulit mengkilap, keras. Semangka: suara 'buk' saat dipukul, sulur dekat buah kering, warna pudar di bagian bawah. Tomat: warna penuh, sedikit lunak saat ditekan.",
        tips: "Panen pagi hari saat suhu masih sejuk untuk menjaga kesegaran.",
      },
      {
        nomor: 2,
        judul: "Cara Memanen dengan Benar",
        detail:
          "Gunakan gunting atau pisau bersih (sterilkan dengan alkohol). Jangan menarik atau memutar buah karena bisa merusak tanaman. Potong tangkai buah, sisakan tangkai 1–2 cm untuk daya simpan lebih lama.",
      },
      {
        nomor: 3,
        judul: "Penanganan Pasca Panen",
        detail:
          "Sortasi: pisahkan yang rusak dari yang bagus. Simpan di tempat sejuk dan berventilasi. Jangan tumpuk terlalu tebal. Untuk jarak jauh: beri lapisan koran antar lapisan buah.",
        tips: "Jangan mencuci buah sebelum disimpan — kelembaban mempercepat pembusukan.",
      },
      {
        nomor: 4,
        judul: "Rawat Tanaman Setelah Panen",
        detail:
          "Setelah panen besar, tanaman perlu 'recovery'. Berikan pupuk NPK susulan dan pastikan tanah lembab. Pangkas cabang yang sudah tidak produktif. Tanaman cabai bisa panen 8–12 kali selama satu musim jika dirawat baik.",
        produkTerkait: ["pupuk-npk-mutiara", "pupuk-organik-cair"],
      },
    ],
  },
  {
    id: "tc-pengendalian-hama",
    judul: "Pengendalian Hama Terpadu (PHT)",
    emoji: "🛡️",
    deskripsi:
      "PHT adalah pendekatan bijak: monitor dulu, baru bertindak. Pestisida adalah senjata terakhir — bukan yang pertama. Tanaman sehat yang dirawat baik jauh lebih tahan hama dan penyakit.",
    langkah: [
      {
        nomor: 1,
        judul: "Monitor Lahan Secara Rutin",
        detail:
          "Kunjungi kebun setiap pagi dan sore. Perhatikan tanda-tanda serangan: daun berlubang, bercak, daun menggulung, atau tanaman layu. Gunakan kaca pembesar (10x) untuk melihat hama kecil seperti tungau dan thrips. Catat jumlah dan lokasi serangan.",
        tips: "Pasang perangkap kuning sticky trap untuk monitoring populasi serangga terbang.",
        waktu: "Setiap pagi dan sore hari",
      },
      {
        nomor: 2,
        judul: "Identifikasi: Hama atau Penyakit?",
        detail:
          "Hama (serangga/tungau): biasanya ada bekas gigitan, lubang, atau hewan kecil terlihat. Penyakit jamur: bercak dengan warna dan pola tertentu, serbuk atau lapisan di daun. Penyakit bakteri: bau busuk, lendir, atau luka berair. Fisiologis: merata dan simetris, tidak ada organisme penyebab.",
        tips: "Foto gejala dan bandingkan dengan panduan penyakit di aplikasi ini untuk diagnosis akurat.",
      },
      {
        nomor: 3,
        judul: "Tindakan Non-Kimia Dulu (Pengendalian Fisik & Hayati)",
        detail:
          "Coba tindakan mekanis terlebih dahulu: cabut/buang tanaman terinfeksi parah, pangkas daun terserang, gunakan perangkap, pasang jaring, atau semprotkan air bertekanan. Tambahkan musuh alami: Trichoderma, Beauveria bassiana untuk jamur entomopatogen, atau lepas predator.",
        produkTerkait: ["pupuk-trichoderma", "pupuk-hayati"],
        waktu: "Segera saat pertama kali serangan terdeteksi",
      },
      {
        nomor: 4,
        judul: "Rotasi Pestisida (Cegah Resistensi)",
        detail:
          "Jika harus menggunakan pestisida kimia, ROTASI bahan aktif setiap 2–3 kali semprot. Contoh: semprot 1 pakai Abamektin, semprot 2 pakai Spinosad, semprot 3 pakai Sipermetrin — lalu ulangi. Resistensi terjadi saat satu produk dipakai terus-menerus.",
        produkTerkait: ["abacell", "spintor", "sidametrin"],
        tips: "Bahan aktif berbeda = mekanisme kerja berbeda = tidak resistensi.",
      },
      {
        nomor: 5,
        judul: "Pestisida sebagai Last Resort",
        detail:
          "Gunakan pestisida kimia hanya saat serangan sudah melewati batas ekonomi (yaitu akan rugi besar jika tidak ditangani). Pilih pestisida yang tepat sasaran, dosis sesuai anjuran, dan jangan semprotkan saat angin kencang atau hujan akan turun.",
        produkTerkait: ["antracol", "dithane-m45", "score", "confidor"],
        tips: "Selalu baca label pestisida — gunakan APD lengkap: masker, sarung tangan, kacamata.",
      },
      {
        nomor: 6,
        judul: "Tanam Refugia & Musuh Alami",
        detail:
          "Tanam bunga-bungaan di pinggir kebun (marigold, bunga matahari, kenikir, zinnia). Refugia adalah 'hotel' untuk serangga berguna: lebah penyerbuk, kumbang predator, dan parasitoid. Ekosistem yang seimbang mengurangi serangan hama secara alami.",
        tips: "Tanam refugia di pinggiran bedengan atau di pojok kebun — tidak perlu lahan tambahan.",
        waktu:
          "Tanam 2–4 minggu sebelum tanaman utama untuk siap berbunga bersamaan",
      },
    ],
  },
];
