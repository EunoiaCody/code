let User = class {
  sayHi() {
    console.log('Hello');
  }
};

new User().sayHi();

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log('Hello');
    }
  };
}

User = makeClass('Hello');

new User().sayHi();