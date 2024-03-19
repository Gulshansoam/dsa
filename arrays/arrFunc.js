const arr = [11, 9, 2, 3, 8, 8, 11];

const arrOfString = ["dhruv", "John", "doe", "annie"];

// ***************sorting of array using sort method******************************//

//++++++ Remember if you sort array of number then always use callback inside sort function (refer w3s school for why)+++++//
function arrSortAscOrder(sortVal) {
  return sortVal.sort((a, b) => a - b);
}
const num_Sorted_arr = arrSortAscOrder(arr);
console.log(
  num_Sorted_arr,
  "sorting in ascending order of array of numbers using sort method"
);

// *****************************filter-method************************************** //

function removeEven(val) {
  return val.filter((res) => res % 2 === 0);
}
let evenNumber = removeEven(arr);
console.log(evenNumber, "even numbers using filter method");

function removeOdd(val) {
  return val.filter((res) => res % 2 === 1);
}
let oddNumber = removeOdd(arr);
console.log(oddNumber, "odd numbers using filter method");

function removeDuplicate(duplicateArr) {
  return duplicateArr.filter((res, i) => duplicateArr.indexOf(res) === i);
}

const num_Remove_Dups = removeDuplicate(arr);
console.log(num_Remove_dups, "remove_Duplicate using filter method");

// *****************************map-method************************************** //

function multiplyByTwo(val) {
  return val.map((res) => res * 2);
}
let newArr = multiplyByTwo(arr);
console.log(newArr);
