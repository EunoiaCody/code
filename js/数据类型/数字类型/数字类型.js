let billion = 1000000000; // 一般定义
billion = 1_000_000_000; // 用下划线做分隔符,"_"是 "语法糖"
billion = 1e9; // 科学计数法, 表示 $ 1 \times 10^{9} $

let mcs = 0.000001;
mcs = 1e-6;// 表示 $ 1 \times 10^{-6} $

alert(0xff); // 支持十六进制



// toString(base)
let num = 255;

alert(num.toString(16)); // 转换成十六进制
alert(num.toString(2)); // 二进制
alert(1.63e6.toString(36)); // 不用变量直接转换



// 舍入(rounding)
alert(Math.floor(3.5)); // 向下舍, 显示 '3'
alert(Math.ceil(3.5)); // 向上舍, 显示 '4'
alert(Math.round(3.5)); // 四舍五入
alert(Math.trunc(3.5)); // 取整

alert(16449e-4.toFixed(2)); // 舍到小数点后两位



// 其他数学函数
alert(Math.random()); // [0,1)随机数

alert(Math.max(13, -47, 45, 0)); // 选出最大的数
alert(Math.min(13, -47, 45, 0)); // 选出最小的数

alert(Math.pow(2, 10)); // $ 2^{10} $