
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


const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("fruit name:", fruits[i]);
}


while (age < 30) {
    console.log("Age is less than 30:", age);
    age++;
}

let isLoading = true;

while (isLoading) {
    console.log("this use is loading...");
    isLoading = false;
}

fruits.forEach((fru, i) => {
    console.log("fruit:", fru, "index:", i);
})