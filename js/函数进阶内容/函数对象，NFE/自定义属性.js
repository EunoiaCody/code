function sayHi() {
  console.log('Hi');

  sayHi.counter++;
}
sayHi.counter = 0;

let times = 5;

for (let t = 1; t <= times; t++) {
  sayHi();
}

console.log(`Called ${sayHi.counter} times`);



function makeCounter() {
  // 不需要这个了
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1