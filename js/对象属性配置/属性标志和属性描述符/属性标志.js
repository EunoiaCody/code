let user = {
  name: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));
// 查看对象属性

Object.defineProperty(user, 'name', {
  writable: false
});
// 把对象的某个属性改成只读

Object.defineProperty(user, 'age', {
  value: 18,
  // 对于新属性，我们需要明确地列出哪些是 true
  enumerable: true,
  configurable: true,
});

console.log(user.age);