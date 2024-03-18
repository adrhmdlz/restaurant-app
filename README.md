# Submission: Katalog Restauran PWA + Testing and Optimized

## Pengantar

Selamat! Akhirnya Anda sampai di penghujung kelas ini. Anda sudah mempelajari bagaimana cara melakukan automation test, dan merasakan bagaimana menulis kode menggunakan TDD. Anda juga sudah belajar bagaimana mengoptimasi gambar dan bundle agar ukurannya tetap kecil. Anda juga sudah berlatih:

- [Test Driven Development menggunakan Jest](https://www.dicoding.com/academies/219/tutorials/9829).
- [Menerapkan Testing Pada Aplikasi](https://www.dicoding.com/academies/219/tutorials/9839).
- [Menerapkan Kontrak Test](https://www.dicoding.com/academies/219/tutorials/9874).
- [Membangun Fitur Menggunakan TDD](https://www.dicoding.com/academies/219/tutorials/9894).
- [Menerapkan E2E Testing](https://www.dicoding.com/academies/219/tutorials/9944).
- [Mengkompresi gambar menggunakan Imagemin](https://www.dicoding.com/academies/219/tutorials/9756).
- [Mengubah Gif menjadi Video](https://www.dicoding.com/academies/219/tutorials/9766).
- [Menerapkan Image Responsive](https://www.dicoding.com/academies/219/tutorials/9771).
- [Menggunakan WebP sebagai format gambar](https://www.dicoding.com/academies/219/tutorials/9781).
- [Menerapkan teknik lazy load gambar](https://www.dicoding.com/academies/219/tutorials/9791).
- [Menganalisa ukuran bundle JavaScript](https://www.dicoding.com/academies/219/tutorials/9806).
- [Memecah bundle agar muatannya tetap kecil](https://www.dicoding.com/academies/219/tutorials/9816).

Untuk lulus dari kelas ini, Anda harus mengembangkan kembali web app Katalog Restoran dengan menerapkan automation test dan beberapa optimisasi sesuai dengan kriteria berikut.

## Kriteria

Fitur yang harus ada pada aplikasi:

1. **Integration Test**, syarat:

   - Menerapkan integration test untuk fungsi menyukai dan batal menyukai restoran.

2. **End to End Test**, syarat:

   - Menerapkan End to End Test dengan skenario:
     - Menyukai salah satu restoran.
     - Batal menyukai restoran tersebut.

3. **Image Optimization**, syarat:

   1. Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus di bawah 200kb.
   2. Menerapkan teknik image responsive pada gambar hero. Resolusi gambar pada layar seluler dan desktop harus berbeda.
   3. Menerapkan teknik lazy loading pada gambar daftar restoran yang ditampilkan.

4. **Bundle Optimization**, syarat:

   1. Memasang bundle analyzer pada proyek submission.
   2. Gunakan teknik Code Splitting untuk memisahkan vendor code dari kode asli yang Anda tuliskan.

5. **Pertahankan syarat yang ada pada submission sebelumnya.** Seperti penerapan PWA, responsibilitas tampilan, aksesibilitas pada website dan sebagainya.

## Penilaian

Submission Anda akan dinilai oleh reviewer dengan **skala 1-5** berdasarkan dari parameter yang ada.

Anda dapat menerapkan beberapa **saran** di bawah ini untuk mendapatkan nilai tinggi, berikut sarannya:

- Menuliskan test case secara lengkap, mulai dari kasus positif hingga kasus negatif. Pastikan test case yang dijalankan berhasil.
- Menerapkan End to End test pada skenario lain di luar yang sudah ditentukan. Pastikan test case yang dijalankan berhasil. Contoh: bila aplikasi terdapat fitur customer review, lakukan End to End test pada fitur tersebut.
- Menerapkan optimasi lain di luar dari optimasi yang menjadi persyaratan. Contoh, Anda bisa menerapkan pendekatan skeleton UI, minify/uglify CSS.
- Mendeploy hasil web app yang Anda kerjakan ke third-party hosting. Seperti _[Firebase Hosting](https://firebase.google.com/docs/hosting), [Netlify](https://www.netlify.com/), [Heroku](https://www.heroku.com/), [Github Pages](https://pages.github.com/),_ atau yang lainnya. Serta, memperhatikan metrik Web Vitals dengan nilai:
  - **FCP** < 2.5 detik
  - **FID/TBT** < 100 ms
  - **CLS** < 0.1

Note: Lampirkan URL dari laman web yang sudah di hosting pada Student Notes.

## Lainnya

### Submission yang Akan Ditolak

Jika submission Anda tidak sesuai dengan kriteria, maka akan ditolak oleh reviewer, berikut poin-poin yang harus diperhatikan:

- Tidak memenuhi kriteria yang telah ditentukan.
- Tidak menggunakan webpack sebagai module bundler dan environment development.
- Menggunakan CSS framework untuk membantu menyusun layout website.
- Menggunakan React, Angular, Vue dalam membangun proyek submission.
- Mengirimkan proyek submission dengan ukuran yang besar, biasanya disebabkan oleh berkas node_modules ikut terkirim.
- Proyek tidak berhasil di-build.
- Mengirimkan proyek yang bukan karya sendiri.

### Ketentuan Berkas Submission

Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Folder proyek terdiri dari **HTML, CSS, JS,** dan semua aset yang Anda gunakan dalam halaman web yang Anda buat.
- Pastikan terdapat berkas **package.json** yang mengandung daftar **dependencies** yang proyek Anda gunakan.
- Kirimkan proyek yang dikompresi ke bentuk **ZIP**.
- Sekali lagi, Anda dilarang menyertakan node_modules yang berisi packages ke dalam berkas ZIP. Ini akan menyebabkan berkas ZIP berukuran sangat besar.

### Ketentuan Proses Review

Berikut adalah beberapa hal yang perlu Anda ketahui mengenai proses review.

- Tim penilai akan mengulas submission Anda dalam waktu **selambatnya 3 (tiga)** hari kerja (tidak termasuk Sabtu, Minggu, dan hari libur nasional).
- Tidak disarankan untuk melakukan _submit berkali-kali_ karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman [submission](https://www.dicoding.com/academysubmissions/my).
