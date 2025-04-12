// 创建数组
let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];

shopping[0] = "potato chips"; // 第0项变成 "potato chips" , 其他向后移一项
random[2][2]; // 访问多维数组

// 获取数组长度
sequence.length; // return 7
for (let i = 0; i < sequence.length; i++) { // 常在循环中使用
    console.log(sequence[i]); // 输出每一项
}