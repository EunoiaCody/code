let f = [0, 1];

function fib(n) {
  if (f[n] != undefined)
    return f[n];
  f[n] = (fib(n - 2) + fib(n - 1));
  return f[n];
}

let n = prompt('number?');
alert(fib(n));