class User {
  ['say' + 'Hi']() {
    console.log('hi');
  }
}

new User().sayHi();