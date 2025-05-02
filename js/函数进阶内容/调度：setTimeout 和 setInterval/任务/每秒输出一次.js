function printNumbers(from,to) {
  let t = from;
  let timerId = setInterval(function() {
    console.log(t);
    if (t == to) {
      clearInterval(timerId);
    }
    t++;
  }, 1000);
}

printNumbers(5,10);