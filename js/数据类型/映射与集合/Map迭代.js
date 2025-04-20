// 如果要在 map 里使用循环，可以使用以下三个方法：

// map.keys() —— 遍历并返回一个包含所有键的可迭代对象，
// map.values() —— 遍历并返回一个包含所有值的可迭代对象，
// map.entries() —— 遍历并返回一个包含所有实体[key, value] 的可迭代对象，for..of 在默认情况下使用的就是这个。

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

for (let vege of recipeMap.keys()) {
  alert(vege); // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

for (let entry of recipeMap) {
  alert(entry); // cucumber,500 (and so on)
}

recipeMap.forEach((values, keys, map) => {
  alert(`${keys}: ${values}`); // cucumber,500 (and so on)
});