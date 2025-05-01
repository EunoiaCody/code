// 写一个函数 count(obj)，该函数返回对象中的属性的数量：
let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

alert(count(user));