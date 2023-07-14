// reading data from browser to js

// To select element
// const element = document.getElementById("first"); //Classic way selection by id
// const element = document.querySelector("#first"); //query id selector
// const element = document.getElementsByClassName("info1"); //class selector(get all in collection)
// const element = document.querySelector("#display"); //query id selector(only get first)
// const element = document.querySelector("div > div"); //query id selector(only get first)
// document.write(`

// <h2>hello</h2>
// `);
// console.log(dt.innerHTML);

// const element = document.querySelector("a");
// const dt = element.innerHTML;

// *push the element
// element.innerHTML = "New content ";

// *Add new attribute
// element.setAttribute("style", "color:red");

// *Read from attribute
// const val = element.attributes.href.value;
// console.log(val);

// *Setting attributes
// element.style.color = "green";
// element.style.textDecoration = "none";

// *Add class to element
// element.classList.add("success");

// Create function to change coloe with a click and modify style
// const clickMe = () => {
//   //   console.log("d");
//   document.querySelector("#display").classList.toggle("success");
// };

// const clickMe = () => {
//   //   console.log("d");
//   let str = document.querySelector("#display").innerHTML;
//   let reverse = str.split("").reverse().join("");
//   //   for (str.length; str.length <= 0; --str.length) {
//   //     let reverse = str;
//   //   }
//   console.log(reverse);
//   element.innerHTML = reverse;
//   console.log(document.querySelector("#display").innerHTML);
//   document.querySelector("#display").classList.toggle("error");
// };

// //*Add evenlistener in DOM also called as calback
// const element = document.querySelector("#display"); //query id selector(only get first)
// element.addEventListener("click", clickMe);
