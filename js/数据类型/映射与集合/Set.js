// Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。
// 它的主要方法如下：

// new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
// set.add(value) —— 添加一个值，返回 set 本身
// set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
// set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
// set.clear() —— 清空 set。
// set.size —— 返回元素个数。

let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert(set.size); // 3

for (let user of set) {
  alert(useer.name); // John（然后 Pete 和 Mary）
}