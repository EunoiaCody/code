let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// console.log(Object.keys(rabbit));

for (let key in rabbit) {
  let isOwn = rabbit.hasOwnProperty(key);

  if (isOwn) {
    console.log(`Our ${key}`);
  } else {
    console.log(`Inherited: ${key}`);
  }
}