// 定义 arr 为一个数组。
// 创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O



// 我们期望使用 map.keys() 得到一个数组，然后使用例如.push 等特定的方法对其进行处理。
// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
