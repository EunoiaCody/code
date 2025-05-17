let worker = {
  slow(min, max) { // 具有两个参数
    return min + max;
  }
};

function hash(args) {
  return args[0] + ',' + args[1];
}

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments);

    cache.set(key, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5));
console.log('Again' + worker.slow(3, 5));