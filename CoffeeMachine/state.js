const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
const isCoffeeMachineReady = true;

//cara 1
//export dan import module JavaScript dgn format CommonJS yang berjalan di lingkungan Node.js
//module.exports = {coffeeStock, isCoffeeMachineReady};

//cara 2
//dengan ES6 module yang dapat dijalankan baik pada environment Node.js maupun browser
//mengekspor satu nilai
//export default coffeeStock;

//mengekspor banyak nilai 
export {coffeeStock, isCoffeeMachineReady};

//console.log(module);