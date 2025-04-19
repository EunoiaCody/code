let str = `Hello`;

// 第一个字符
alert(str[0]); // H
alert(str.charAt(0)); // H

// 最后一个字符
alert(str[str.length - 1]); // o



// 可以使用 for..of 遍历字符
for (let char of "Hello") {
  alert(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}

// 字符串不可变,只能替换
let str1 = 'Hi';
str = 'h' + str[1]; // 即 h + i = hi