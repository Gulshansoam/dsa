function add(a, callback) {
  return a + callback();
}
let one = add(1, () => 2);
console.log(one);
