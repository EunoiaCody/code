let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(JSON.stringify(descriptor, null, 2));



let user = {
  name: 'John',
};

Object.defineProperty(user, 'name', {
  configurable: false, // 防止更改或删除属性标志，但允许更改对象的值
});

user.name = 'Eunoia'; // 正常工作
console.log(user.name);
delete user.name; // Error
console.log(user.name);



Object.defineProperty(user, 'name', {
  writable: false,
  configurable: false,
});
// 使 user.name 变成一个常量

// 以下都不起作用
user.name = 'Pete';
delete user.name;
Object.defineProperty(user, 'name', {
  value: 'pete',
});
