
// // Primitives (value types)
// let str = "Hello";          // string
// let num = 42;               // number
// let bool = true;            // boolean
// let nothing = null;         // null
// let notDefined;             // undefined

// str = "World";          // Reassigning a new string value

// const person = 'rupa'


// // Reference types
// let obj = { name: "John" }; // object
// let arr = [1, 2, 3];        // array
// let func = () => {};        // function


// // Type coercion
// // console.log(5 + "5");        // "55" (number → string)
// // console.log("5" == 5);       // true (type coercion)
// // console.log("5" === 5);      // false (strict comparison)


// let a = 10;
// let b = "10";

// let c = a + b

// let mod = 10 % 3;  
// let divide = 10 / 3; 

// let age = 24;
// let hasLicense = false
// let candDrive = age >= 18 && hasLicense;
// let candDrive2 = age >= 18 || hasLicense;

// let score = 55
// // if (score >= 90) {
// //     console.log("Grade A");
// // } else if (score >= 80) {
// //     console.log("Grade B");
// // } else {
// //     console.log("Grade C");
// // }

// //  score >= 90 
// //  ? console.log("Grade A") 
// //  : score >= 80 
// //  ? console.log("Grade B") 
// //  : console.log("Grade C"); 


// //  // switch (better for multiple exact matches)
// // let day = "Monday";

// // switch ((day).toLowerCase) {
// //     case "Monday":
// //         console.log("Start of work week");
// //         break;
// //     case "Friday":
// //         console.log("Weekend almost here!");
// //         break;
// //     default:
// //         console.log("Midweek");
// // }
// // console.log(typeof(age));
// // console.log();


// // const fruits = ["apple", "banana", "cherry"];

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log("fruit name:", fruits[i]);
// // }


// // while (age < 30) {
// //     console.log("Age is less than 30:", age);
// //     age++;
// // }

// // let isLoading = true;

// // while (isLoading) {
// //     console.log("this use is loading...");
// //     isLoading = false;
// // }

// // fruits.forEach((fru, i) => {
// //     console.log("fruit:", fru, "index:", i);
// // })

// const numbers = [1, 2, 3, 4, -5, 6];

// let totalValue = numbers.reduce((acc, currVal) => {
//     return acc + currVal
// }, 0); 

// // console.log("total value:", totalValue);

// let totalNumber2 = 0;
// for (let i = 0; i < numbers.length; i++) {
//     totalNumber2 += numbers[i];
// }

// for(let num of numbers){
//     totalNumber2 += num;
// }

// // console.log("total number 2:", totalNumber2);

// const users = [
//   { id: 101, name: "Sara", email: "sara@ex.com", active: true  },
//   { id: 202, name: "Ali",  email: "ali@ex.com",  active: false },
//   { id: 303, name: "Lina", email: "lina@ex.com", active: true  },
// ];

// const filterdData = users.map((user) => {
//     return ({ id: user.id, name: user.name });
// })

// const activUsers = users.filter((user) => !user.active )
// // const AliData = users.filter((user) => user.name !== "Ali" )
// const AliData = users.filter(user => user.id == 202 )

// const linadata = users.find(user => user.name === "Lina" )

// // console.log('lina data', linadata);

// const items = [
//     { id: 101, name: "Laptop", price: "31", active: true  },
//     { id: 202, name: "Mouse",  price: "431",  active: false },
//     { id: 303, name: "cable", price: "201", active: true  },
// ];



// const hasExpensiveItem = items.some((item)=> {
//     return item.price > 200;
// })

// const allExpensiveItems = items.every((item)=> {
//     return item.price > 200;
// })

// const isAllLaptop = items.every((item)=> {
//     return item.name === "Laptop";
// })



// arr = ['apple', 'banana', 'cherry'];
// const includesLaptop2 = arr.includes("apple");



// const ArrayHasAliAndActive = items.filter((item) => item.name === "laptop" && item.active === true);
// const ArrayHaslaptopOrActive = items.filter((item) => item.name === "laptop" || item.active === true);

// // console.log(ArrayHasAliAndActive);
// // console.log(ArrayHasAliOrActive);

// const ArrayHasAli = items.filter((item) => item.name === "Ali")
// const activeAli = ArrayHasAli.find((item) => item.active === true);

// // const activeAli = items.filter((item) => item.name === "Ali").find((item) => item.active === true);

// // const totalPriceoOfAli = items.filter((item) => item.name === "Ali").reduce((acc, currVal) => acc + Number(currVal.price), 0);
// const totalPriceoOfAli = ArrayHasAli.reduce((acc, currVal) => acc + Number(currVal.price), 0);

// // console.log(totalPriceoOfAli);
// // console.log(activeAli);







// // const totalPrice = items.reduce((acc, currVal) => {
// //     return acc + currVal.price;
// // }, 0);


// // console.log('active users', activUsers);

// // console.log('hasExpensiveItem', hasExpensiveItem);
// // console.log('allExpensiveItems', allExpensiveItems);
// // console.log('totalPrice', totalPrice);
// // console.log('includesLaptop', includesLaptop);
// // console.log('includesLaptop2', includesLaptop2);




// Modern ES6+ Syntax
// 1.2 Arrow Functions

function add(a, b) {
    return a + b
}

// Arrow function 
const addNumbers = () => {
    return a + b
}

const DivieNum = (a , b) => a / b; 
const SqureNum = a => a * a; 

const lastResult = (l ,f) => {
    const sum = add(l, f);
    return sum * 5
}


// Template letrals 

const name = 'Rami'
const age = 17

// old school 
const greet = "This is " + name + ", " + 'he is ' + age + " years old"

// new school 
const greetNewSchool = `This is ${name}, and he's ${age} years old `

// Multi-line strings
const html = `
  <div class="user">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
    <p>Next year: ${age + 1}</p>
  </div>
`;



// Destructuring

const colors = ["red", "green", "blue"];
// const [R, G, B] = colors

const [first, ...others] = colors

const user = {
    id: 1,
    name: "Basim Thani",
    email: "basim.thani@example.com",
    role: "admin",
    status: "active",
    createdAt: "2025-01-12",
    password: "8435023",
    comfirm_password: 8435023
}

const {password, comfirm_password, status, ...theOthers} = user

const registerFunction = () => {
   try {
    const useInof = {...theOthers, status: 'inactive'}
    if(password == comfirm_password) {
        console.log('successfull logged in')
    } else {
        console.log('invaled cordentials')
    }
    console.log(useInof)
  } catch (error) {
    console.log(error)
  }

}

// console.log(registerFunction())


const student = {
  id: 1,
  names: "John",
  ages: 25,
  address: {
    city: "NYC",
    country: "USA"
  }
};


const { names, ages, ...otherInfo } = student;
const { address: { city } } = student; // nested



// Spread operator (...)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combine = [ ...arr1, ...arr2, 3, 6 ]

// console.log(combine)


// Promises
// const myPromise = new Promise((resolve, reject) => {
//   let a = 2 + 4
//   if ( a == 2 ) {
//     resolve('success')
//   } else {
//     reject('failed')
//   }
// })

// myPromise.then((message) => {
//   console.log('Basim has fullfilled his promise, ' + message)
// }).catch((message) => {
//   console.log('Basim has fialed his promise, ' + message)
// })



const recordVidoeOne = new Promise((resolve, reject) => {
  resolve(user)
})

const recordVidoeTow = new Promise((resolve, reject) => {
  resolve('Video 2 recorded')
})

const recordVidoeThree = new Promise((resolve, reject) => {
  resolve('Video 3 recorded')
})

// Promise.all([
//   recordVidoeOne, 
//   recordVidoeTow, 
//   recordVidoeThree
// ]).then((message) => {
//   console.log(message)
// })

// Promise.race([
//   recordVidoeOne, 
//   recordVidoeTow, 
//   recordVidoeThree
// ]).then((data) => {
//   console.log(data)
// })





