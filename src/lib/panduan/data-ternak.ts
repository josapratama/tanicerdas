// ============================================================
// PANDUAN BERTERNAK AYAM
// ============================================================

export interface PenyakitTernak {
  id: string;
  nama: string;
  emoji: string;
  kategori: "virus" | "bakteri" | "parasit" | "nutrisi" | "lingkungan";
  jenisHewan: string;
  tingkatBahaya: "rendah" | "sedang" | "tinggi";
  penyebab: string;
  gejala: string[];
  kondisiPemicu: string[];
  pencegahan: string[];
  pengobatan: string[];
}

export interface LangkahTernak {
  nomor: number;
  judul: string;
  detail: string;
  tips?: string;
  waktu?: string;
}

export interface TataCaraTernak {
  id: string;
  judul: string;
  emoji: string;
  deskripsi: string;
  langkah: LangkahTernak[];
}

export interface ObatVaksinTernak {
  id: string;
  nama: string;
  emoji: string;
  kategori: "vaksin" | "antibiotik" | "vitamin" | "antiparasit" | "desinfektan";
  deskripsi: string;
  fungsi: string[];
  caraPakai: string;
  dosis: string;
  waktu: string;
  peringatan?: string[];
  merekContoh?: string;
}

// ─── DATA PENYAKIT TERNAK ─────────────────────────────────────────────────────

export const dataPenyakitTernak: PenyakitTernak[] = [
  {
    id: "pt-nd",
    nama: "Newcastle Disease (ND / Tetelo)",
    emoji: "🐔",
    kategori: "virus",
    jenisHewan: "Ayam",
    tingkatBahaya: "tinggi",
    penyebab:
      "Virus Paramyxovirus tipe 1 — menyebar lewat udara, kotoran, dan kontak langsung dengan ayam terinfeksi. Virus sangat tahan di lingkungan.",
    gejala: [
      "Ayam lemah, tidak mau makan, dan diam di pojok",
      "Tortikolis — leher memutar/berputar tidak normal",
      "Diare berwarna hijau keputihan berbau busuk",
      "Batuk, bersin, dan napas berbunyi (ngorok)",
      "Produksi telur turun drastis atau berhenti",
      "Kematian massal dalam 2–5 hari pada wabah akut",
    ],
    kondisiPemicu: [
      "Tidak ada vaksinasi atau vaksinasi tidak terjadwal",
      "Memasukkan ayam baru tanpa karantina",
      "Stres akibat perubahan cuaca mendadak",
      "Kepadatan kandang yang berlebihan",
    ],
    pencegahan: [
      "Vaksinasi ND sesuai jadwal: DOC (tetes mata), umur 3 mgg (La Sota spray), umur 8 mgg (inaktif)",
      "Karantina ayam baru minimal 14 hari sebelum digabung",
      "Biosekuriti ketat — desinfeksi kandang, alas kaki tamu",
      "Jaga ventilasi kandang agar tidak lembab",
    ],
    pengobatan: [
      "Tidak ada obat spesifik untuk virus ND",
      "Isolasi ayam sakit segera dari populasi sehat",
      "Berikan elektrolit + vitamin C dalam air minum untuk dukung imunitas",
      "Berikan antibiotik (doxycycline/amoxicillin) untuk cegah infeksi sekunder bakteri",
      "Laporkan ke Dinas Peternakan jika kematian massal",
    ],
  },
  {
    id: "pt-crd",
    nama: "Chronic Respiratory Disease (CRD)",
    emoji: "😮‍💨",
    kategori: "bakteri",
    jenisHewan: "Ayam",
    tingkatBahaya: "sedang",
    penyebab:
      "Bakteri Mycoplasma gallisepticum — menular lewat udara dan peralatan kandang. Bisa ditularkan induk ke telur (vertikal). Sering muncul bersamaan dengan virus ND atau IB.",
    gejala: [
      "Batuk dan bersin terus-menerus",
      "Keluar lendir encer dari hidung",
      "Mata bengkak dan berair (konjungtivitis)",
      "Suara napas berbunyi seperti ngorok",
      "Nafsu makan menurun dan berat badan turun",
      "Produksi telur menurun",
    ],
    kondisiPemicu: [
      "Ventilasi kandang buruk — amonia tinggi dari kotoran",
      "Perubahan cuaca tiba-tiba atau musim hujan",
      "Kepadatan ayam terlalu tinggi",
      "Stres akibat vaksinasi atau pemindahan",
    ],
    pencegahan: [
      "Perbaiki ventilasi kandang — kurangi amonia",
      "Kurangi kepadatan ayam di kandang",
      "Beli DOC dari breeder bebas Mycoplasma (MG free)",
      "Vaksinasi Mycoplasma tersedia untuk ayam layer",
    ],
    pengobatan: [
      "Antibiotik: tylosin tartrate, enrofloxacin, atau doxycycline selama 5–7 hari",
      "Berikan vitamin E + C untuk perkuat imunitas",
      "Perbaiki sirkulasi udara kandang segera",
      "Perhatikan masa henti obat sebelum konsumsi telur/daging",
    ],
  },
  {
    id: "pt-gumboro",
    nama: "Infectious Bursal Disease (Gumboro)",
    emoji: "⚠️",
    kategori: "virus",
    jenisHewan: "Ayam",
    tingkatBahaya: "tinggi",
    penyebab:
      "Virus Birnavirus — sangat tahan di lingkungan kandang, sulit dihilangkan dengan desinfektan biasa. Menyerang bursa Fabricius (organ imun) sehingga merusak sistem kekebalan tubuh.",
    gejala: [
      "Diare cair berwarna putih dan berbusa",
      "Ayam tremor, gemetar, dan linglung",
      "Dehidrasi parah — ayam sering minum",
      "Nafsu makan hilang total",
      "Kematian mendadak pada ayam umur 3–6 minggu",
      "Bulu berdiri dan kusam",
    ],
    kondisiPemicu: [
      "Tidak ada program vaksinasi Gumboro",
      "Kandang terkontaminasi dari flush sebelumnya",
      "Biosekuriti buruk — virus bertahan berbulan-bulan di kandang",
    ],
    pencegahan: [
      "Vaksinasi Gumboro: umur 14–18 hari (tetes/air minum), booster umur 28 hari",
      "Desinfeksi kandang menyeluruh setelah panen (formalin, Virkon)",
      "Biarkan kandang kosong minimal 2 minggu sebelum isi ulang",
      "Hindari stres pada ayam",
    ],
    pengobatan: [
      "Tidak ada obat spesifik untuk virus Gumboro",
      "Berikan larutan elektrolit (gula + garam) dalam air minum",
      "Vitamin C dan multivitamin untuk pemulihan",
      "Antibiotik untuk cegah infeksi bakteri sekunder",
      "Mortalitas biasanya berhenti sendiri dalam 5–7 hari",
    ],
  },
  {
    id: "pt-ai",
    nama: "Avian Influenza (Flu Burung / AI)",
    emoji: "🦅",
    kategori: "virus",
    jenisHewan: "Ayam",
    tingkatBahaya: "tinggi",
    penyebab:
      "Virus Influenza A subtipe H5N1, H5N8 — zoonosis (bisa menular ke manusia). Menyebar lewat udara, kotoran unggas liar, dan peralatan terkontaminasi.",
    gejala: [
      "Kematian mendadak massal tanpa tanda-tanda sakit sebelumnya",
      "Kepala, jengger, dan pial bengkak berwarna kebiruan/hitam",
      "Perdarahan (petekie) di kulit kaki dan sisir",
      "Diare parah dan gangguan pernapasan berat",
      "Produksi telur berhenti total",
      "Telur cacat kulit atau tanpa kulit",
    ],
    kondisiPemicu: [
      "Kontak dengan unggas liar (bebek, burung migrasi)",
      "Tidak ada biosekuriti — orang luar masuk bebas",
      "Musim hujan saat unggas liar bermigrasi",
    ],
    pencegahan: [
      "Vaksinasi AI secara rutin setiap 3–4 bulan",
      "Biosekuriti ekstra ketat — larang masuk unggas liar",
      "Desinfeksi kendaraan dan tamu sebelum masuk area kandang",
      "Jangan beli unggas dari pasar tradisional yang tidak jelas asal-usulnya",
    ],
    pengobatan: [
      "⚠️ SEGERA laporkan ke Dinas Peternakan / Dinas Kesehatan",
      "Tidak ada pengobatan — fokus pada penahanan penyebaran",
      "Stamping out (pemusnahan) sesuai prosedur pemerintah jika dikonfirmasi AI",
      "Gunakan APD lengkap saat menangani ayam yang mati",
    ],
  },
  {
    id: "pt-kutu",
    nama: "Kutu & Tungau Ayam",
    emoji: "🦟",
    kategori: "parasit",
    jenisHewan: "Ayam",
    tingkatBahaya: "sedang",
    penyebab:
      "Ektoparasit: kutu ayam (Menopon gallinae), tungau merah (Dermanyssus gallinae). Tungau merah bersembunyi di celah kandang siang hari dan menghisap darah ayam malam hari.",
    gejala: [
      "Ayam sering menggaruk-garuk badan dan mematuk bulunya sendiri",
      "Bulu rontok berlebihan terutama di sekitar kloaka dan kepala",
      "Penurunan produksi telur dan nafsu makan",
      "Anemia (sisir pucat) pada infestasi berat",
      "Kegelisahan dan gangguan tidur (tungau merah aktif malam)",
    ],
    kondisiPemicu: [
      "Kandang lembab dan kotor — ideal untuk berkembang biak kutu",
      "Tidak ada program pengendalian ektoparasit",
      "Ayam baru yang belum diperiksa dimasukkan ke kandang",
    ],
    pencegahan: [
      "Bersihkan kandang rutin dan semprot desinfektan ke celah-celah kandang",
      "Sediakan tempat mandi debu (sand bath) untuk ayam kampung",
      "Periksa ayam baru sebelum masuk kandang",
      "Semprotkan akarisida ke kandang kosong setelah panen",
    ],
    pengobatan: [
      "Semprot permethrin atau cypermethrin ke seluruh kandang dan tubuh ayam",
      "Untuk tungau merah: semprot Neguvon atau akarisida ke celah kandang siang hari",
      "Ulangi pengobatan 7–10 hari kemudian untuk basmi generasi baru",
      "Berikan vitamin B kompleks untuk pemulihan kondisi ayam",
    ],
  },
  {
    id: "pt-coccidiosis",
    nama: "Koksidiosis (Coccidiosis)",
    emoji: "🦠",
    kategori: "parasit",
    jenisHewan: "Ayam",
    tingkatBahaya: "tinggi",
    penyebab:
      "Protozoa Eimeria spp. — parasit usus yang berkembang di kondisi litter lembab. Ookista sangat tahan di lingkungan dan bisa bertahan berbulan-bulan.",
    gejala: [
      "Diare berdarah atau diare coklat kehitaman",
      "Ayam lemah, malas, dan menggigil",
      "Penurunan berat badan drastis",
      "Dehidrasi — bulu kusam dan kulit kering",
      "Kematian tinggi pada ayam pedaging umur 3–6 minggu",
      "Feses berbau sangat busuk",
    ],
    kondisiPemicu: [
      "Litter (alas kandang) basah dan lembab",
      "Kepadatan ayam sangat tinggi",
      "Kandang tanpa program koksidiostat",
      "Cuaca hujan yang membuat lantai kandang lembab",
    ],
    pencegahan: [
      "Jaga litter tetap kering — ganti atau tambah jika basah",
      "Gunakan pakan dengan koksidiostat (amprolium) untuk broiler",
      "Vaksinasi Coccivac untuk ayam layer/breeder",
      "Kurangi kepadatan kandang dan perbaiki drainase",
    ],
    pengobatan: [
      "Berikan amprolium dalam air minum selama 5–7 hari",
      "Atau gunakan toltrazuril (Baycox) — satu kali dosis",
      "Berikan vitamin K untuk hentikan pendarahan usus",
      "Berikan multivitamin + elektrolit untuk pemulihan",
      "Ganti litter basah segera",
    ],
  },
];

// ─── DATA TATA CARA BERTERNAK ─────────────────────────────────────────────────

export const dataTataCaraTernak: TataCaraTernak[] = [
  {
    id: "tc-persiapan-kandang",
    judul: "Persiapan Kandang",
    emoji: "🏠",
    deskripsi:
      "Kandang yang baik adalah fondasi keberhasilan berternak. Persiapan matang sebelum memasukkan anak ayam sangat menentukan tingkat kematian dini.",
    langkah: [
      {
        nomor: 1,
        judul: "Pilih Lokasi Kandang",
        detail:
          "Pilih lokasi yang jauh dari pemukiman (min 500m), searah angin menjauh dari rumah, tidak tergenang air, dan mendapat sinar matahari pagi. Posisi kandang ideal membujur timur-barat agar sinar matahari bisa masuk.",
        tips: "Kandang yang terkena sinar matahari pagi membantu membunuh kuman dan menjaga litter tetap kering.",
        waktu: "Sebelum membangun",
      },
      {
        nomor: 2,
        judul: "Desain dan Konstruksi Kandang",
        detail:
          "Untuk ayam layer: kandang baterai (cage system) lebih efisien untuk produksi telur. Untuk pedaging: kandang postal (litter system) lebih umum. Luas kandang minimal 8–10 ekor per m² untuk pedaging, 4–5 ekor per m² untuk layer. Ventilasi harus cukup agar amonia tidak menumpuk.",
        tips: "Atap seng + plafon triplek membantu meredam panas. Tinggi kandang min 2.5m untuk sirkulasi udara optimal.",
      },
      {
        nomor: 3,
        judul: "Cuci dan Desinfeksi Kandang",
        detail:
          "Sebelum DOC masuk: cuci seluruh kandang dengan air bertekanan, semprotkan desinfektan (formalin 2% atau Virkon S 1:200) ke semua permukaan termasuk atap, dinding, dan lantai. Biarkan kandang kosong minimal 7 hari setelah desinfeksi.",
        tips: "Jangan memasukkan DOC ke kandang yang masih berbau amonia atau formalin kuat.",
        waktu: "7–14 hari sebelum DOC masuk",
      },
      {
        nomor: 4,
        judul: "Siapkan Brooding Area (untuk DOC)",
        detail:
          "Brooding adalah area hangat untuk anak ayam. Pasang tirai plastik untuk mengecilkan area. Pasang pemanas (brooder gasolek atau lampu 60W) agar suhu 32–35°C. Sebar litter (sekam padi) setebal 5–7cm. Pasang tempat minum dan pakan merata.",
        tips: "Tes suhu brooding 24 jam sebelum DOC datang. Indikator: DOC berkumpul di bawah brooder = terlalu dingin. DOC menyebar jauh = terlalu panas. DOC tersebar merata = suhu pas.",
        waktu: "24 jam sebelum DOC tiba",
      },
    ],
  },
  {
    id: "tc-pemilihan-doc",
    judul: "Pemilihan DOC",
    emoji: "🐣",
    deskripsi:
      "DOC (Day Old Chick) yang berkualitas adalah investasi terpenting. DOC jelek tidak bisa diperbaiki dengan manajemen terbaik sekalipun.",
    langkah: [
      {
        nomor: 1,
        judul: "Pilih Breeder Terpercaya",
        detail:
          "Beli DOC dari hatchery bersertifikat yang memiliki rekam jejak baik. Hatchery yang baik menyertakan surat keterangan vaksinasi Marek's dan asal induk bebas Mycoplasma (MG free). Hindari beli dari pasar tradisional tanpa kejelasan asal-usul.",
        tips: "Minta referensi dari peternak lain di daerah Anda untuk rekomendasi breeder terpercaya.",
      },
      {
        nomor: 2,
        judul: "Pilih Strain/Varietas Sesuai Tujuan",
        detail:
          "Ayam pedaging (broiler): Ross 308, Cobb 500 — pertumbuhan cepat, siap panen 28–35 hari. Ayam layer: Isa Brown, Lohmann Brown — produksi telur tinggi mulai umur 18–20 minggu. Ayam kampung: untuk pasar lokal, lebih tahan penyakit tapi pertumbuhan lambat.",
        tips: "Pilih strain yang umum dipakai peternak di wilayah Anda — lebih mudah dapat bibit dan informasinya.",
      },
      {
        nomor: 3,
        judul: "Ciri DOC Berkualitas Baik",
        detail:
          "Ciri DOC sehat: aktif bergerak dan responsif terhadap suara, pusar tertutup sempurna dan kering, kaki tegak dan kuat, mata cerah dan jernih, bulu halus dan bersih merata, berat badan minimal 37–42g (untuk broiler). Tolak DOC dengan pusar terbuka, kaki bengkok, atau mata kabur.",
        waktu: "Saat penerimaan DOC",
      },
      {
        nomor: 4,
        judul: "Handling DOC Saat Tiba",
        detail:
          "Segera masukkan DOC ke brooding area yang sudah hangat. Berikan air gula (50g/liter) atau elektrolit selama 2–4 jam pertama untuk mengatasi stres perjalanan. Baru kemudian berikan pakan starter. Jangan langsung memberi pakan sebelum DOC minum.",
        tips: "Hitung jumlah DOC dan catat. Pisahkan DOC yang lemah ke brooder terpisah untuk perawatan ekstra.",
        waktu: "Hari pertama",
      },
    ],
  },
  {
    id: "tc-pakan-nutrisi",
    judul: "Pakan & Nutrisi",
    emoji: "🌾",
    deskripsi:
      "Pakan adalah 60–70% biaya produksi ayam. Manajemen pakan yang tepat menentukan efisiensi dan profitabilitas usaha ternak.",
    langkah: [
      {
        nomor: 1,
        judul: "Fase Pakan Broiler",
        detail:
          "Starter (umur 0–14 hari): CP 511 atau sejenisnya, protein 22–23%, energi 3.000–3.100 kkal/kg. Grower (umur 14–21 hari): CP 512, protein 20–21%. Finisher (umur 21 hari–panen): CP 514/516, protein 18–19%, lebih tinggi energi. Pakan finisher tanpa antibiotik (withdrawal period).",
        tips: "Jangan terlalu cepat ganti fase pakan — transisi bertahap 3 hari (50:50 lalu 100%) untuk hindari stres pencernaan.",
        waktu: "Sesuai fase umur",
      },
      {
        nomor: 2,
        judul: "Fase Pakan Layer",
        detail:
          "Starter (0–6 mgg): protein 20–22%. Grower (6–16 mgg): protein 15–16%, batasi energi agar tidak terlalu gemuk. Pre-layer (16–18 mgg): tingkatkan kalsium ke 2%. Layer (18 mgg+): CP 524/522, protein 17–18%, kalsium 3.5–4% untuk kualitas kerabang telur.",
        tips: "Ayam layer yang terlalu gemuk saat masa produksi akan menurun produksi telurnya. Kontrol berat badan.",
      },
      {
        nomor: 3,
        judul: "Manajemen Pemberian Pakan",
        detail:
          "Berikan pakan 2–3 kali sehari di jam tetap agar ritme makan teratur. Jangan biarkan tempat pakan kosong lebih dari 2 jam. Bersihkan tempat pakan sebelum isi ulang agar pakan lama tidak mencemari yang baru. Simpan pakan di tempat kering dan tertutup — hindari jamur aflatoksin.",
        tips: "Feed Conversion Ratio (FCR) adalah indikator efisiensi. FCR broiler yang baik: 1.6–1.8 (1.6 kg pakan menghasilkan 1 kg daging).",
      },
      {
        nomor: 4,
        judul: "Air Minum",
        detail:
          "Air adalah nutrisi terpenting — ayam butuh air 2x lebih banyak dari pakan. Gunakan air bersih dan pastikan nipple/tempat minum tidak mampet. Bersihkan tempat minum setiap hari. Tambahkan vitamin C (1g/liter) saat cuaca panas atau ayam stres.",
        tips: "Cek kualitas air secara berkala. Air sumur yang tinggi Fe atau bakteri bisa sebabkan gangguan pencernaan.",
        waktu: "Setiap hari",
      },
    ],
  },
  {
    id: "tc-vaksinasi",
    judul: "Program Vaksinasi",
    emoji: "💉",
    deskripsi:
      "Vaksinasi adalah investasi termurah untuk mencegah kerugian terbesar. Ayam yang tidak divaksin adalah bom waktu.",
    langkah: [
      {
        nomor: 1,
        judul: "Jadwal Vaksinasi Broiler",
        detail:
          "Umur 1 hari (DOC): vaksin Marek's (dilakukan di hatchery). Umur 4–5 hari: ND tetes mata + IB (Infectious Bronchitis). Umur 14–18 hari: Gumboro (IBD) via air minum. Umur 21–24 hari: booster ND + booster Gumboro. Umur 28 hari: ND inaktif injeksi (jika diperlukan).",
        tips: "Vaksin yang disimpan tidak tepat (terpapar panas/cahaya) menjadi tidak efektif. Simpan di kulkas 2–8°C.",
        waktu: "Sesuai jadwal umur",
      },
      {
        nomor: 2,
        judul: "Jadwal Vaksinasi Layer",
        detail:
          "Sama seperti broiler ditambah: umur 6–8 mgg: ND inaktif injeksi. Umur 10–12 mgg: AI (Avian Influenza) injeksi. Umur 14–16 mgg: booster ND + AI. Umur 18 mgg (pre-layer): ND + IB + EDS inaktif combo. Selanjutnya: booster ND + AI setiap 3–4 bulan selama produksi.",
        tips: "Catat tanggal vaksinasi dan merek vaksin untuk evaluasi program. Respons titer antibodi bisa dicek via uji HI di laboratorium.",
      },
      {
        nomor: 3,
        judul: "Cara Vaksinasi yang Benar",
        detail:
          "Tetes mata: 1 tetes tepat di tengah mata, tunggu sampai meresap sebelum ayam dilepas. Air minum: puasakan air 2 jam sebelum, larutkan vaksin dalam air sedikit demi sedikit, habiskan dalam 1–2 jam. Spray: jarak nosel 30–40cm, ayam harus menghirup partikel vaksin. Injeksi: gunakan jarum baru tiap 500 ekor.",
        tips: "Lakukan vaksinasi pagi hari saat cuaca sejuk untuk kurangi stres. Jangan vaksinasi ayam yang sedang sakit.",
      },
      {
        nomor: 4,
        judul: "Evaluasi Pasca Vaksinasi",
        detail:
          "Vaksinasi hidup (tetes/spray) wajar jika menyebabkan reaksi ringan: bersin, sedikit sesak 2–3 hari setelah vaksinasi. Berikan vitamin dalam air minum sehari setelah vaksinasi. Jika reaksi berat atau kematian meningkat, konsultasi dengan dokter hewan.",
        tips: "Dokumen program vaksinasi penting untuk diagnosis ketika ayam sakit — dokter hewan perlu tahu riwayat vaksin.",
        waktu: "2–5 hari pasca vaksin",
      },
    ],
  },
  {
    id: "tc-biosekuriti",
    judul: "Biosekuriti",
    emoji: "🛡️",
    deskripsi:
      "Biosekuriti adalah garis pertahanan pertama. Lebih murah mencegah penyakit masuk daripada mengobati wabah.",
    langkah: [
      {
        nomor: 1,
        judul: "Zona dan Akses Kandang",
        detail:
          "Buat zona merah (area kandang steril) dan zona hijau (area luar). Pasang tempat cuci tangan dan bak celup desinfektan di pintu masuk. Batasi tamu — tamu harus ganti pakaian dan sepatu sebelum masuk zona merah. Larang orang yang baru dari pasar unggas atau peternakan lain masuk langsung.",
        tips: "Tuliskan aturan biosekuriti di papan informasi pintu masuk.",
      },
      {
        nomor: 2,
        judul: "Sanitasi Harian",
        detail:
          "Buang kotoran/litter menumpuk setiap hari. Bersihkan tempat pakan dan minum. Semprot desinfektan (Rodalon, Antec) di area masuk setiap hari. Cuci tangan sebelum dan sesudah masuk kandang. Gunakan pakaian kerja khusus kandang yang tidak dibawa ke luar.",
        tips: "Desinfektan efektif hanya jika permukaan sudah dibersihkan dari kotoran organik terlebih dulu.",
        waktu: "Setiap hari",
      },
      {
        nomor: 3,
        judul: "Pengelolaan Bangkai Ayam",
        detail:
          "Ayam mati harus segera dikeluarkan dari kandang setiap hari. Bangkai dikubur dalam (min 50cm) atau dibakar. Jangan dibuang di sekitar kandang atau sungai — menular ke unggas lain dan mencemari air. Catat jumlah ayam mati setiap hari untuk monitoring tingkat mortalitas.",
        tips: "Mortalitas normal broiler: <5% total. Jika mortalitas harian di atas 1%, investigasi segera.",
        waktu: "Setiap pagi",
      },
      {
        nomor: 4,
        judul: "Manajemen All-In All-Out",
        detail:
          "Sistem all-in all-out (AIAO) artinya semua ayam masuk pada hari yang sama dan keluar pada hari yang sama. Ini memutus siklus penularan penyakit antar kelompok umur. Setelah panen, kandang dikosongkan, dibersihkan total, dan didesinfeksi sebelum pengisian berikutnya.",
        tips: "AIAO adalah standar biosekuriti tertinggi di industri perunggasan komersial.",
      },
    ],
  },
];

// ─── DATA OBAT & VAKSIN ───────────────────────────────────────────────────────

export const dataObatVaksin: ObatVaksinTernak[] = [
  {
    id: "ov-nd-lasota",
    nama: "Vaksin ND La Sota",
    emoji: "💉",
    kategori: "vaksin",
    merekContoh: "ND La Sota (Vaksimune, Medivac, Boehringer)",
    deskripsi:
      "Vaksin hidup untuk mencegah Newcastle Disease (ND). Strain La Sota lebih ringan dari Hitchner B1 sehingga cocok untuk booster.",
    fungsi: [
      "Mencegah Newcastle Disease pada ayam",
      "Merangsang pembentukan antibodi aktif",
      "Efektif untuk vaksinasi massal via spray atau air minum",
    ],
    caraPakai: "Tetes mata (1 tetes/ekor), spray, atau air minum",
    dosis: "1 dosis per ekor (sesuai petunjuk label)",
    waktu: "Umur 4–5 hari (primer), umur 21–28 hari (booster)",
    peringatan: [
      "Simpan di kulkas 2–8°C, hindari cahaya langsung",
      "Jangan campur dengan disinfektan atau air berklorin",
      "Gunakan dalam 1 jam setelah dilarutkan",
    ],
  },
  {
    id: "ov-gumboro",
    nama: "Vaksin Gumboro (IBD)",
    emoji: "💉",
    kategori: "vaksin",
    merekContoh: "Cevac Bursine, Medivac Gumboro, Nobilis Gumboro",
    deskripsi:
      "Vaksin hidup untuk mencegah Infectious Bursal Disease (Gumboro). Penyakit ini merusak sistem imun sehingga ayam rentan terhadap penyakit lain.",
    fungsi: [
      "Mencegah Gumboro pada ayam umur 14–30 hari",
      "Melindungi bursa Fabricius sebagai organ imun",
    ],
    caraPakai: "Air minum (metode paling umum)",
    dosis: "1 dosis per ekor, larutkan dalam air bersih tanpa klorin",
    waktu: "Umur 14–18 hari (primer), umur 28 hari (booster)",
    peringatan: [
      "Puasakan air minum 2 jam sebelum vaksinasi",
      "Jangan vaksinasi ayam yang sedang sakit",
      "Simpan vaksin di kulkas — jangan beku",
    ],
  },
  {
    id: "ov-ai-inaktif",
    nama: "Vaksin AI Inaktif (H5N1)",
    emoji: "💉",
    kategori: "vaksin",
    merekContoh: "Medivac AI N1, Vaksiflu-S, Cevac Flu K",
    deskripsi:
      "Vaksin inaktif (killed vaccine) untuk mencegah Avian Influenza. Wajib untuk ayam layer dan breeder di Indonesia.",
    fungsi: [
      "Mencegah kematian massal akibat Avian Influenza",
      "Mengurangi risiko penularan ke manusia",
      "Mempertahankan produksi telur saat ada ancaman AI",
    ],
    caraPakai: "Injeksi intramuskular (otot dada atau paha)",
    dosis: "0.5ml per ekor untuk ayam di bawah 3 bulan, 1ml untuk dewasa",
    waktu: "Umur 4–5 minggu (primer), booster setiap 3–4 bulan",
    peringatan: [
      "Hanya boleh dilakukan oleh petugas berwenang (veteriner)",
      "Laporan ke Dinas Peternakan wajib setelah vaksinasi massal",
      "Cek titer antibodi 3–4 minggu setelah vaksin",
    ],
  },
  {
    id: "ov-amprolium",
    nama: "Amprolium (Anti-Koksidiosis)",
    emoji: "💊",
    kategori: "antiparasit",
    merekContoh: "Amprolium 20%, Corid, Amprol",
    deskripsi:
      "Obat koksidiosis yang bekerja sebagai antagonis thiamin untuk menghambat pertumbuhan Eimeria spp. di usus ayam.",
    fungsi: [
      "Mengobati dan mencegah koksidiosis",
      "Menghentikan diare berdarah akibat Eimeria",
      "Aman untuk broiler tanpa withdrawal period panjang",
    ],
    caraPakai: "Dicampur dalam air minum",
    dosis: "125–250mg/liter air minum selama 5–7 hari",
    waktu: "Saat gejala muncul atau sebagai pencegahan di umur 2–4 minggu",
    peringatan: [
      "Jangan berikan bersamaan dengan vitamin B1 (thiamin) — mengurangi efektivitas",
      "Perhatikan withdrawal period 3–5 hari sebelum panen",
    ],
  },
  {
    id: "ov-doxycycline",
    nama: "Doxycycline",
    emoji: "💊",
    kategori: "antibiotik",
    merekContoh: "Doxyvit, Doxyvet 100, Tetra-Vet",
    deskripsi:
      "Antibiotik broad-spectrum dari golongan tetrasiklin. Efektif untuk CRD (Mycoplasma), kolera ayam, dan infeksi bakteri sekunder.",
    fungsi: [
      "Mengobati CRD dan Mycoplasma",
      "Mengatasi infeksi bakteri sekunder pasca virus",
      "Efektif untuk penyakit saluran pernapasan",
    ],
    caraPakai: "Dicampur dalam air minum",
    dosis: "500mg–1g per liter air minum selama 5–7 hari",
    waktu: "Saat ada gejala pernapasan atau sebagai pencegahan pasca stres",
    peringatan: [
      "Withdrawal period: 7 hari untuk daging, telur tidak boleh dikonsumsi selama pengobatan",
      "Gunakan sesuai resep dokter hewan — resistensi antibiotik adalah ancaman serius",
      "Jangan dicampur dengan pakan berkalsium tinggi — mengurangi penyerapan",
    ],
  },
  {
    id: "ov-elektrolit",
    nama: "Elektrolit & Vitamin",
    emoji: "🧴",
    kategori: "vitamin",
    merekContoh: "Electrovit, Vita Stress, Fortevit",
    deskripsi:
      "Suplemen elektrolit dan multivitamin untuk mengatasi stres, dehidrasi, dan mendukung pemulihan setelah vaksinasi atau sakit.",
    fungsi: [
      "Mengatasi dehidrasi dan stres transportasi pada DOC",
      "Mendukung pemulihan pasca vaksinasi",
      "Meningkatkan nafsu makan dan daya tahan tubuh",
      "Mencegah penurunan produksi akibat stres panas",
    ],
    caraPakai: "Dicampur dalam air minum",
    dosis: "1–2g per liter air minum selama 3–5 hari atau sesuai kebutuhan",
    waktu:
      "Saat DOC tiba, pasca vaksinasi, cuaca panas ekstrem, atau ayam stres",
    peringatan: [
      "Ganti larutan setiap hari agar tidak basi",
      "Bukan pengganti pengobatan — hanya suportif",
    ],
  },
  {
    id: "ov-formalin",
    nama: "Formalin / Formaldehida",
    emoji: "🧪",
    kategori: "desinfektan",
    merekContoh: "Formalin 37–40%",
    deskripsi:
      "Desinfektan kuat untuk sterilisasi kandang dan peralatan. Efektif membunuh virus, bakteri, spora, dan jamur termasuk patogen yang sangat tahan.",
    fungsi: [
      "Sterilisasi kandang sebelum DOC masuk",
      "Fogging kandang untuk basmi pathogen udara",
      "Desinfeksi inkubator dan peralatan hatchery",
    ],
    caraPakai:
      "Larutkan 2% (20ml formalin 37% per liter air) untuk spraying. Fogging: 40ml/m³ ruangan tertutup",
    dosis: "2% untuk semprot, 2.5–5% untuk fumigasi",
    waktu:
      "Setelah kandang dikosongkan dan dibersihkan, biarkan 24 jam sebelum dipakai",
    peringatan: [
      "BERBAHAYA: gunakan masker, kacamata, dan sarung tangan",
      "Jangan gunakan saat ayam masih di dalam kandang",
      "Biarkan kandang berangin minimal 24 jam sebelum DOC masuk",
      "Karsinogen — batasi paparan berulang",
    ],
  },
];
