let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log(`Name is too short`);
      return;
    }
    this._name = value;
  }
};

user.name = 'Pete';
console.log(user.name);

user.name = ' ';