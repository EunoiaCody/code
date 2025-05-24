// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new User('John', 25);

// console.log(john.age);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date();
      return todayYear - this.birthday;
    }
  })
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday);
console.log(john.age);