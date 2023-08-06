//cara membuat variabel
var a = "a";
var b = "b";
const c = "c";

//variabel bisa menampung tipe data string(text), integer/number, boolean, array, object

let nama = "kohar";
let umur = 20;
let apakahBenar = true;
let uang = 5000.5;

//operator aritmatikaa

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, "penjumlahan");
console.log(angka1 - angka2, "perkurangan");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 % angka2, "modulus");

let hasilOperatorAritmatika = angka1 + angka2;
console.log(hasilOperatorAritmatika);

hasilOperatorAritmatika = angka1 - angka2;
console.log(hasilOperatorAritmatika);

hasilOperatorAritmatika = angka1 / angka2;
console.log(hasilOperatorAritmatika);

hasilOperatorAritmatika = angka1 * angka2;
console.log(hasilOperatorAritmatika);

hasilOperatorAritmatika = angka1 % angka2;
console.log(hasilOperatorAritmatika);

//string juga bisa ditambah tpi string ga bissa dikuraan dengn operator aritmtika
let firstname = "kohaar";
let lastname = "setiawan";
let fullname = firstname + " " + lastname;
console.log(fullname);
console.log(firstname + " " + lastname);
console.log(firstname - lastname);

//alur pembcaan code
//untuk membaca code harus membacanya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10

//kenapa false - 10 tetap jadi 10 karena false = 0, true = 1
console.log(true + 10); //11 jawabannya sebelas jadi 1 + 10

// // contoh error
// const hewan = "jerapah";
// console.log(hewan);
// hewan = "babi"; //error karena hewan menggunakan const yaitu jerapah