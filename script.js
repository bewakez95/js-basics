// declaring variables
//var,let,const pascal case vs camel case
// var personName = "Bibek";
// let add = "Canberra";
// const age = 20;
// console.log(personName);
// console.log(add);
// console.log(age);

// personName = "Shahi";
// console.log(personName);

// Arithmetic Operators
// Addition

// const a = 1 + 1;
// const b = 4;
// // const c = a + b;
// let c = 1 - b;
// console.log(c);
// console.log(c++); //output first and increment value
// console.log(--c); //decrement first and print the value

// Comparison
// ==
// ===
// > >= (There is no <==)
// < <=
// const result = a == b;
// console.log(result);

// primittive;
// let a = "prem";
// let b = a; same syntax but different output
// a = "sam";
// const a = {
//   name: "bibek",
//   age: 27,
// };
// const b = a; same syntax but different output
// a.name = "sam";
// console.log(a);

// Math object
// Math.PI, Math.random, ceil, round
// console.log(Math.PI);

// Condition if, if else, switch, &&, ||
// truthy - "s", 1, true, Array
// falsy- "",0,false,undefined,null,NAN\

// Ternary
// statement ? "true code" : "false code exec"
// !age ? console.log("welcome to the party") : console.log("go home kiddo");
// age > 18 ? console.log("welcome to the party") : console.log("go home kiddo");

// switch
//&& is used to combine operations- do first then do another

// set timeout
// console.log("outside set timeout");

// setTimeout(() => {
//   console.log("inside set timeout");
// }, 2000); //ms

// interval
// let i = 0;
// setInterval(() => {
//   console.log("inside set interval",i++);
// }, 1000);// run for after every 100 ms

// console.log("1. first");
// setTimeout(() => {
//   console.log("2.second");
// }, 1000);

// console.log("3. third");
// const hey = () => {
//   console.log("4. fourth");
// };

// console.log("5. fifth");
// setTimeout(() => {
//   console.log("6.sixth");
// }, 0);
// console.log("7. seventh");
// hey();
// console.log("8. eight");

// Function
// old way
// function add(a, b) {
//   console.log("from the function");
//   return a + b;
// }
// add();
// console.log(add(4, "9"));

// new way es6 arrow function
// const bio = (name, add) => {
//   const str = "Hello I am" + name + "I am from " + add;
//   return str;
// };
// const data = bio("Bibek", "Nepal");
// console.log(data);

// high order function

// const bio = (name, add) => {
//   return `
//     Hello I am  ${name} from ${add}
//     `;
// };
// const data = bio("Bibek", "Nepal");
// console.log(data);

// const bio = (name, add) => "Hello I am" + name + "I am from " + add;

// const data = bio("Bibek", "Nepal");
// console.log(data);

// loop
/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
*/

// while loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// data manipulation
// safe number is -2^53-1 to 2^53-1
// const a = "5";
// const val = +a; //Number(a) //parseInt
// console.log(typeof val);

// escape charater = /
// str.len = space also counts
// str.toUpperCase,toLowerCase
// const val = str[2]
// const val = str.indexOf["my"], lastIndexOf("i"), replace("i","you"), replaceAll,substring(4,5),includes("Prem")[give true or flase]slice,charAt(10),
//**split(" ")[splits finding space], search("prem")[same like includes but gives index value of character]

// Arrays
// length, push, pop, shift, unshift, toString, join,
// [], splice(location,o-do nothing/1-add,"Tomato"), slice, indexOf, Sort, reverse, forEach, map, Filter, reduce, find, every
// const fruits = ["string", 23, null, boolean, true, {},["array"]]

// const fruits = ["apple", "banana", "orange"];
// fruits.push("watermelon");
// fruits.unshift("mango");
// fruits.pop();
// const data = fruits.slice(1);
// console.log(fruits, data);
// bubble sort  fruits.sort((a,b)=>b-a)
// fruits.forEach((item) => {
//   console.log(item);
// });

// Map
// const newfruits.map((item) => {
//   console.log(item);
// });

// Filter
// const newfruits = fruits.filter((item) => item.includes("p"));

// Reduce
// const balance = [234, 323, 323, 123, 32, 123, 321];
// const total = balance.reduce((acc, num) => acc + num, 0);
// console.log(total);

// find
// const fruit
// const data = fruits.find((item) => item === "orange");
// console.log(data);

// Every
// const data = fruits.every((item) => item.includes("a"));
// console.log(data);

// Challenge 1:
// create array of 50 random number range 1 and 100 programmatically.
// sort array in decending order
// get the total value of the array
// divide original array into 2 odd and even array
// remove the duplicates from random array

// const random = [];
// for (i = 1; i <= 50; i++) {
//   let a = Math.floor(Math.random() * 100) + 1;

//   //   console.log(a);
//   random.push(a);
// }
// random.sort(function (a, b) {
//   return b - a;
// });
// const total = random.reduce((acc, num) => acc + num, 0);
// // console.log(random);

// var evenNumbers = random.filter(function (element) {
//   return element % 2 === 0;
// });
// var oddNumbers = random.filter(function (element) {
//   return element % 2 === 1;
// });
// console.log(random);
// console.log(total);
// console.log(evenNumbers);
// console.log(oddNumbers);
// function unique(arr) {
//   const result = [];

//   for (const i of arr) {
//     let noRepeat = true;

//     for (const j of result) {
//       if (i === j) {
//         noRepeat = false;
//         break;
//       }
//     }

//     if (noRepeat) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// 🎉  [ 1, 3, 2 ]
// console.log(unique(random));
// console.log(uniq);

// create an array of 50 unique random numbers range between 1 and 100
// const randomUniq = [];

// for (i = 1; randomUniq.length < 50; i++) {
//   let a = Math.floor(Math.random() * 100) + 1;
//   !randomUniq.includes(a) && randomUniq.push(a);
// }
// console.log(randomUniq);

// Object
// const mob = {
//   brand: "Samsung",
//   color: "Black",
//   price: 10,
//   isItBroken: false,
//   dial: () => {
//     console.log("CAlling..");
//   },
// };
// Assign, delete,Property
// const val = mob; //const val = mobile['color'];
// mob.useAsHammer = false; //add property
// mob.price = 1000; // modify
// console.log(val);
// delete mob.price; //Delete

//Destructuring when we dont need some properties in object
// const { brand, color } = mob;
// const person = {
//   name: "Bibek",
//   address: "Sydney",
//   age: 20,
// };
// const bio = ({ name, address, age }) => {
//   //   const { name, add, age } = personObj; // destructuring
//   return `
//     hi my name is ${name} I live in ${address} and I am ${age} years old
//     `;
// };
// const result = bio(person);
// console.log(result);

// const newObj = Object.assign({},person,parent) to combine(rest) or spreading out- const newObj = {...parent,...person}
// const keyArg = Object.keys(newObj); to convert to array
// const keyArg = Object.values(newObj); to convert to array

//  Date()
// const dt = Date.now();
// dt.setDate(dt.getDate() + 7);
// console.log(dt);

// Challenge
// create a function that takes food name and expiry Date, returns
// like xyz is expired or xyz has 5 more days to consume before expires

//expired
const fish = {
  name: "Tuna Fish",
  expiry: "07/07/2023",
};

//not expired
const milk = {
  name: "A2 milk",
  expiry: "09/07/2023",
};

const checkExpiry = ({ name, expiry }) => {
  const dt = Date.now();
  const current = new Date(dt);

  //   console.log(current.toLocaleDateString());

  if (expiry <= current.toLocaleDateString()) {
    // const fft = new Date(expiry).getTime() is the right way
    return `${name} is  expired`;
  } else {
    return `${name} is not expired`;
  }
  //   const food = () => {};
};
const result = checkExpiry(fish);
const result1 = checkExpiry(milk);

console.log(result);
console.log(result1);
