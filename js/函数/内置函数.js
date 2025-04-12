const myText = "我是一个字符串";
const newString = myText.replace("字符串", "香肠");
console.log(newString);
// replace() 字符串函数接受源字符串和目标字符串，
// 将源字符串替换为目标字符串，并返回新形成的字符串

const myArray = ["我", "爱", "巧克力", "青蛙"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// join() 函数接受一个数组，
// 将所有数组元素连接成一个单一的字符串，并返回这个新字符串

const myNumber = Math.random();
// random() 函数生成一个随机
// 数字在 0 和 1 之间，并返回该数字

// 自定义函数
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgb(255 0 0 / 50%)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}
