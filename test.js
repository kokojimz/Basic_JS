console.log("Hello, World!");
console.log("\n");

let a = 4 + "4";
a = 4 + true;
console.log(a);
console.log("\n");

let lastname = "marchell";

console.log(lastname);
console.log("\n");

let fullName = "Luke" + "Skywalker";
console.log(fullName);
fullName = lastname = "Skywalker";
console.log(fullName);
console.log("\n");

let x;
console.log(typeof x);
console.log("\n");

let myName = "aldy";
console.log(`Hello, my name is ${myName}.`);
console.log("\n");

let X = true;
let Y = false;

console.log(typeof X);
console.log(typeof Y);
console.log("\n");
const A = 10;
const B = 12;

let isGreater = A > B;
let isLess = A < B;

console.log(isGreater);
console.log(isLess);
console.log("\n");
const hujan = true;

console.log("Persiapan sebelum berangkat kerja");
if (hujan) {
  console.log("Bawa Payung !");
} else {
  console.log("Ga jadi hujan , langsung jalan aja!");
}
console.log("\n");

// let nilai = 28;
// let hasil = null;

// if( nilai >= 90 && nilai <= 100){
//     hasil = 'A';
// }else if(nilai >= 80 && nilai<90 ){
//     hasil = 'B';
// }else if(nilai >=70 && nilai < 80){
//     hasil = 'C';
// }else if(nilai >=60 && nilai < 70){
//     hasil = 'D';
// }else{
//     hasil = 'Tidak lulus!';
// }
// console.log(hasil);
console.log("\n");

let nilai = 34;
let hasil = null;
console.log("\n");

switch (nilai) {
  case 100:
    hasil = "A";
    break;
  case 90:
    hasil = "B";
    break;
  case 80:
    hasil = "C";
    break;
  case 70:
    hasil = "D";
    break;
  default:
    hasil = "Tidak lulus!";
}
console.log(hasil);

console.log("\n");
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);
console.log("\n");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("\n");

let array = [11, 12, 13, 14, 15];
for (let temp of array) {
  console.log(temp);
}
console.log("\n");

let count = 0;
while (count < 10) {
  console.log(count + 1);
  count++;
}
console.log("\n");

let score = 70;
let result = null;

if (score >= 90) {
  result = "Selamat! Anda mendapatkan nilai A.";
} else if (score >= 80 && score <= 89) {
  result = "Anda mendapatkan nilai B.";
} else if (score >= 70 && score <= 79) {
  result = "Anda mendapatkan nilai C.";
} else if (score >= 60 && score <= 69) {
  result = "Anda mendapatkan nilai D.";
} else if (score < 60) {
  result = "Anda mendapatkan nilai E.";
}
console.log(result);
console.log("\n");

//object
//literal object
let object = {
  nama: "Aldy",
  umur: 19,
  hoby: "nonton youtube",
};

let obj = {};
obj.halo = function () {
  console.log(this);
};
obj.halo();
console.log("\n");

// function declaration
function Object(nama, umur, nim, jurusan) {
  let object = {
    nama: nama,
    umur: umur,
    nim: nim,
    jurusan: jurusan,
  };
  return object;
}
let tst = Object("aldy", 19, "2093029164", "Computer Science");
console.log(tst);
delete tst.jurusan;
console.log(tst);
console.log("\n");

//Constructor
function Test() {
  this.nama = "aldy";
  console.log(this);
}
let aldy = new Test();
aldy.umur = 19;
console.log(aldy);
let aldy_2 = new Test();
console.log("0" === 0);
console.log("\n");

let Myarr = [1, 2];
Myarr.push("aldy");
Myarr.push(["a", 2, 3]);
console.log(Myarr);
Myarr.pop();
console.log(Myarr);
Myarr.shift();
console.log(Myarr);
Myarr.unshift("nol", 1);
console.log(Myarr);
delete Myarr[1];
console.log(Myarr);
Myarr.splice(1, 1);
console.log(Myarr);
Myarr.splice(1, 0, "satu");
console.log(Myarr);
console.log("\n");

let array1 = [1, 2, 3];
for (let array2 of array1) {
  console.log(array2);
}
console.log("\n");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1);
console.log(...arr1);
let newArr = [arr1, arr2];
console.log(newArr);
newArr = [...arr1, ...arr2];
console.log(newArr);
console.log(...newArr);
console.log("\n");

let obj1 = {};
obj1.firstname = "reynaldy";
obj1.lastname = "Marchell";
let obj2 = { age: 19, Gender: "Male" };
let newobj = { ...obj1, ...obj2 };
console.log(newobj);
console.log("\n");

let profile = {};
profile.Firstname = "Reynaldy";
profile.lastName = "marchell";
profile.Age = 19;
profile.power = "bisnis";
profile.isMale = true;
let { Firstname, lastName, Age } = profile;
console.log(Firstname, lastName, Age);
let power = "coding";
({ power } = profile);
console.log(power);
let { isMale = false } = profile;
console.log(isMale);
let {
  Firstname: localFirstname,
  lastName: locallastName,
  Age: localAge,
  power: localpower,
  isMale: localisMale,
} = profile;
console.log(localFirstname, locallastName, localAge, localpower, localisMale);
console.log("\n");

let makanan = ["food1", "food2", "food3"];
let [makanan1, makanan2, makanan3] = makanan;
console.log(makanan1, makanan2, makanan3);
makanan = ["food1", "food2", "food3", "food4"];
let [, , , makanan4] = makanan;
console.log(makanan4);
console.log(makanan1, makanan2, makanan3, makanan4);

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood, herFood] = favorites;
console.log(myFood);
console.log(herFood);

let d = 1;
let e = 2;
console.log("Sebelum swap");
console.log("Nilai d: " + d);
console.log("Nilai e: " + e);
[d, e] = [e, d]; // menetapkan nilai d dengan nilai e dan nilai e dengan nilai d.
console.log("Setelah swap");
console.log("Nilai d: " + d);
console.log("Nilai e: " + e);

let money = ["1000", "3000"];
let [money1, money2 = "2000"] = money;
console.log(money1, money2);
console.log("\n");

let myMap = new Map([
  ["kota", "Bandung"],
  ["provinsi", "Jawa Barat"],
  [1, "ini angka satu"],
]);
console.log(myMap);
let kota = myMap.get("kota");
console.log(kota);
myMap.set(2, "ini angka dua");
console.log(myMap);
console.log(myMap.size);
console.log("\n");

let mySet = new Set([1, 2, 3, 1]);
console.log(mySet);
mySet.add(7);
mySet.add(2);
mySet.add(4);
mySet.add([1, 2, 3]);
console.log(mySet);
mySet.delete(7);
console.log(mySet);
console.log(mySet.has(2));
console.log(mySet.size);
console.log("\n");

//rest parameter
function sum(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5));

// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
sayHello('hallo');

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`);
}
sayName('aldy');

//Arrow function
//cara 1
const salam = (name) => {
    console.log(`hai ${name}`);
}
salam('aldy');
//cara 2
const greetings = nama => console.log(`Halo ${nama}`);
greetings('aldy');
//return 1 line function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

//closure
function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
    greet();
}
init();

//Object-Oriented Programming di JavaScript
//class di js biasanya menggunakan constructor function
//cara 1 : tanpa parameter 
// function Nama(){
//   this.firstname = "";
//   this.lastname = "";
//   this.umur = ''; 
//   this.sayHello = function(nama){
//     console.log(`halo ${nama}, my name is ${this.firstname}`);
//   }
// }
//objek yang dibuat dari class
// const tono = new Nama();
// tono.firstname = "Tono";
// tono.lastname = "Hidayat";
// tono.umur = 29;
// tono.sayHello('hana');
// console.log(tono);

// const hana = new Nama();
// hana.firstname = "Hana";
// hana.lastname = "Nur";
// hana.sayHello('tono');
// console.log(hana);

//cara 2 : menggunakan parameter
function Nama(firstname,lastname,umur){
  this.firstname = firstname;
  this.lastname = lastname;
  this.umur = umur; 
  this.sayHello = function(nama){
    console.log(`halo ${nama}, my name is ${this.firstname}`);
  }
}
//objek yang dibuat dari class
const tono = new Nama('Tono','Hidayat',29);
console.log(tono);
tono.sayHello('Hana');

const hana = new Nama("Hana","Nur");
console.log(hana);
hana.sayHello('Tono');

//constructor inheritance
function Employee(firstName, Age){
  this.firstName = firstName;
  this.Age = Age;
  this.sayHello = function(name){
    console.log(`Hello ${name}, My name is ${this.firstName}`);
  }
}
function Manager(firstname, lastname){
  this.lastname = lastname;
  Employee.call(this, firstname);
}
const Eko = new Manager('Eko', 'Kanedy');
console.log(Eko);
//prototype inheritance
Manager.prototype.run = function(){
  console.log(`${this.firstName} is running`);
}
Eko.run();

//Class constructor
class Person{
  constructor(name){
    this.name = name;
  }
  sayHello(name){
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
}
const fajar = new Person('Fajar');
console.log(fajar);
fajar.sayHello('joko');

//Class inheritance
class Dosen{
  constructor(umur){
    this.umur = umur;
  }
  sayHello(name){
    console.log(`Hello ${name}, saya dosen ${this.name}`);
  }
}
class Mahasiswa extends Dosen {
  // sayHello(name){
  //   console.log(`Hello ${name}, saya mahasiswa ${this.name}`);
  // }
}
const ranny = new Dosen(34);
ranny.name = 'Ranny';
ranny.sayHello('aldy');

const haikal = new Mahasiswa();
haikal.name = 'Haikal';
haikal.sayHello('aldy');

console.log(ranny);
console.log(haikal);

//Class super constructor
class Guru{
  constructor(name,umur){
    this.name = name;
    this.umur = umur;
  }
  sayHello(name){
    console.log(`Hello ${name}, saya guru ${this.name}`);
  }
}
class Siswa extends Guru {
  constructor(name,hobby){
    super(name);
    this.hobby = hobby;
  }
  sayHello(name){
    console.log(`Hello ${name}, saya siswa ${this.name}`);
  }
}
const nina = new Guru('Nina',34);
nina.sayHello('aldy');

const dapa = new Siswa('Dapa','game');
dapa.sayHello('aldy');

console.log(nina);
console.log(dapa);

//Class super method
class Shape{
  paint(){
    console.log('Paint Shape');
  }
}
class Circle extends Shape{
  paint(){
    super.paint();
    console.log('Paint Circle');
  }
}
const circle = new Circle();
circle.paint();
console.log(circle);

//Getter dan Setter
const person = {
  firstName: 'John',
  lastName :'Doe',
  get fullName(){ //getter
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullName){ //setter
    const array = fullName.split(' ');
    this.firstName = array[0];
    this.lastName = array[1];
  }
};
console.log(person);
person.fullName = 'reynaldy marchell'
console.table(person);

//Getter dan Setter di class
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);//akses getter

user.fullName = 'Fulan Fulanah';//akses setter
console.log(user);
console.log(user.fullName);

//Public Class field
class Customer{
  firstName;
  lastName;
  balance;

  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(nama){
    console.log(`Hello ${nama}, saya customer ${this.firstName}`);
  }
  }
const anang = new Customer('Anang','Wibowo');
//console.log(anang.sayHello('aldy'));
console.log(anang);

//Private Class field
class Car{
  #chassisNumber = null; // enclosing class

  constructor(brand,color,maxSpeed){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }
  get chasisNumber(){
    return this.#chassisNumber;
  }
  set chasisNumber(chasisNumber){
    console.log('you are not allowed to change the chassis number');
  }
  drive(){
    console.log(`${this.brand} ${this.color} is driving`);
  }
  turn(direction){
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
  #generateChassisNumber(){
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
const car = new Car('BMW','Red',300);
console.log(car);
console.log(car.chasisNumber);
car.chasisNumber = 'BMW - 1';

//Operator instanceof
class Penjual{

}
class Pembeli extends Penjual{

}
const dadang = new Penjual();
const siti = new Pembeli();

console.log(typeof dadang);
console.log(typeof siti);
console.log(dadang instanceof Penjual);
console.log(dadang instanceof Pembeli);
console.log(siti instanceof Penjual);//Operator instanceof bisa digunakan untuk mengecek
console.log(siti instanceof Pembeli);//apakah suatu object merupakan instance atau inheritance
                                    //dari sebuah class atau bukan

//Static Class Field
class Configuration{
  static name ='Belajar Javascript OOP';
  static version = 1.0;
  static author = 'Reynaldy Marchell';
}
const config = new Configuration();//Static Class Field gak bakal nempel di instance object nya
console.log(config);//Static Class Field gak bakal nempel di instance object nya
console.log(Configuration);
Configuration.author = 'Reynaldo Marchell';
console.log(Configuration.author);

//Static Method
class MathUtil{
  static sum(...numbers){
    let total = 0;
    for(let number of numbers){
      total+=number;
    }
    return total;
  }
}
console.log(MathUtil.sum(1,2,2));
console.log(MathUtil);

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}
const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
console.log(whatsapp);
console.log(email);

//Built-In Class
//Class Date
const date = new Date();
const timeInBandung = date.toLocaleString('id-ID',{
  timeZone: 'Asia/Jakarta',
});
const timeInTaipei = date.toLocaleString('id-ID',{
  timeZone:'Asia/Taipei',
});
const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});
console.log(`The current time in Bandung is : ${timeInBandung}`);
console.log(`The current time in Taiwan is : ${timeInTaipei}`);
console.log(`The current time in Taiwan is : ${timeInTokyo}`);

//Class Array
class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
    super(...uniqueValue);
  }
  push(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
} 
const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.push('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push('a');
console.log(someArray); // ['a', 'b', 'c', 'd']

//Higher Order Function
const hello = () => {
  console.log('Hello!')
};
const say = (someFunction) => {
  someFunction();
}
const SayHello = () => {
  return (name) => {
    console.log(`Hello ${name}`);
  }
}
hello();
say(hello);
SayHello()('aldy');

const tombol = document.querySelector('#btn');
tombol.addEventListener('click',() => {
  setTimeout(() => {
    console.log(`Hello`);
    alert('3 detik setelah tombol ditekan');
  },3000);
});

const repeat = (action, n) => {
  for(let i=1;i<=n;i++){
    action(i);
  }
}
repeat(console.log,5);

//Array filter
//pilih angka >= 3
const Angka = [-1,8,5,3,-4,6,3,2,-6,2];
const newAngka1 = Angka.filter(a => a >= 3);
console.log(newAngka1);

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);
//Array Map
//kalikan semua angka dengan 2
const newAngka2 = Angka.map(a => a*2);
console.log(newAngka2);
//Array Reduce
//jumlahkan seluruh elemen pada array
//[-1,8,5,3,-4,6,3,2,-6,2]
const newAngka3 = Angka.reduce((accumulator,currentValue) => accumulator + currentValue,0);
console.log(newAngka3);
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
//Method Chaining
//cari angka > 5
//kalikan 3
//jumlahkan semua
const newAngka = Angka.filter(a => a > 5)
  .map(a => a*3)
  .reduce((acc,curr) => acc + curr);
console.log(newAngka);

//Error Handling
//Try and Catch
try {
  console.log("\nAwal blok try");
  console.log('coffeeStock: ',CoffeeStock);
  console.log("Akhir blok try");
}catch(error){
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  console.log('\n');
}
//try-catch-finally
try {
  console.log("Awal blok try");
  console.log('coffeeStock: ',CoffeeStock);
  console.log("Akhir blok try");
} catch (error) {
  console.log(error);
} finally {
  console.log("Akan tetap dieksekusi");
}

//callback Asynchronous javascript
//Request data menggunakan ajax dari jquery
console.log('\nmulai');
$.ajax({
  url: 'data/mahasiswa.json',
  success: (mhs) => {
    mhs.forEach(element => {
      console.log(element.nama);
    });
    console.log(mhs);
  },
  error: (e) => {
    console.log(e.responseText);
  }
});
console.log('selesai');

//promise
let ditepati = true;
const janji1 = new Promise((resolve,reject) => {
  if (ditepati){
    resolve('data/mahasiswa.json');
  }else{
    reject('ditepati not true');
  }
});

console.log('\nmulai');
janji1
  .then(response => console.log(response))
  .catch(response => console.log(response));
console.log('selesai');

//promise setelah beberapa waktu (Asynchronous)
const janji2 = new Promise((resolve,reject) => {
  if (ditepati){
    setTimeout(() => {
      resolve('data/mahasiswa.json');
    },2000);
  }else{
    setTimeout(() => {
      reject('ditepati not true');
    },2000);
  }
});
console.log('\nmulai');
// console.log(janji2.then(() => console.log(janji2)));
janji2
  .finally(() => console.log('selesai menunggu'))
  .then(response => console.log(response))
  .catch(response => console.log(response));
console.log('selesai\n\n');

//promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'Reynaldy Marchell',
      durasi: 95
    }]);
  },1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      Temperatur:'30'
    }]);
  },500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film,cuaca])
  .then((response) => {
    const[film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });