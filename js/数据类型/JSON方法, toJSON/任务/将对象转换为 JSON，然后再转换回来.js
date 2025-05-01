// 将 user 转换为 JSON，然后将其转换回到另一个变量。
let user = {
  name: "John Smith",
  age: 35
};

let newUser = JSON.parse(JSON.stringify(user));