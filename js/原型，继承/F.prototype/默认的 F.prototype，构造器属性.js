let animal = {
  eat: true,
};

function Rabbit(name) {
  this.name = name;
  console.log(this.name);
}

Rabbit.prototype = animal;

Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit,
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new Rabbit("Black Rabbit")