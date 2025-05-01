let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert(numbers[1]); // 1



let userData = JSON.stringify(
  {
    name: 'John',
    age: 35,
    isAdmin: false,
    friends: [0, 1, 2, 3, 4],
  }
);

let user = JSON.parse(userData);

alert(user.friends[1]); // 1