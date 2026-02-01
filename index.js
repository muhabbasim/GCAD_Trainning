
// Primitives (value types)
let str = "Hello";          // string
let num = 42;               // number
let bool = true;            // boolean
let nothing = null;         // null
let notDefined;             // undefined

str = "World";          // Reassigning a new string value

const person = 'rupa'


// Reference types
let obj = { name: "John" }; // object
let arr = [1, 2, 3];        // array
let func = () => {};        // function


// Type coercion
// console.log(5 + "5");        // "55" (number → string)
// console.log("5" == 5);       // true (type coercion)
// console.log("5" === 5);      // false (strict comparison)


let a = 10;
let b = "10";

let c = a + b

let mod = 10 % 3;  
let divide = 10 / 3; 

let age = 24;
let hasLicense = false
let candDrive = age >= 18 && hasLicense;
let candDrive2 = age >= 18 || hasLicense;

let score = 55
// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 80) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C");
// }

//  score >= 90 
//  ? console.log("Grade A") 
//  : score >= 80 
//  ? console.log("Grade B") 
//  : console.log("Grade C"); 


//  // switch (better for multiple exact matches)
// let day = "Monday";

// switch ((day).toLowerCase) {
//     case "Monday":
//         console.log("Start of work week");
//         break;
//     case "Friday":
//         console.log("Weekend almost here!");
//         break;
//     default:
//         console.log("Midweek");
// }
// console.log(typeof(age));
// console.log();


// const fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log("fruit name:", fruits[i]);
// }


// while (age < 30) {
//     console.log("Age is less than 30:", age);
//     age++;
// }

// let isLoading = true;

// while (isLoading) {
//     console.log("this use is loading...");
//     isLoading = false;
// }

// fruits.forEach((fru, i) => {
//     console.log("fruit:", fru, "index:", i);
// })

const numbers = [1, 2, 3, 4, -5, 6];

let totalValue = numbers.reduce((acc, currVal) => {
    return acc + currVal
}, 0); 

// console.log("total value:", totalValue);

let totalNumber2 = 0;
for (let i = 0; i < numbers.length; i++) {
    totalNumber2 += numbers[i];
}

for(let num of numbers){
    totalNumber2 += num;
}

// console.log("total number 2:", totalNumber2);

const users = [
  { id: 101, name: "Sara", email: "sara@ex.com", active: true  },
  { id: 202, name: "Ali",  email: "ali@ex.com",  active: false },
  { id: 303, name: "Lina", email: "lina@ex.com", active: true  },
];

const filterdData = users.map((user) => {
    return ({ id: user.id, name: user.name });
})

const activUsers = users.filter((user) => !user.active )
// const AliData = users.filter((user) => user.name !== "Ali" )
const AliData = users.filter(user => user.id == 202 )

const linadata = users.find(user => user.name === "Lina" )

// console.log('lina data', linadata);

const items = [
    { id: 101, name: "Laptop", price: "31", active: true  },
    { id: 202, name: "Ali",  price: "431",  active: false },
    { id: 303, name: "Ali", price: "201", active: true  },
];



const hasExpensiveItem = items.some((item)=> {
    return item.price > 200;
})

const allExpensiveItems = items.every((item)=> {
    return item.price > 200;
})

const includesLaptop = items.every((item)=> {
    return item.name === "Laptop";
})



arr = ['apple', 'banana', 'cherry'];
const includesLaptop2 = arr.includes("apple");



const ArrayHasAliAndActive = items.filter((item) => item.name === "Ali" && item.active === true);
const ArrayHasAliOrActive = items.filter((item) => item.name === "Ali" || item.active === true);

// console.log(ArrayHasAliAndActive);
// console.log(ArrayHasAliOrActive);

const ArrayHasAli = items.filter((item) => item.name === "Ali")
const activeAli = ArrayHasAli.find((item) => item.active === true);

// const activeAli = items.filter((item) => item.name === "Ali").find((item) => item.active === true);

// const totalPriceoOfAli = items.filter((item) => item.name === "Ali").reduce((acc, currVal) => acc + Number(currVal.price), 0);
const totalPriceoOfAli = ArrayHasAli.reduce((acc, currVal) => acc + Number(currVal.price), 0);

console.log(totalPriceoOfAli);
// console.log(activeAli);







// const totalPrice = items.reduce((acc, currVal) => {
//     return acc + currVal.price;
// }, 0);


// console.log('active users', activUsers);

// console.log('hasExpensiveItem', hasExpensiveItem);
// console.log('allExpensiveItems', allExpensiveItems);
// console.log('totalPrice', totalPrice);
// console.log('includesLaptop', includesLaptop);
// console.log('includesLaptop2', includesLaptop2);

