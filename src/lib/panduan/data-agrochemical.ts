import type { AgrokimiaData, KategoriAgrokimia } from "./types";

// ─── Penjelasan Kategori untuk Orang Awam ────────────────────────────────────

export const penjelasanKategoriAgrokimia: Record<
  KategoriAgrokimia,
  { judul: string; deskripsi: string; emoji: string; warnaBadge: string }
> = {
  insektisida: {
    judul: "Insektisida",
    emoji: "🐛",
    deskripsi:
      "Obat pembasmi serangga hama. Insektisida membunuh atau mengusir serangga yang merusak tanaman seperti kutu, ulat, thrips, dan belalang. Cara kerjanya: kontak langsung (kena serangga langsung mati), sistemik (diserap tanaman, serangga mati saat menghisap), atau lambung (serangga mati setelah makan tanaman).",
    warnaBadge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  fungisida: {
    judul: "Fungisida",
    emoji: "🍄",
    deskripsi:
      "Obat pembasmi jamur penyakit. Jamur adalah penyebab paling umum penyakit tanaman (antraknosa, busuk, rebah semai, dll). Fungisida ada yang preventif (mencegah infeksi — dipakai sebelum serangan) dan kuratif (mengobati setelah infeksi). Selalu lebih baik mencegah daripada mengobati.",
    warnaBadge:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  bakterisida: {
    judul: "Bakterisida",
    emoji: "🦠",
    deskripsi:
      "Obat pembasmi bakteri penyakit tanaman. Penyakit bakteri biasanya ditandai dengan bau busuk, lendir, atau luka berair pada tanaman. Lebih sulit diobati dari jamur, sehingga sanitasi dan pencegahan sangat penting.",
    warnaBadge:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  },
  akarisida: {
    judul: "Akarisida",
    emoji: "🕷️",
    deskripsi:
      "Obat pembasmi tungau (mite). Tungau bukan serangga (berkaki 8 seperti laba-laba), sehingga insektisida biasa tidak mempan. Tungau merah/kuning menghisap cairan daun hingga daun bercak-bercak putih dan kering. Perlu produk khusus akarisida.",
    warnaBadge:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  herbisida: {
    judul: "Herbisida",
    emoji: "🌿",
    deskripsi:
      "Obat pembasmi gulma (rumput liar dan tanaman pengganggu). Ada yang selektif (hanya membunuh gulma tertentu) dan non-selektif (membunuh semua tumbuhan — hati-hati!). Selalu gunakan sesuai petunjuk, salah aplikasi bisa membunuh tanaman budidaya.",
    warnaBadge:
      "bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300",
  },
  zpt: {
    judul: "ZPT (Zat Pengatur Tumbuh)",
    emoji: "🌱",
    deskripsi:
      "Hormon tanaman sintetis untuk mengatur pertumbuhan. Bisa mempercepat tumbuh akar (auksin), merangsang buah lebih besar (giberelin), atau mencegah gugur buah (sitokinin). Bukan pupuk dan bukan pestisida, tapi pengatur fisiologi tanaman.",
    warnaBadge:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
};

// ─── Data Agrokimia ───────────────────────────────────────────────────────────

export const dataAgrokimia: AgrokimiaData[] = [
  {
    id: "abacell",
    nama: "Abacell 18 EC (Abamektin)",
    kategori: "insektisida",
    bahanAktif: "Abamektin 18 g/l",
    merekDagang: ["Abacell", "Agrimec", "Vertimec", "Demolish"],
    deskripsiKategori: penjelasanKategoriAgrokimia.insektisida.deskripsi,
    deskripsiProduk:
      "Insektisida berbahan aktif abamektin yang bekerja dengan cara kontak dan lambung. Sangat efektif untuk thrips, tungau, dan lalat buah. Uniknya, abamektin juga efektif untuk tungau (berkaki 8) sehingga sekaligus berfungsi sebagai akarisida.",
    targetHamaPenyakit: [
      "Thrips",
      "Tungau merah",
      "Tungau kuning",
      "Lalat buah",
      "Leaf miner",
    ],
    caraPakai:
      "Larutkan dalam air dan semprotkan merata ke seluruh bagian tanaman terutama bagian bawah daun",
    dosis: "0.5–1 ml per liter air",
    waktuPakai:
      "Saat populasi hama mulai terdeteksi atau sebagai pencegahan saat cuaca kering",
    intervalSemprot: "7–10 hari sekali",
    karensaHari: 7,
    peringatan: [
      "Gunakan APD lengkap: masker, sarung tangan, kacamata",
      "Berbahaya untuk lebah — jangan semprot saat tanaman sedang berbunga",
      "Jangan semprotkan ke badan air atau kolam ikan",
      "Cuci tangan dan muka setelah aplikasi",
    ],
    emoji: "🐛",
  },
  {
    id: "samite",
    nama: "Samite 135 EC (Propargite)",
    kategori: "akarisida",
    bahanAktif: "Propargite 135 g/l",
    merekDagang: ["Samite", "Omite", "Kelthane"],
    deskripsiKategori: penjelasanKategoriAgrokimia.akarisida.deskripsi,
    deskripsiProduk:
      "Akarisida khusus untuk tungau merah dan tungau kuning yang sudah tidak mempan insektisida biasa. Propargite bekerja dengan mengganggu sistem saraf tungau. Sangat efektif untuk serangan tungau berat pada cabai, melon, dan kacang.",
    targetHamaPenyakit: [
      "Tungau merah (Tetranychus urticae)",
      "Tungau kuning (Polyphagotarsonemus latus)",
      "Tungau laba-laba",
    ],
    caraPakai:
      "Semprotkan merata ke seluruh tanaman, fokus ke bagian bawah daun tempat tungau bersembunyi",
    dosis: "1–2 ml per liter air",
    waktuPakai:
      "Saat daun mulai bercak putih perak atau saat terlihat tungau dengan kaca pembesar",
    intervalSemprot: "7–14 hari sekali",
    karensaHari: 14,
    peringatan: [
      "Gunakan masker dan sarung tangan — bau menyengat",
      "Rotasi dengan akarisida berbahan aktif berbeda agar tidak terjadi resistensi",
      "Jangan dicampur dengan produk basa (pH tinggi)",
    ],
    emoji: "🕷️",
  },
  {
    id: "avidor",
    nama: "Avidor 25 WP (Imidakloprid)",
    kategori: "insektisida",
    bahanAktif: "Imidakloprid 25%",
    merekDagang: ["Avidor", "Confidor 25 WP", "Admire", "Gaucho"],
    deskripsiKategori: penjelasanKategoriAgrokimia.insektisida.deskripsi,
    deskripsiProduk:
      "Insektisida sistemik — diserap oleh tanaman dan tersebar ke seluruh jaringan. Serangga yang menghisap cairan tanaman akan mati. Sangat efektif untuk hama penghisap seperti kutu daun, kutu kebul, thrips, dan wereng.",
    targetHamaPenyakit: [
      "Kutu daun (Aphid)",
      "Kutu kebul (Bemisia tabaci)",
      "Thrips",
      "Wereng",
      "Kutu putih",
    ],
    caraPakai:
      "Larutkan dan semprotkan, atau kocorkan ke tanah agar diserap akar",
    dosis: "0.5–1 gram per liter air",
    waktuPakai: "Saat populasi hama penghisap mulai meningkat",
    intervalSemprot: "10–14 hari sekali",
    karensaHari: 21,
    peringatan: [
      "⚠️ SANGAT BERBAHAYA UNTUK LEBAH — jangan semprot saat tanaman berbunga",
      "Imidakloprid bersifat sistemik, masuk ke seluruh jaringan tanaman termasuk nektar",
      "Pakai APD lengkap saat aplikasi",
      "Jauhkan dari jangkauan anak-anak",
    ],
    emoji: "🐝",
  },
  {
    id: "antracol",
    nama: "Antracol 70 WP (Propineb)",
    kategori: "fungisida",
    bahanAktif: "Propineb 70%",
    merekDagang: ["Antracol", "Propineb 70 WP"],
    deskripsiKategori: penjelasanKategoriAgrokimia.fungisida.deskripsi,
    deskripsiProduk:
      "Fungisida kontak berspektrum luas yang efektif untuk antraknosa, bercak daun, dan busuk buah. Bekerja secara preventif dengan membentuk lapisan pelindung di permukaan tanaman. Salah satu fungisida paling umum dipakai petani cabai dan semangka.",
    targetHamaPenyakit: [
      "Antraknosa (Colletotrichum)",
      "Bercak daun",
      "Busuk buah",
      "Embun bulu",
      "Alternaria",
    ],
    caraPakai:
      "Larutkan dan semprotkan merata ke seluruh bagian tanaman termasuk bagian bawah daun",
    dosis: "2–3 gram per liter air",
    waktuPakai:
      "Preventif sejak 2 MST, atau saat cuaca mendukung perkembangan jamur (lembab, berawan)",
    intervalSemprot: "5–7 hari sekali preventif, 3–5 hari saat serangan",
    karensaHari: 3,
    peringatan: [
      "Fungisida kontak — tidak diserap tanaman, harus melapisi permukaan dengan baik",
      "Efektivitas menurun jika terkena hujan dalam 4 jam setelah semprot",
      "Rotasi dengan fungisida sistemik agar tidak terjadi resistensi",
    ],
    emoji: "🍄",
  },
  {
    id: "dithane-m45",
    nama: "Dithane M-45 (Mankozeb 80 WP)",
    kategori: "fungisida",
    bahanAktif: "Mankozeb 80%",
    merekDagang: ["Dithane M-45", "Manzate", "Mancozeb 80 WP", "Vondozeb"],
    deskripsiKategori: penjelasanKategoriAgrokimia.fungisida.deskripsi,
    deskripsiProduk:
      "Fungisida kontak berspektrum sangat luas dan harga paling terjangkau. Mankozeb efektif terhadap hampir semua jamur penyakit. Menjadi 'pupuk' wajib di kantong petani karena murah dan tersedia di mana-mana.",
    targetHamaPenyakit: [
      "Antraknosa",
      "Embun bulu (Downy mildew)",
      "Bercak daun (Alternaria, Cercospora)",
      "Busuk buah",
      "Early blight, Late blight",
    ],
    caraPakai:
      "Larutkan dan semprotkan merata — aduk dulu karena berbentuk powder",
    dosis: "2–3 gram per liter air",
    waktuPakai: "Preventif rutin sepanjang musim, terutama musim hujan",
    intervalSemprot: "7 hari sekali preventif",
    karensaHari: 7,
    peringatan: [
      "Fungisida kontak — harus disemprot merata untuk efektif",
      "Jangan campur dengan produk bersifat alkali (akan rusak)",
      "Gunakan masker — serbuk mankozeb bisa terhirup",
    ],
    emoji: "🌫️",
  },
  {
    id: "ridomil-gold",
    nama: "Ridomil Gold MZ 68 WG",
    kategori: "fungisida",
    bahanAktif: "Metalaksil-M 4% + Mankozeb 64%",
    merekDagang: ["Ridomil Gold MZ", "Ridomil Gold Plus"],
    deskripsiKategori: penjelasanKategoriAgrokimia.fungisida.deskripsi,
    deskripsiProduk:
      "Fungisida sistemik + kontak kombinasi untuk penyakit Phytophthora dan Pythium — dua jamur air penyebab busuk paling ganas. Metalaksil-M bekerja dari dalam tanaman (sistemik), sementara Mankozeb melindungi permukaan. Wajib ada di pertanian cabai dan melon.",
    targetHamaPenyakit: [
      "Phytophthora (busuk batang, busuk buah)",
      "Pythium (rebah semai, busuk akar)",
      "Embun bulu (Downy mildew)",
      "Late blight tomat dan kentang",
    ],
    caraPakai:
      "Larutkan dan semprotkan ke seluruh tanaman termasuk zona pangkal batang",
    dosis: "2.5 gram per liter air",
    waktuPakai: "Preventif saat musim hujan dan saat kondisi sangat lembab",
    intervalSemprot: "7–10 hari sekali",
    karensaHari: 7,
    peringatan: [
      "Jangan digunakan terus-menerus — rotasi dengan fungisida lain agar tidak resistensi",
      "Mahal tapi efektif untuk kondisi darurat serangan Phytophthora",
      "Gunakan APD lengkap",
    ],
    emoji: "💊",
  },
  {
    id: "score",
    nama: "Score 250 EC (Difenokonazol)",
    kategori: "fungisida",
    bahanAktif: "Difenokonazol 250 g/l",
    merekDagang: ["Score", "Dividend", "Difcor 250 EC"],
    deskripsiKategori: penjelasanKategoriAgrokimia.fungisida.deskripsi,
    deskripsiProduk:
      "Fungisida sistemik kuat dari golongan triazol. Diserap tanaman dan menyebar ke seluruh jaringan. Efektif untuk bercak daun berat, antraknosa yang sudah menyebar, dan embun tepung. Digunakan saat serangan sudah cukup parah.",
    targetHamaPenyakit: [
      "Antraknosa berat (Colletotrichum)",
      "Bercak daun Alternaria",
      "Embun tepung (Powdery mildew)",
      "Busuk buah",
      "Cercospora leaf spot",
    ],
    caraPakai: "Semprotkan merata ke seluruh bagian tanaman",
    dosis: "0.5–1 ml per liter air",
    waktuPakai:
      "Saat serangan jamur sudah terlihat dan perlu penanganan kuratif",
    intervalSemprot: "7–10 hari sekali",
    karensaHari: 14,
    peringatan: [
      "Fungisida sistemik kuat — jangan gunakan terlalu sering agar tidak terjadi resistensi",
      "Rotasi dengan fungisida kontak (Mankozeb) untuk program PHT",
      "Gunakan APD: masker dan sarung tangan",
    ],
    emoji: "🎯",
  },
  {
    id: "agrept",
    nama: "Agrept 20 WP (Streptomisin Sulfat)",
    kategori: "bakterisida",
    bahanAktif: "Streptomisin sulfat 20%",
    merekDagang: ["Agrept", "Agrimycin", "Streptomycin 20 WP"],
    deskripsiKategori: penjelasanKategoriAgrokimia.bakterisida.deskripsi,
    deskripsiProduk:
      "Bakterisida berbahan aktif antibiotik streptomisin — sama seperti antibiotik yang dipakai dokter, tapi untuk tanaman. Efektif untuk penyakit bakteri seperti layu bakteri, hawar daun bakteri, dan busuk lunak. Gunakan dengan bijak agar tidak terjadi resistensi bakteri.",
    targetHamaPenyakit: [
      "Layu bakteri (Ralstonia solanacearum)",
      "Hawar daun bakteri (Xanthomonas)",
      "Busuk lunak bakteri (Erwinia)",
      "Bercak bakteri",
    ],
    caraPakai:
      "Larutkan dan semprotkan ke seluruh bagian tanaman, atau kocorkan ke tanah untuk penyakit akar",
    dosis: "1.5–2 gram per liter air",
    waktuPakai:
      "Saat gejala penyakit bakteri muncul, atau sebagai pencegahan di musim hujan",
    intervalSemprot: "7 hari sekali",
    karensaHari: 7,
    peringatan: [
      "Jangan gunakan berlebihan — bisa menimbulkan resistensi bakteri",
      "Tidak efektif untuk penyakit jamur",
      "Simpan di tempat sejuk dan kering",
      "Gunakan APD saat aplikasi",
    ],
    emoji: "💉",
  },
  {
    id: "confidor",
    nama: "Confidor 200 SL (Imidakloprid 200 g/l)",
    kategori: "insektisida",
    bahanAktif: "Imidakloprid 200 g/l",
    merekDagang: ["Confidor 200 SL", "Admire Pro", "Imidor 200 SL"],
    deskripsiKategori: penjelasanKategoriAgrokimia.insektisida.deskripsi,
    deskripsiProduk:
      "Insektisida sistemik konsentrasi tinggi. Versi lebih kuat dari Avidor 25 WP. Diserap tanaman dan menyebar ke seluruh jaringan. Efektif untuk semua hama penghisap. Bisa dikocorkan ke tanah agar diserap akar untuk perlindungan lebih lama.",
    targetHamaPenyakit: [
      "Kutu daun",
      "Kutu kebul",
      "Thrips",
      "Wereng",
      "Kutu putih",
      "Aphid",
    ],
    caraPakai:
      "Semprotkan ke tanaman atau kocorkan ke pangkal batang untuk sistemi",
    dosis: "0.25–0.5 ml per liter air",
    waktuPakai: "Preventif atau saat serangan hama penghisap terdeteksi",
    intervalSemprot: "10–14 hari sekali",
    karensaHari: 21,
    peringatan: [
      "⚠️ SANGAT BERBAHAYA UNTUK LEBAH dan serangga pollinator",
      "Konsentrasi tinggi — hati-hati dalam penakarannya",
      "Jangan gunakan saat tanaman berbunga",
      "Simpan jauh dari jangkauan anak-anak",
    ],
    emoji: "⚡",
  },
  {
    id: "spintor",
    nama: "Spintor 120 SC (Spinosad)",
    kategori: "insektisida",
    bahanAktif: "Spinosad 120 g/l",
    merekDagang: ["Spintor", "Success", "Entrust (organik)"],
    deskripsiKategori: penjelasanKategoriAgrokimia.insektisida.deskripsi,
    deskripsiProduk:
      "Insektisida bio-rasional yang dihasilkan dari fermentasi bakteri tanah Saccharopolyspora spinosa. Aman untuk musuh alami seperti lebah dan predator. Efektif untuk ulat dan thrips, dengan karensa hanya 3 hari — cocok untuk sayuran yang dipanen sering.",
    targetHamaPenyakit: [
      "Ulat grayak (Spodoptera)",
      "Ulat buah (Helicoverpa)",
      "Thrips",
      "Lalat buah",
    ],
    caraPakai:
      "Semprotkan merata ke seluruh tanaman, terutama saat ulat masih kecil",
    dosis: "0.5–1 ml per liter air",
    waktuPakai: "Saat telur ulat mulai menetas atau thrips mulai terdeteksi",
    intervalSemprot: "7 hari sekali",
    karensaHari: 3,
    peringatan: [
      "Lebih aman untuk lingkungan dibanding insektisida kimia konvensional",
      "Tetap gunakan masker dan sarung tangan",
      "Rotasi dengan produk lain agar tidak terjadi resistensi",
    ],
    emoji: "🌿",
  },
  {
    id: "previcur",
    nama: "Previcur N (Propamokarb)",
    kategori: "fungisida",
    bahanAktif: "Propamokarb hidroklorida 722 g/l",
    merekDagang: ["Previcur N", "Previcur Energy"],
    deskripsiKategori: penjelasanKategoriAgrokimia.fungisida.deskripsi,
    deskripsiProduk:
      "Fungisida sistemik khusus untuk penyakit rebah semai (damping-off) dan busuk akar yang disebabkan Pythium dan Phytophthora. Wajib ada di persemaian. Dikocorkan ke media semai untuk perlindungan bibit sejak dini.",
    targetHamaPenyakit: [
      "Rebah semai / Damping-off (Pythium)",
      "Busuk akar (Phytophthora)",
      "Pythium spp.",
      "Peronospora spp.",
    ],
    caraPakai:
      "Kocorkan ke media semai dengan dosis yang tepat — jangan berlebihan",
    dosis: "2–3 ml per liter air untuk kocor",
    waktuPakai: "Preventif sebelum semai dan saat bibit baru berkecambah",
    intervalSemprot: "7–10 hari sekali di persemaian",
    karensaHari: 3,
    peringatan: [
      "Khusus untuk penyakit Oomycetes (bukan jamur sejati)",
      "Jangan gunakan untuk penyakit jamur biasa — tidak efektif",
      "Gunakan APD saat aplikasi",
    ],
    emoji: "🌱",
  },
  {
    id: "kumulus",
    nama: "Kumulus 80 WG (Sulfur 80%)",
    kategori: "fungisida",
    bahanAktif: "Sulfur (belerang) 80%",
    merekDagang: ["Kumulus", "Sulfur 80 WG", "Microthiol"],
    deskripsiKategori: penjelasanKategoriAgrokimia.fungisida.deskripsi,
    deskripsiProduk:
      "Fungisida berbahan belerang yang juga bekerja sebagai akarisida ringan. Efektif untuk embun tepung (powdery mildew) dan tungau ringan. Belerang adalah fungisida tertua yang dikenal manusia — murah, relatif aman, dan diizinkan dalam pertanian organik.",
    targetHamaPenyakit: [
      "Embun tepung (Powdery mildew)",
      "Tungau ringan",
      "Botrytis (grey mould)",
    ],
    caraPakai:
      "Semprotkan merata ke seluruh tanaman — aduk terus saat penyemprotan",
    dosis: "3–5 gram per liter air",
    waktuPakai: "Preventif dan saat gejala embun tepung awal muncul",
    intervalSemprot: "5–7 hari sekali",
    karensaHari: 1,
    peringatan: [
      "Jangan gunakan saat suhu di atas 32°C — bisa membakar tanaman",
      "Jangan campur dengan minyak mineral atau produk yang mengandung tembaga",
      "Aman untuk lebah tapi tetap hindari semprot saat lebah aktif",
    ],
    emoji: "🟡",
  },
  {
    id: "regent",
    nama: "Regent 50 SC (Fipronil)",
    kategori: "insektisida",
    bahanAktif: "Fipronil 50 g/l",
    merekDagang: ["Regent", "Fipronil 50 SC", "Cosmos"],
    deskripsiKategori: penjelasanKategoriAgrokimia.insektisida.deskripsi,
    deskripsiProduk:
      "Insektisida untuk hama yang hidup di tanah. Fipronil sangat efektif untuk membasmi uret (larva kumbang), rayap, penggerek batang, dan hama tanah lainnya yang tidak terdeteksi di atas permukaan. Cara pakai: ditaburkan ke tanah atau dicampur media tanam.",
    targetHamaPenyakit: [
      "Uret / larva kumbang tanah",
      "Rayap",
      "Penggerek batang",
      "Semut",
      "Hama tanah lainnya",
    ],
    caraPakai:
      "Campurkan dengan tanah atau taburkan di sekitar perakaran, lalu siram",
    dosis: "1–2 ml per liter air untuk kocor, atau sesuai kemasan untuk granul",
    waktuPakai:
      "Saat pengolahan lahan atau saat gejala kerusakan akar oleh uret terdeteksi",
    intervalSemprot: "Aplikasi tanah 1 kali per musim",
    karensaHari: 30,
    peringatan: [
      "⚠️ Fipronil berbahaya untuk ikan, lebah, dan burung",
      "Jangan gunakan di sekitar badan air",
      "Karensa panjang — 30 hari sebelum panen",
      "Gunakan APD lengkap: masker, sarung tangan, sepatu boot",
    ],
    emoji: "🐛",
  },
  {
    id: "sidametrin",
    nama: "Sidametrin / Sipermetrin 100 EC",
    kategori: "insektisida",
    bahanAktif: "Sipermetrin 100 g/l",
    merekDagang: ["Sidametrin", "Cymbush", "Arrivo", "Deltametrin"],
    deskripsiKategori: penjelasanKategoriAgrokimia.insektisida.deskripsi,
    deskripsiProduk:
      "Insektisida piretroid murah dan sangat tersedia. Efektif untuk ulat grayak, ulat buah, dan belalang. Cara kerja kontak dan lambung. Produk paling banyak digunakan petani kecil karena harga sangat terjangkau.",
    targetHamaPenyakit: [
      "Ulat grayak (Spodoptera litura)",
      "Ulat buah (Helicoverpa armigera)",
      "Belalang",
      "Ulat pemakan daun",
    ],
    caraPakai: "Semprotkan merata ke seluruh tanaman, terutama saat ulat aktif",
    dosis: "1–2 ml per liter air",
    waktuPakai:
      "Saat serangan ulat terdeteksi — semprot sore atau malam saat ulat aktif",
    intervalSemprot: "5–7 hari sekali saat serangan",
    karensaHari: 7,
    peringatan: [
      "Berbahaya untuk ikan dan lebah",
      "Jangan gunakan terlalu sering — ulat mudah resistensi terhadap piretroid",
      "Rotasi dengan spinosad atau emamektin untuk manajemen resistensi",
      "Semprot malam hari lebih efektif (ulat aktif malam)",
    ],
    emoji: "🐝",
  },
  {
    id: "roundup",
    nama: "Roundup / Herbatop (Glifosat)",
    kategori: "herbisida",
    bahanAktif: "Glifosat isopropil amina 480 g/l",
    merekDagang: ["Roundup", "Herbatop", "Touchdown", "Rondo"],
    deskripsiKategori: penjelasanKategoriAgrokimia.herbisida.deskripsi,
    deskripsiProduk:
      "Herbisida sistemik non-selektif paling umum digunakan. Membunuh semua jenis tanaman yang terkena semprotan. Dipakai untuk membersihkan lahan dari gulma sebelum tanam. PERHATIAN: Jangan sekali-kali mengenai tanaman budidaya — bisa mati semua.",
    targetHamaPenyakit: [
      "Semua gulma berdaun lebar",
      "Semua rumput liar",
      "Alang-alang",
      "Tanaman tidak diinginkan",
    ],
    caraPakai:
      "Semprotkan langsung ke daun gulma menggunakan nozel berpelindung, JANGAN kena tanaman budidaya",
    dosis: "5–10 ml per liter air",
    waktuPakai: "2–3 minggu sebelum tanam, saat gulma sudah tumbuh aktif",
    intervalSemprot: "Satu kali aplikasi per musim tanam",
    karensaHari: 14,
    peringatan: [
      "⚠️ NON-SELEKTIF — membunuh SEMUA tanaman yang kena semprot",
      "Jangan gunakan saat angin kencang — bisa kena tanaman sebelah",
      "Tidak boleh digunakan saat tanaman budidaya sudah ada di lahan",
      "Pakai pelindung nozel atau kardus sebagai penghalang saat semprot dekat tanaman",
      "Gunakan APD lengkap: masker, sarung tangan, baju lengan panjang",
    ],
    emoji: "🌿",
  },
];
