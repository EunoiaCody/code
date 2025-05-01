// 编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

function sumTo(n) {
  return (n == 1) ? n : (n + sumTo(n - 1));
}