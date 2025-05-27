let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    if (this.isSleeping)
      this.isSleeping = false;
    else
      this.isSleeping = true;
  },
  isSleeping: false
};

let rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // false
