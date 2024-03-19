const arr = [11, 9, 2, 3, 8, 8, 11];

const arrOfString = ["dhruv", "john", "doe", "annie"];

// ***************sorting of array using sort method******************************//

//++++++ Remember if you sort array of number then always use callback inside sort function (refer w3s school for why)+++++//
function arrSortAscNumOrder(sortVal) {
  return sortVal.sort((a, b) => a - b);
}
const num_asc_sorted_arr = arrSortAscNumOrder(arr);
console.log(
  num_asc_sorted_arr,
  "sorting in ascending order of array of numbers using sort method"
);

function arrSortDescNumOrder(descSortVal) {
  return descSortVal.sort((a, b) => b - a);
}
const num_desc_sorted_arr = arrSortDescNumOrder(arr);
console.log(
  num_desc_sorted_arr,
  "sorting in descending order of array of numbers using sort method"
);

// +++++++++++++++++++++++++++++++++++
// sorting array of string using array method

function strSortAscOrder(arrStr) {
  return arrStr.sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );
}
const sorted_asc_string_arr = strSortAscOrder(arrOfString);
console.log(sorted_asc_string_arr, "Sorted array of string in ascending order");

function strSortDescOrder(strArr) {
  return strArr.sort((a, b) =>
    b.localeCompare(a, "en", { sensitivity: "base" })
  );
}
const sorted_desc_arr_str = strSortDescOrder(arrOfString);
console.log(sorted_desc_arr_str, "Sorted array of string in descending order");
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

const num_remove_dups = removeDuplicate(arr);
console.log(num_remove_dups, "remove_Duplicate using filter method");

// *****************************map-method************************************** //

function multiplyByTwo(val) {
  return val.map((res) => res * 2);
}
let newArr = multiplyByTwo(arr);
console.log(newArr);
