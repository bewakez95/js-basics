// Object Oriented Programming
// Objects has properties and methods
// const person = {
//   name: "Bibek",
//   bio: () => {
//     return `This is $(person.name) inside bio method`;
//   },
// };
// console.log(person);

// const person = (name, add) => {
//   return {
//     personName: name,
//     Address: add,
//     bio() {
//       return `This is ${this.personName} inside bio method`;
//     },
//     location() {
//       return `
//         he lives in ${this.Address} inside location methos`;
//     },
//     toUpper() {
//       this.personName = this.personName.toUpperCase();
//       return `
//           he lives in ${this.Address} inside location methods`;
//     },
//   };
// };
// const pObj = person("bibek", "canberra");
// console.log(pObj.bio());
// console.log(pObj.location());
// console.log(pObj.toUpper());
// console.log(pObj.bio());

//class based OOP
// class Person {
//   #key;
//   constructor({ name, add }) {
//     this.name = name;
//     this.add = add;
//     this.#key = "awddd13213cee"; //exposed so we use # in front of variable
//   }
//   bio() {
//     return `This is ${this.name} inside bio`;
//   }
//   location() {
//     return "Location";
//   }
//   finddata() {
//     return this.#callAPI();
//   }

//   // Astraction
//   #callAPI() {
//     return "API Data =>" + this.#key;
//   }
// }
// const personObj = {
//   name: "bibek",
//   add: "canberra",
// };
// const pObj = new Person(personObj);
// pObj.phone = "3123213"; //POlymorphism we added phone
// console.log(pObj.bio());
// console.log(pObj.finddata());

// const pObj = person("bibek", "canberra");
// console.log(pObj.bio());
// console.log(pObj.location());
// console.log(pObj.toUpper());
// console.log(pObj.bio());

//Inheritance
// class LivingObj {
//   constructor(name, dob, isMamal) {
//     this.name = name;
//     this.dob = dob;
//     this.isMamal = isMamal;
//   }
//   bio() {
//     return `The animal is called ${this.name}, was born on ${this.dob} and their mammal status = ${this.isMamal}`;
//   }
// }
// const cat = new LivingObj("whisper", "2020-2-20", "yes");
// console.log(cat.bio());
// class Human extends LivingObj {
//   constructor(name, dob, isMamal) {
//     super(name, dob, isMamal);
//   }
//   speak() {
//     return `${this.name}`;
//   }
// }
// class Animal extends LivingObj {
//   constructor(name, dob, isMamal, owner) {
//     super(name, dob, isMamal);
//     this.owner = owner;
//   }
//   owner() {
//     return this.name;
//   }
// }
// const bibekObj = new Human("Bibek", "1995-3-2", "yes");
// const catObj = new Animal("wisper", "2020-3-2", "no", "friend");
// console.log(bibekObj.bio());
//Functional programming
// const bio = (name) => {
//   return `This is $(person.name) inside bio method`;
// };
// const rBio = bio("Rohit");
// console.log(rBio);

// Functional Programming(FP)
// Seperation of concerns
// const add = (a, b) => {
//   //   total = a + b;//storing so it causes memory leak
//   return a + b; //pure function because it does only one thing and does not do ripple effect, always accurate
// };
// const result = add(5, 6);
// console.log(result);

// High order function
// const addAndSquare = (a, b) => {
//   const total = add(a, b);
//   return (multiplier) => {
//     return total ** multiplier;
//   };
// };

// const add = (x, y) => {
//   return x + y;
// };
// const sub = (x, y) => {
//   return x - y;
// };
// const calculator = (a, b, func) => {
//   return func(a, b);
// };
// const result = calculator(4, 5, add);
// const result2 = calculator(4, 5, sub);
// const result3 = calculator(4, 5, addAndSquare);

//Recursion
// const money = [232, 323, 443, 654, 645];
// let num = 0;
// const total = (arg) => {
//   num = num + arg.pop();
//   //   console.log(totalnum);
//   if (money.length === 0) {
//     return num;
//   }
//   //   console.log(totalnum);
//   return total(arg);
// };
// const sum = total(money);
// console.log(sum);
