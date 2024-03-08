const arr = [11, 9, 2, 3, 8];

// *****************************filter-method************************************** //

function removeOdd(val) {
  return val.filter((res) => res % 2 === 1);
}
function removeEven(val) {
  return val.filter((res) => res % 2 === 0);
}
let evenNumber = removeEven(arr);
console.log(evenNumber, "even numbers");
let oddNumber = removeOdd(arr);
console.log(oddNumber, "odd numbers");

// *****************************map-method************************************** //

function multiplyByTwo(val) {
  return val.map((res) => res * 2);
}
let newArr = multiplyByTwo(arr);
console.log(newArr);


