// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/*
1. buat variabel nama dan peran
2. buat kondisi variabel nama kosong maka nama wajib diisi
3. kondisi variabel peran kosong maka peran wajib diisi
4. kondisi perannya Ksatria maka tampilkan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
5. kondisi perannya Tabib maka tampilkan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
6. kondisi perannya Penyihir maka tampilkan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
7. kondisi perannya bukan yg ada di pilihan maka tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada" */

// let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya

let nama = "kohar";
// peran = "";
// peran = "Ksatria";
// peran = "Tabib";
peran = "Penyihir";

if (nama == "") {
  console.log("Nama wajib diisi");
} else if (nama == "") {
  console.log("Pilih peranmu untuk memulai game");
} else if (peran == "Ksatria") {
  console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
  console.log(
    `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
  );
} else {
  console.log(
    `tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
  );
}
