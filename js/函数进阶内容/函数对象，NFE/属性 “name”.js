function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi

let user = {

  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  }

}

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye