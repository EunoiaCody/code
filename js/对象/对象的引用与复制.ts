let message: string = 'Hello!';
let phrase: string = message;

let usr = {
  name: "John",
  age: 18,
};
let admin = usr;
admin.name = 'Pete';// usr中的也会被更改

let clone = usr;
for (let key in usr) {
  clone[key] = usr[key];
}