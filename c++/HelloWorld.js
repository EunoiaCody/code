// Run: tsc HelloWorld.ts
// Output: HelloWorld.js
// Run: node HelloWorld.js
var User = /** @class */ (function () {
    function User(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    User.prototype.greet = function () {
        return "ko nn ni ti wa ".concat(this.name, " desuwa!");
    };
    User.prototype.selfIntro = function () {
        return "watashi wa ".concat(this.name, " desu. ").concat(this.age, " sai desu.");
    };
    return User;
}());
var eunoiacody = new User("EunoiaCody", 18, 1);
function sayHello(username) {
    return "Hello, ".concat(username, "!");
}
console.log(eunoiacody.selfIntro());
