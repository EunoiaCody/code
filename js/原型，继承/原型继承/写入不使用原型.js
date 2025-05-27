let animal = {
  eats: true,
  walk() {
    console.log('An animal walks');
  },
};

let rabbit = {
  __proto__: animal,
  walk() {
    console.log(`Rabbit can't walk! But it can jump!`);
  }
};

rabbit.walk();



let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  // name: 'Eunoia',
  // surname: 'Cody',
  idAdmin: true
};

console.log(admin.fullName);

admin.fullName = 'Eunoia Cody';

console.log(admin.fullName);
console.log(user.fullName);
