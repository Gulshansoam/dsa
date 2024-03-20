// in js we can create variables using "var", "let" and "const".
// variables used for store different types of data.
// datatypes are two types primitive and non-primitive datatypes
// primitive datatypes are string, number, boolean whereas  non-primitive datatypes are object, null, etc

// Using var, let, const we can defined string, number, boolean, function, object and array
//  1.var
var name = "John";
var age = 32;
var is_Employee = true;
var createFunction = function () {
  console.log("this is function");
};
createFunction();

var person = {
  firstName: "Dhruv",
  age: 21,
  isNewHere: false,
  anyFunc: function () {
    console.log("Function in Object of person");
  },
};

var data = [
  1,
  "mobile",
  true,
  { car: "BMW", model: 2020, price: "1.5 Crore" },
  [21, 3, 10],
];

// 2. **************************let***********************

let employeeName = "Doe";
let age = 32;
let is_Employed = false;
let newFunction = function () {
  console.log("this is function");
};
createFunction();

let person2 = {
  firstName: "soni",
  age: 23,
  isNewHere: true,
  funcInObj: function () {
    console.log("Function in Object of person");
  },
};

let data2 = [
  1,
  "mobile",
  true,
  { car: "BMW", model: 2020, price: "1.5 Crore" },
  [21, 3, 10],
];

// 3. **************************const***********************
const personName = "Dhruvdip";
const personId = 21;
const is_Engineer = true;

const engineerData = {
  engineerName: "Mark",
  id: 1,
  is_Skilled: true,
};

const data3 = [
  1,
  "mobile",
  true,
  { car: "BMW", model: 2020, price: "1.5 Crore" },
  [21, 3, 10],
];


// 
