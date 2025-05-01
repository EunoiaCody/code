let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js', 'ts', 'vue', 'react'],
  spouse: null,
};

let json = JSON.stringify(student);

alert(typeof json);

alert(json);

// 数字在 JSON 还是数字
alert(JSON.stringify(1)) // 1

// 字符串在 JSON 中还是字符串，只是被双引号扩起来
alert(JSON.stringify('test')) // "test"

alert(JSON.stringify(true)); // true

alert(JSON.stringify([1, 2, 3])); // [1,2,3]

let user = {
  sayHi() { // 被忽略
    alert("Hello");
  },
  [Symbol("id")]: 123, // 被忽略
  something: undefined // 被忽略
};

// JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过。

// 即：

// 函数属性（方法）。
// Symbol 类型的键和值。
// 存储 undefined 的属性。
alert(JSON.stringify(user)); // {}（空对象）