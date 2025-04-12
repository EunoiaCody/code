let str1 = '可以重新赋值';
const str2 = '不可以重新赋值';

console.log(str1);
console.log(str2);

const myName = 'Eunoia Cody';
const greeting = `hello, ${myName}` // 串联
console.log(greeting);

const button = document.querySelector("button");

function greet() {
    const name = prompt("你叫什么名字呀?")
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `你好呀, ${name}! 这就把你写进 Death Note!`;
}

button.addEventListener("click", greet);

const favSong = '風の終焉ダンスパーティー';
const score = 10;
const total = 10;
const output = `我超喜欢《${favSong}》, 她永远 ${(score / total) * 100} 分`;
console.log(output);

// const newLine = `あの日、
// 人類は思い出した、
// 巨人に支配された、
// 恐怖を`;
const newLine = `あの日、\n人類は思い出した、\n巨人に支配された、\n恐怖を`;
console.log(newLine)

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
