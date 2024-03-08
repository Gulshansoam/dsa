// ways to create Array
//1.
const arr = [];
arr[0] = 1;
arr[1] = true;
arr[2] = "1";
arr[3] = "a";

//2.
const arr2 = [1, "a", false];

// 3.
const arr3 = new Array("gulshan", 12, false);

// console.log(arr3);

class myArr extends Array {
  constructor(...elements) {
    super(...elements);
  }
}

const arr4 = new myArr(1, "two", false);
// console.log(arr4);

const str = new String(`gulshan`);
const string4 = new String("A String object");

console.log(str.split("").reverse().join(""));
const data = [1, undefined, 3, true];
console.log(data);


