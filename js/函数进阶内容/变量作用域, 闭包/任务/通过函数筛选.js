function inBtween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 4, 5, 6, 78, 83, 157];

console.log(arr.filter(inBtween(3, 6)));

console.log(arr.filter(inArray([1, 2, 157])));