let user = {
  name: "John",
  age: 30,
  // sayHi: () => { // 在属性中用函数创建方法
  //   alert('Hello!')
  // };

  sayHi() { // 方法简写
    alert('Hello!');
  }
};

// user.sayHi = () => { // 利用函数创建方法
//   alert("Hello!");
// };



user.sayHi();