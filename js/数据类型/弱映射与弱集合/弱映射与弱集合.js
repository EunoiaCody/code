let john = { name: 'John' };
// 该对象能被访问，john 是它的引用

// let array = [john]; 有了引用不会被清除
// let map = new Map();
// map.set(john, "..."); 同样不会被清除

// 覆盖引用
john = null;

// 该对象将会被从内存中清除