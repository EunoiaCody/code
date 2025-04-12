let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];

// 字符串和数组之间的转换
let myArray = myData.split(','); // 用 ‘,’ 将上面的 myData 分割成字符数组
let mtNewString = myArray.join(';'); // 将 myArray 合并成一个字符串, 每一项用 ‘,’ 分割
dogNames.toString(); // 无参数, 用 ‘,’ 分割

// 添加和删除数组项
myArray = [
    "Manchester",
    "London",
    "Liverpool",
    "Birmingham",
    "Leeds",
    "Carlisle",
];

myArray.push('Cardiff'); // 在数组末尾添加一个项
myArray.push('Cardiff', "Bradford", "Brighton"); // 在数组末尾添加多个项
var newLength = myArray.push('Bristol'); // 方法调用完成时返回长度, 可以用变量存储

myArray.pop(); // 删除最后一个项目
let removedItem = myArray.pop(); // 会返回删除的项目

// unshift() 和 shift() 从功能上与 push() 和 pop() 完全相同，只是它们分别作用于数组的开始，而不是结尾。
myArray.unshift("Edinburgh");
removedItem = myArray.shift();