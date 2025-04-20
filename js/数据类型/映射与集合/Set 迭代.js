// 我们可以使用 for..of 或 forEach 来遍历 Set

let set = new Set(['oranges', 'apples', 'bananas']);

for (let value of set) {
  alert(value);
}

set.forEach((value, valueAgain, set) => {
  alert(value);
});