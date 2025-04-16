// 创建一个构造函数 Calculator，它创建的对象中有三个方法：

// read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
// sum() 返回这些属性的总和。
// mul() 返回这些属性的乘积。

function Calculator() {
  this.read = function () {
    this.number1 = Number(prompt('1st number'));
    this.number2 = Number(prompt('2nd number'));
  }
  this.sum = function () {
    return this.number1 + this.number2;
  }
  this.mul = function () {
    return this.number1 * this.number2;
  }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());





// 创建一个构造函数 Accumulator(startingValue)。

// 它创建的对象应该：

// 将“当前 value”存储在属性 value 中。起始值被设置到构造器 startingValue 的参数。
// read() 方法应该使用 prompt 来读取一个新的数字，并将其添加到 value 中。
// 换句话说，value 属性是所有用户输入值与初始值 startingValue 的总和。

function Accumulator(startingValue) {
  this.value = Number(startingValue);

  this.read = function () {
    let userValue = Number(prompt('How much to add?'));
    this.value += userValue;
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);