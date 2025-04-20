// new Map() —— 创建 map。
// map.set(key, value) —— 根据键存储值。
// map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
// map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
// map.delete(key) —— 删除指定键的值。
// map.clear() —— 清空 map。
// map.size —— 返回当前元素个数

let map = new Map();

map.set('1', 'str1');   // 字符串
map.set(1, 'num1');     // 数字
map.set(true, 'bool1'); // 布尔值

alert(map.get(1));   // num1
alert(map.get('1')); // str1

alert(map.size); // 3



// Map 还可以使用对象作为键

let john = { name: 'John' };

// 存储每个用户的来访次数
let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123