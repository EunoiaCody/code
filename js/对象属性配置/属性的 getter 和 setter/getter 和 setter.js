let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
};

console.log(user.fullName);

user.fullName = 'Eunoia Cody';

console.log(user.name);
console.log(user.surname);
console.log(user.fullName);