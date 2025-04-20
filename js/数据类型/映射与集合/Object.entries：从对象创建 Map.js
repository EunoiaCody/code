let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);

alert(map.get('1'));

// 从一个已有的普通对象（plain object）来创建一个 Map

let obj = {
  name: 'John',
  age: 30,
};

map = new Map(Object.entries(obj));

alert(map.get('name')); // John