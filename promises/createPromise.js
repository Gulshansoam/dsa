// let myPromise = new Promise((resolve, reject) => {
//   var x = 0;
//   if (x === 0) resolve("success");
//   reject("error");
// });

// console.log(myPromise); // Outputs: Promise

// myPromise.then((res) => console.log("hell")).catch((err) => console.log(err));

function calc(type, a, b) {
  if (type === "add")
    return new Promise((resolve, reject) => {
      resolve(a + b);
    });
  if (type === "mul")
    return new Promise((resolve, reject) => {
      if (a !== 0 && b !== 0) resolve(a * b);
      reject(0);
    });
  if (type === "sub")
    return new Promise((resolve, reject) => {
      if (a > b) resolve(a - b);
      reject("Error");
    });
  if (type === "div")
    return new Promise((resolve, reject) => {
      if (a > b && b !== 0) resolve(a / b);
      reject("Error");
    });
}

calc("add", 3, 5).then((res) => console.log(res));

// **********************fetch-method****************************************** //

// we consume promises most of the using fetch method in js

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
