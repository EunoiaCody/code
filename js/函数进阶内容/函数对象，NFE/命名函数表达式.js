let sayHi = function func(who) {
  if (who) {
    console.log(`Hello ${who}`);
  } else {
    func('Guest');
  }
};

sayHi();

let meet = sayHi;
sayHi = null;

// sayHi(); // Error
meet(); // 依然会调用自己