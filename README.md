# Submission: Katalog Restauran + PWA

## Pengenalan

Anda sudah mempelajari cara menuliskan JavaScript dengan gaya yang konsisten dan mengikuti kaidah yang baik menurut buku Clean Code. Selain itu Anda juga sudah belajar membangun web app secara progressive dengan menerapkan sifat offline capability dan installable. Anda juga sudah berlatih:

- Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript ([Menggunakan ESLint](https://www.dicoding.com/academies/219/tutorials/9316)).
- Membuat website dengan arsitektur Application Shell ([Latihan: Application Shell](https://www.dicoding.com/academies/219/tutorials/9416)).
- Menerapkan Web App Manifest ([Latihan: Web App Manifest](https://www.dicoding.com/academies/219/tutorials/9466)).
- Menerapkan Service Worker ([Latihan: Service Worker](https://www.dicoding.com/academies/219/tutorials/9501)).
- Menerapkan Cache API pada Service Worker ([Latihan: Cache API](https://www.dicoding.com/academies/219/tutorials/9526)).
- Menggunakan IndexedDB untuk menyimpan data dalam bentuk objek ([Latihan: IndexedDB](https://www.dicoding.com/academies/219/tutorials/9554)).
- Menerapkan WebSocket dan Notification ([Latihan: Web Socket](https://www.dicoding.com/academies/219/tutorials/9621) & [Latihan: Notification](https://www.dicoding.com/academies/219/tutorials/9631)).

Untuk mempelajari modul berikutnya, Anda harus mengembangkan kembali web app Katalog Restoran hingga menjadi Progressive Web Apps dengan kriteria yang sudah ditentukan.

## Kriteria

Fitur yang harus ada pada aplikasi:

1. Halaman Utama (Daftar Restoran), syarat:
   - Menampilkan daftar restoran yang datanya bersumber dari API: [restaurant-api.dicoding.dev](https://restaurant-api.dicoding.dev/). Silakan lihat dokumentasinya pada halaman tersebut.
   - Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.
   - Ada tautan/CTA yang mengarah ke detail restoran pada setiap item-nya.
   - Hero elemen tetap dipertahankan.
2. Halaman Detail Restoran, syarat:
   - Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
   - Pada halaman detail restoran harus berisi hal-hal berikut.
     - Nama restoran
     - Gambar
     - Alamat
     - Kota
     - Deskripsi
     - Menu Makanan
     - Menu Minuman
     - Customer Reviews
   - Ada tombol favorite untuk memasukkan atau menghapus restoran favorit dari database. Penyimpanan ini menggunakan IndexedDB.
3. Halaman Daftar Restoran Favorit, syarat:
   - Halaman daftar restoran dapat diakses melalui menu navigasi favorit.
   - Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
   - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
   - Ada tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
4. Native Capability, syarat:
   - Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apa pun, bahkan menggunakan workbox.
   - Aplikasi harus menampilkan icon Add to Home Screen.
   - Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
5. Code Quality, syarat:
   - Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. **Harap lampirkan berkas konfigurasi ESLint, ya**.
   - Menerapkan salah satu style guide, baik [Google JavaScript Code Style](https://google.github.io/styleguide/jsguide.html), [AirBnB JavaScript Code Style](https://github.com/airbnb/javascript), atau [StandardJS Code Style](https://standardjs.com/rules.html).
   - Periksa kembali sebelum mengirimkan submission project Anda. Penuhi seluruh kriteria yang ditetapkan dalam konfigurasi linter Anda. Kondisi terpenuhinya kriteria ditandai dengan tidak adanya satupun error ketika menjalankan eslint.
6. **Pertahankan syarat yang ada pada submission sebelumnya**. Di antaranya, responsibilitas tampilan, aksesibilitas pada website, appbar, footer, dan sebagainya.

```
Catatan:
Dalam mengerjakan submission ini, Anda tidak diperkenankan menggunakan CSS framework, seperti Bootstrap, Materialize, Tailwind, dll, yang dapat membantu dalam menyusun tampilan yang responsif. Tuliskan kode CSS from scratch. Sistem layouting CSS saat ini sudah cukup kuat dan mantap untuk membuat tampilan website responsif seperti CSS grid.
```

## Penilaian

Submission Anda akan dinilai oleh reviewer dengan skala 1-5 berdasarkan dari parameter yang akan kami sebutkan. Anda dapat menerapkan beberapa saran di bawah ini untuk mendapatkan nilai tinggi.

- Menambahkan fitur untuk memberikan customer review pada halaman detail. Silakan simak caranya pada [dokumentasi API](https://restaurant-api.dicoding.dev/) (Gunakan testing key untuk api key-nya).
- Alangkah baiknya bila Anda menerapkan Web Component secara native menggunakan Custom Element.
- Mengimplementasikan indikator loading saat data sedang dimuat dari server dan tampilkan keterangan/umpan balik bila hasil request HTTP yang dilakukan terjadi kegagalan.

## Lainnya

Ada beberapa hal lain yang perlu Anda perhatikan dalam melaksanakan submission ini.

### Submission yang Akan Ditolak

Submission Anda bisa saja akan ditolak oleh reviewer jika tidak memenuhi beberapa ketentuan berikut.

- Seluruh kriteria tidak dipenuhi.
- Tidak menggunakan webpack sebagai module bundler dan environment development.
- Menggunakan CSS framework untuk menyusun layout halaman.
- Menggunakan JavaScript framework untuk membangun UI aplikasi, seperti React, Angular, Vue, atau sebagainya dalam membangun proyek submission.
- Mengirimkan proyek submission dengan ukuran yang besar. Ini biasanya terjadi karena berkas node_modules yang ikut terkirim.
- Proyek tidak berhasil di-build.
- Mengirimkan proyek yang karya siswa lain.

### Ketentuan Berkas Submission

Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Folder proyek terdiri dari HTML, CSS, JS, dan semua aset yang Anda gunakan dalam halaman web yang Anda buat.
- Pastikan terdapat berkas package.json yang mengandung daftar dependencies yang proyek Anda gunakan.
- Kirimkan proyek yang dikompresi ke bentuk ZIP.
- Sekali lagi, Anda dilarang menyertakan node_modules yang berisi packages ke dalam berkas ZIP. Ini akan menyebabkan berkas ZIP berukuran sangat besar.

### Ketentuan Proses Review

Berikut adalah beberapa hal yang perlu Anda ketahui mengenai proses review.

- Tim penilai akan mengulas submission Anda dalam waktu **selambatnya 3 (tiga)** hari kerja (tidak termasuk Sabtu, Minggu, dan hari libur nasional).
- Tidak disarankan untuk melakukan submit berkali-kali karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman [submission](https://www.dicoding.com/academysubmissions/my).
- Setelah melakukan submit tugas di submission ini, Anda bisa mengakses modul selanjutnya tanpa harus menunggu hingga proses review selesai dari tim Reviewer.
- Anda masih bisa mengakses modul selanjutnya meskipun submission di-_reject_ oleh tim Reviewer.
- Pastikan submission Anda sudah disetujui (approved) oleh tim reviewer, sebelum dapat mengakses submission berikutnya.
