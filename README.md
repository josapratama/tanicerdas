# 🌱 TaniCerdas

Aplikasi manajemen pertanian dan peternakan terpadu berbasis web. Dirancang untuk membantu petani memantau kebun, kandang, keuangan, dan jadwal dalam satu platform — lengkap dengan panduan bertani, ensiklopedi pupuk, dan diagnosa penyakit tanaman.

## Fitur

### 📊 Dashboard

Ringkasan real-time: statistik tanaman aktif, produksi telur, laba bersih, grafik arus keuangan & produksi, serta jadwal mendatang.

### 🌱 Kebun (`/kebun`)

Manajemen tanaman: tambah/edit/hapus, lacak fase pertumbuhan (Semai → Panen), catatan harian, hasil panen, dan export CSV.

### 🐔 Peternakan (`/ternak`)

Manajemen kandang ayam: produksi telur harian, pemberian pakan, grafik produksi, dan export data.

### 💰 Keuangan (`/keuangan`)

Pencatatan transaksi pemasukan/pengeluaran, grafik arus kas, pie chart kategori, dan filter periode.

### � Panduan Bertani (`/panduan`)

Panduan lengkap per tanaman (cabai, melon, semangka, timun):

- Fase tumbuh dari semai hingga panen dengan ciri fisik dan fokus perawatan konkret
- Jadwal pemupukan lengkap dengan nama produk, dosis, dan cara aplikasi
- Ensiklopedi pupuk (organik, kimia makro/mikro, hayati)
- Pestisida & agrokimia dengan info masa karensa
- Diagnosa penyakit tanaman
- Ilmu dasar: unsur hara N/P/K/Ca/Mg/B, konsep pupuk, dan kamus istilah (HSS, HST, prung, vegetatif, generatif, dll)

### � Planner (`/planner`)

Kalender kegiatan kebun dan kandang: semai, pemupukan, penyemprotan, vaksinasi, panen, dll.

### 🧮 Kalkulator (`/kalkulator`)

- Kebutuhan pupuk cabai berdasarkan luas lahan
- Kebutuhan dan biaya pakan ayam
- Break Even Point (BEP), ROI, dan margin usaha
- Konversi satuan pertanian (berat, luas, volume)

## Teknologi

| Kategori        | Stack                      |
| --------------- | -------------------------- |
| Framework       | Next.js 15 (App Router)    |
| Bahasa          | TypeScript 5               |
| Styling         | Tailwind CSS 4             |
| Komponen        | shadcn/ui + Radix UI       |
| Grafik          | Recharts                   |
| Ikon            | Lucide React               |
| State & Storage | React state + localStorage |

Tidak ada backend — semua data disimpan di `localStorage` browser.

## Menjalankan Proyek

```bash
# Install dependensi
npm install

# Development
npm run dev

# Build produksi
npm run build
npm start
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur

```
src/
├── app/                    # Halaman (Next.js App Router)
│   ├── page.tsx            # Dashboard
│   ├── kebun/              # Manajemen kebun
│   ├── ternak/             # Manajemen peternakan
│   ├── keuangan/           # Pencatatan keuangan
│   ├── panduan/            # Panduan bertani
│   ├── panduan-ternak/     # Panduan beternak
│   ├── planner/            # Planner tanam
│   └── kalkulator/         # Kalkulator budidaya
├── components/
│   ├── layout/             # AppShell, Header, Sidebar
│   └── ui/                 # Button, Toast, ConfirmDialog
└── lib/
    ├── panduan/            # Data panduan: pupuk, penyakit, tanaman, ternak
    ├── types.ts            # Type & interface
    ├── store.ts            # localStorage helpers
    ├── mockData.ts         # Seed data awal
    └── utils.ts            # Utility functions
```

## Lisensi

MIT
