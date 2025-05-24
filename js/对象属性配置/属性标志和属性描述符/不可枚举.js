let user = {
  name: 'John',
  toString() {
    return this.name;
  },
}
for (let key in user) {
  console.log(key);
}

Object.defineProperty(user, "toString", {
  enumerable: false,
});

for (let key in user)
  console.log(key);
// toString消失了