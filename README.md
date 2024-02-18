# Submission: Katalog Restoran

## Pengantar

Anda sudah mempelajari teknik mobile first approach, dan aksesibilitas pada web. Selama pembelajaran, Anda juga sudah berlatih:

- Menerapkan dasar responsibilitas tampilan pada perangkat seluler ([Implementing Small Things](https://www.dicoding.com/academies/219/tutorials/9175)).
- Menerapkan layout yang responsif menggunakan @media query dan grid CSS ([Impelementing Responsive Layout](https://www.dicoding.com/academies/219/tutorials/9186)).
- Optimisasi elemen UI seperti menerapkan navigation drawer, dan menetapkan jarak teks yang sesuai ([Other Optimization](https://www.dicoding.com/academies/219/tutorials/9196)).
- Menggunakan focus dan screen reader untuk menginput data di website ([Experiencing Focues](https://www.dicoding.com/academies/219/tutorials/9241) & [Experiencing Screen Reader](https://www.dicoding.com/academies/219/tutorials/9281)).

Untuk mempelajari modul berikutnya, kirimkan proyek aplikasi web dengan tema **Katalog Restoran**. Aplikasi memiliki satu halaman statis yang menampilkan daftar restoran sesuai dengan data yang diberikan.

## Starter Project

Dalam mengerjakan proyek ini Anda harus menggunakan environment Webpack. Tenang, kami sudah menyiapkan starter project yang dapat Anda gunakan untuk mengerjakan submission pertama, hingga submission akhir. Jadi Anda tidak perlu repot melakukan konfigurasi, dsb.

- Silakan unduh [starter project submission](https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-starter-project/restaurant-apps-starter-project.zip).
- Buka proyek menggunakan code editor yang digunakan.
- Jalankan perintah **npm install** untuk memasang seluruh dependencies yang digunakan pada proyek.

Untuk menjalankan proyek, Anda bisa gunakan perintah-perintah berikut.

- **npm run start-dev**: menjalankan proyek pada mode development menggunakan webpack-dev-server.
- **npm run build**: membangun proyek dalam mode production.

Tuliskan semua source code dalam folder src. Kami telah mengelompokkan dalam folder-folder terpisah agar mudah mengatur aset-aset yang akan Anda buat.

- **src → public**: untuk menyimpan aset yang dapat diakses secara public seperti favicon, icons, gambar, video, atau font.
- **src → styles**: untuk menyimpan berkas styling seperti CSS.
- **src → scripts**: untuk menyimpan berkas JavaScript, termasuk entry point.
- **src → templates**: untuk menyimpan aset HTML.

Struktur folder tidak harus seperti dicontohkan, Anda bisa mengubah sesuai dengan kebutuhan. Anda juga boleh melakukan kustomisasi konfigurasi webpack seperti menambahkan konfigurasi SASS, file-loader, ataupun lainnya.

```
Catatan:
Anda juga akan menemukan berkas karma.conf.js serta folder specs dan berkas sampleTestSpec.js di dalamnya. Berkas-berkas tersebut adalah konfigurasi yang dibutuhkan untuk melakukan automate testing. Jika Anda belum mengetahui apa itu automate testing, hiraukan saja, namun jangan hapus berkas-berkas tersebut. Kita akan mempelajari automate testing pada modul mendatang.
```

## Kriteria

Fitur yang harus ada pada aplikasi:

1.  App Bar (Navigation Bar), syarat:

    - Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).
    - Terdapat navigation menu:
      - Home → mengarah ke root domain.
      - Favorite → target URL cukup bernilai “#” (Sebagai - placeholder untuk digunakan pada submission selanjutnya).
      - About Us → arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.
    - Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.

2.  Hero Element (Jumbotron Element), syarat:

    - Menampilkan hero element dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src → public → images → hero. Gambar yang tidak digunakan, bisa Anda hapus.
    - Gambar hero element yang ditampilkan haruslah full-width atau memenuhi persyaratan sebagai berikut.
    - Tampilkan minimal dengan width 1000px pada ukuran viewport width >= 1200px.
    - Jika ukuran viewport width < 1200px, hero element ditampilkan full-width.

3.  Daftar Restoran, syarat:

    - Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter–lokasinya ada di src → public → data → DATA.json. Untuk menampilkannya dapat melalui cara hardcoded–dituliskan dalam HTML secara langsung–atau DOM manipulation menggunakan JavaScript.
    - Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.

4.  Footer, syarat:

    - Terdapat footer yang ditampilkan di bawah halaman.
    - Terdapat konten teks bebas sesuai dengan kreatifitas Anda. Misalnya, konten hak cipta yang mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.

5.  Responsibilitas Tampilan, syarat:

    - Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.
    - Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission Anda akan kami ditolak.
    - Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.

6.  Aksebilitas Website, syarat:

    - Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada, dan lain sebagainya.
    - Menerapkan teknik Skip to Content untuk melewati focus pada menu navigasi.
    - Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila ada gambar yang tidak memiliki arti apa pun, cukup berikan atribut alt dengan nilai kosong.
    - Dimensi touch target pada elemen yang diinteraksikan dengan touch harus memilliki ukuran elemen minimal 44x44px. Adapun beberapa contoh elemen tersebut meliputi button, anchor, input text, dan textarea. Pastikan juga terdapat jarak antar elemen tersebut supaya dimensi touch target tidak menumpuk.
    - Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.

```
Perhatian:
Dalam mengerjakan submission ini, Anda tidak diperkenankan menggunakan css framework (seperti Bootstrap, Materialize, Tailwind, dll) yang dapat membantu dalam menyusun tampilan yang responsif. Tuliskan kode CSS from scratch, sistem layouting CSS murni saat ini sudah cukup powerful untuk membuat tampilan website responsif.
```

Berikut kerangka tampilan yang bisa Anda gunakan sebagai referensi.

![Mockup web](/20200716221508256e3258c528af119cc04d2cfddac02f.jpeg)

## Saran

Submission Anda akan dinilai oleh reviewer dengan skala 1-5 berdasarkan dari parameter yang ada.

Anda dapat menerapkan beberapa saran untuk mendapatkan nilai tinggi. Beberapa saran tersebut dapat dilihat pada poin-poin di bawah ini.

- Menerapkan tampilan aplikasi yang menarik. Berikut adalah beberapa checklist dari saran ini.
  - Memiliki pemilihan warna yang pas dengan tema aplikasi (Dalam memilih warna, Anda dapat memanfaatkan tools pemilihan warna seperti [colorhunt.co](http://colorhunt.co/)).
  - Tata letak elemen yang pas. Contoh: Tidak ada konten yang bertumpuk.
  - Penggunaan font yang pas dengan tema.
  - Penerapan padding, margin yang pas.
- Terdapat konten tambahan yang relevan dengan tema aplikasi atau di luar dari data yang disediakan.
- Menggunakan elemen secara bijak sesuai dengan fungsinya. Contoh: tidak menggunakan button sebagai anchor ataupun sebaliknya.
- Dalam penyusunan CSS, Anda boleh menggunakan CSS preprocessor seperti SASS bila nyaman menggunakannya. Gunakanlah [sass-loader](https://www.npmjs.com/package/sass-loader) untuk memuat berkas sass pada webpack.

Detail penilaian submission

- **Bintang 1**: Semua ketentuan terpenuhi, tetapi banyak tampilan yang masih perlu banyak diperbaiki atau terindikasi melakukan plagiat.
- **Bintang 2**: Semua ketentuan terpenuhi, tetapi banyak tampilan yang masih perlu diperbaiki.
- **Bintang 3**: Semua ketentuan terpenuhi, tetapi tampilan hanya mengikuti seperti apa yang ada pada latihan.
- **Bintang 4**: Semua ketentuan terpenuhi dan menerapkan minimal 2 (dua) saran di atas.
- **Bintang 5**: Semua ketentuan terpenuhi dan menerapkan semua saran di atas.

## Lainnya

### Submission yang Tidak Sesuai Kriteria

Jika submission Anda tidak sesuai dengan kriteria, maka akan ditolak oleh reviewer, berikut poin-poin yang harus diperhatikan:

- Tidak memenuhi kriteria yang telah ditentukan.
- Tidak menggunakan webpack sebagai module bundler dan environment development.
- Menggunakan CSS framework untuk membantu menyusun layout website.
- Mengirimkan proyek submission dengan ukuran yang besar, biasanya disebabkan oleh berkas node_modules ikut terkirim.
- Proyek tidak berhasil di-build.
- Mengirimkan proyek yang bukan karya sendiri.

### Ketentuan Berkas Submission

Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Di dalam folder proyek tersebut terdiri dari HTML, CSS, JS, atau aset yang Anda gunakan dalam halaman web yang Anda buat.
- Selain itu, pastikan di dalam folder proyek terdapat berkas package.json yang mengandung daftar dependencies yang proyek Anda gunakan.
- Mengirimkan proyek dalam bentuk folder Proyek, kemudian arsipkan folder tersebut dalam bentuk ZIP.
- Tidak perlu menyertakan package yang berada pada node_modules ke dalam berkas ZIP. Karena akan membuat berkas ZIP memiliki ukuran yang besar.

### Ketentuan Proses Review

Beberapa hal yang perlu Anda ketahui mengenai proses review

- Tim penilai akan mengulas submission Anda dalam waktu selambatnya 3 (tiga) hari kerja (tidak termasuk Sabtu, Minggu, dan hari libur nasional).
- Tidak disarankan untuk melakukan submit berkali-kali karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman submission.
- Setelah melakukan submit tugas di submission ini, Anda bisa mengakses modul selanjutnya tanpa harus menunggu hingga proses review selesai dari tim Reviewer.
- Anda masih bisa mengakses modul selanjutnya meskipun submission di-reject oleh tim Reviewer.
- Pastikan submission Anda sudah disetujui (approved) oleh tim reviewer, sebelum dapat mengakses submission berikutnya.
