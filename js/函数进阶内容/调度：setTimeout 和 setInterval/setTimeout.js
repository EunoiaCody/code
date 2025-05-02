function sayHi(phrase, who) {
  console.log(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, 'Hello', 'John'); // sayHi()会在 1000 毫秒(1 秒)后执行

setTimeout(() => console.log('Hello'), 1000);