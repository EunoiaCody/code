// 混合值
let arr = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];

// 获取索引为 1 的对象然后显示它的 name
alert(arr[1].name); // John

// 获取索引为 3 的函数并执行
arr[3](); // hello



let fruits = [
  "Apple",
  "Orange",
  "Plum",
];
alert(fruits.at(-1)); // 可以输出最后一个项

fruits.pop(); // 取出并返回数组的最后一个元素
fruits.push('Pear'); // 在数组末端添加元素
fruits.shift() // 取出数组的第一个元素并返回它
fruits.unshift('Apple'); // 在数组的首端添加元素

// push 和 unshift 方法都可以一次添加多个元素
fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]