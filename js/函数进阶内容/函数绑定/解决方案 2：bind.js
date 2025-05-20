let user = {
  name: 'John',
  say(phrase) {
    console.log(`${phrase}, ${this.name}!`)
  }
};

function func() {
  console.log(this.name);
}

let funcUser = func.bind(user);

funcUser(); // John

let say = user.say.bind(user);
say('Bye'); // Bye, John!