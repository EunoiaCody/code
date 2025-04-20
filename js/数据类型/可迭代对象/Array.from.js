// 有一个全局方法 Array.from 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组
// 然后我们就可以对其调用数组方法了
let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};
// 无法使用数组的方法

arr = Array.from(arrayLike); // 新变量可以使用数组的方法
alert(arr.pop()); // 方法有效

// Array.from 的完整语法允许我们提供一个可选的“映射（mapping）”函数
let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};
arr = Array.from(range);
alert(arr); // 可迭代对象也是同样

// 求每个数的平方
arr = Array.from(range, num => num * num);

alert(arr); // 1, 4, 9, 16, 25

let str = '𝒳😂';
let chars = Array.from(str);
alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

// 基于Array.from创建能够处理 UTF-16 扩展字符的 slice 方法
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

str = '𝒳😂𩷶';
alert(slice(str, 1, 3)); // 😂𩷶