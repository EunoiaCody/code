let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// console.log(Math.max(...arr1, ...arr2)); // spread 语法把数组转换为参数列表
// console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 将 spread 语法与常规值结合使用

// let merged = [523, 5456, ...arr1, 5394, ...arr2];
// console.log(merged);



// let meet = 'hello';
// console.log([...meet]);
// console.log(Array.from(meet)); // 更通用



let arrCopy = [...arr1];
// console.log(JSON.stringify(arr1) === JSON.stringify(arrCopy)); // true
// console.log(arr1 === arrCopy); // false 引用不同

// 修改我们初始的数组不会修改副本：
arr1.push(99999);
console.log(arr1);
console.log(arrCopy);