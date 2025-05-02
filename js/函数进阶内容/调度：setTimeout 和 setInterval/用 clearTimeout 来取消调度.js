let timerId = setTimeout(() => {console.log('never happends')}, 1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);