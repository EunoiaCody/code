let animal = {
  eats: true,
};

// 创建一个以 animal 为原型的新对象
let rabbit = Object.create(animal);
// 与 {__proto__: animal} 相同

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) == animal);

Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}

rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(rabbit.jumps); // true

let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
