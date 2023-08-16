//Quiz Object
let restaurant = {};
restaurant.name = "Bakso Mang Dicoding";
restaurant.city = "Bandung";
restaurant["favorite drink"] = "Es Teh";
restaurant["favorite food"] = "Bakso";
restaurant.isVegan = false;

console.log(restaurant);
let name = restaurant.name;
console.log(name);
let favoriteDrink = restaurant["favorite drink"];
console.log(favoriteDrink);

//Quiz array
let evenNumber = [];

for (i=1;i<=100;i++){
    if(i%2===0){
        evenNumber[evenNumber.length] = i;
    }
}
console.log(evenNumber);

//Quiz Map
const priceInJPY = 5000;
let currency = new Map([
    ["USD",14000],
    ["JPY",131],
    ["SGD",11000],
    ["MYR",3500],
])
let priceInIDR = priceInJPY * currency.get('JPY');
console.log(priceInIDR);

//Quiz Function
//1 
const minimal = (a ,b) => {
    if(a<b || a === b){
        return(a);
    }else return (b);
}
//2
const findIndex = (arr = [],number) => {
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i] === number){
            return(number-1);
        }
    }
    return(-1);
}

//Kuis Coding: Object-Oriented Programming
class Animal{
    name = null;
    age = null;
    isMammal = null;
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
class Rabbit extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal = true);
    }
    eat(){
        return`${this.name} sedang makan!`;
    }
}
class Eagle extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal = false);
    }
    fly(){
        return `${this.name} sedang terbang!`;
    }
}
const myRabbit = new Rabbit("Labi",2);
console.log(myRabbit);
console.log(myRabbit.eat());
const myEagle = new Eagle("Elo",4);
console.log(myEagle);
console.log(myEagle.fly());

//Kuis Coding : Functional Programming
const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books.filter(books => books.sales > 1000000)
    .map(books => `${books.author} adalah penulis buku ${books.title} yang sangat hebat!`);
    console.log(greatAuthors);