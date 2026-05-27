# Safki Fajar Fatmawan — Personal Portfolio

Landing page pribadi: HTML + CSS + JS murni. Tidak butuh build step.

## Struktur

```
safki-portfolio/
├── index.html       # Semua konten + struktur halaman
├── styles.css       # Styling (tema modern colorful, dark)
├── script.js        # Mobile menu, reveal-on-scroll, navbar
├── netlify.toml     # Konfigurasi deploy Netlify
└── README.md
```

## Cara Edit Konten

Buka [index.html](index.html) — semua teks ada di sini:

- **Hero**: cari section `<section id="home"`
- **About**: cari section `<section id="about"`
- **Experience**: cari `<section id="experience"` — duplikat blok `<li class="timeline-item">` untuk tambah entri
- **Projects**: cari `<section id="projects"` — duplikat `<article class="project-card">` untuk tambah project
- **Skills**: cari `<section id="skills"` — edit `<li>` di dalam `.chips`
- **Contact**: cari `<section id="contact"` — update email & link sosmed

Untuk ganti warna, edit variabel di bagian `:root` pada [styles.css](styles.css).

## Cara Preview Lokal

Cukup buka `index.html` langsung di browser dengan double-click. Tidak perlu server.

Atau pakai live server kalau mau auto-reload:

```powershell
# pakai npx (butuh Node.js)
npx serve .
```

## Deploy ke GitHub Pages (Gratis)

Website ini di-host di [safkifajar.github.io](https://safkifajar.github.io).

### Setup (sekali saja)

1. Buat repo public dengan nama persis `safkifajar.github.io`
2. Init git & push:
   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/safkifajar/safkifajar.github.io.git
   git push -u origin main
   ```
3. Buka repo → **Settings → Pages** → Source: `main` branch / root → Save
4. Tunggu 1–2 menit, site live di `safkifajar.github.io`

### Update website

```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

Dalam ~30 detik, perubahan live.

## Custom Domain (Optional)

Kalau mau pakai domain sendiri (misal `safkifajar.com`):
- Repo → **Settings → Pages → Custom domain** → masukkan domain
- Ikuti panduan DNS yang dikasih GitHub (set CNAME record di registrar domain)
