class User {
  name = prompt("name?", "John");

  sayHi() {
    console.log(`hello, ${this.name}!`);
  }
}

new User().sayHi();
