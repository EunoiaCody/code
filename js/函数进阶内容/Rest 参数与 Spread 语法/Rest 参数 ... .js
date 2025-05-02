function sumAll(...args) { // 数组名为 args
  let sum = 0;

  for (let each of args)
    sum += each;

  return sum;
}

// console.log(sumAll(1, 4, 78, 4, 43, 73, 5, 74));



function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName);

  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}

showName("Julius", "Caesar", "Consul", "Imperator")