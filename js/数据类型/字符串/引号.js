// 反引号允许我们通过 ${…} 将任何表达式嵌入到字符串中
function sum(a, b) {
  return a + b;
};

alert(`1 + 1 = ${sum(1, 1)}.`); // 1 + 1 = 2

// 反引号的另一个优点是它们允许字符串跨行
let guestList = `Guests:
* John
* Pete
* Mary
`;

alert(guestList);