let nilai = 40;
// console.log(nilai >= 50) //tergantung nilainya, hasilnya antara true atau false

if (nilai >= 80 && nilai <= 100) {
  nilai = "A";
} else if (nilai >= 70 && nilai < 80) {
  nilai = "B";
} else if (nilai >= 60 && nilai < 70) {
  nilai = "C";
} else {
  nilai = "D";
}

console.log(nilai);

//&& semua kondisi harus terpenuhi maka akan menghasilkan true
//or salah satu kondisi terpenuhi makan akan menghasilkan true

nilai = 50;
let banding = nilai >= 80 && nilai <= 100;
console.log(banding, "&&");
let banding2 = nilai >= 80 || nilai <= 100;
console.log(banding2, "||");
let banding3 = nilai != 60;
console.log(banding3, "!");

//perbedaan == dengan ===
let x = 50;
let y = "50";

let banding4 = x == y;
console.log(banding4, "4");
let banding5 = x === y;
console.log(banding5, "5");

//percabangan if-else
let number = 8;
if (number > 5) {
  if (number % 2 === 0) {
    console.log("lebih besar dari 5 dan genap");
  } else {
    console.log("lebih besar dari 5 dan ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("lebih kecil atau sama dengan dari 5 dan genap");
  } else {
    console.log("lebih kecil atau sama dengan dari 5 dan ganjil");
  }
}
