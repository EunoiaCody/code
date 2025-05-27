let animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  }
};

let human = {
  think: true,
};

human.__proto__ = animal; // 设置 human.[[Prototype]] = animal

console.log(human.eats);
console.log(human.think);
console.log(human.walk);

let baby = {
  age: 1,
  think: false,
  __proto__: human,
}

console.log(baby.think);
console.log(baby.age);
console.log(baby.eats);
