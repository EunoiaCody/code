// 定义一个字符串
let string = "This is a string";

// 获取字符串长度,使用 length 属性
string.length;

// 检索特定字符串字符
string[15];
// 检索最后一个字符
string[string.length - 1];

// 在字符串中查找子字符串并提取它
string.indexOf(`This`); // 若有,则 return 0, 返回 “T” 的位置
string.indexOf(`what`); // 若无,则 return -1

const inStr = 'string';
if (string.indexOf(inStr) !== -1) {
    console.log(inStr);
}

string.slice(0, 4); // 打出 "This"
string.slice(0); // 全部打出

// 转换大小写
let radData = "My NaMe Is MuD";
radData.toLowerCase(); // 转小写
radData.toUpperCase(); // 转大写

// 替换字符串的某部分
string.replace(`string`, `world`); // 只是返回替换的结果, 并不真正修改变量
string = string.replace(`string`, `world`); //修改变量为替换后的结果