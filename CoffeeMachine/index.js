//cara 1
//export dan import module JavaScript dgn format CommonJS yang berjalan di lingkungan Node.js
//const {coffeeStock, isCoffeeMachineReady} = require("./state");

//cara 2
//ES6 module dapat dijalankan baik pada environment Node.js maupun browser
//mengimpor satu nilai
//import coffeeStock from "./state.js";

//mengimpor banyak nilai
import {coffeeStock, isCoffeeMachineReady} from "./state.js";

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log(`\nKopi ${type} berhasil dibuat!`);
    }else{
        console.log(`\nBiji ${type} kopi habis!`);
    }
};

makeCoffee("robusta", 80);
console.log('coffeeStock: ',coffeeStock);
console.log('isCoffeeMachineReady: ',isCoffeeMachineReady);

