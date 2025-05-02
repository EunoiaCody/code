let timerId = setInterval(() => {console.log('tick');}, 1000); // 每一秒执行一次

setTimeout(() => {clearInterval(timerId); console.log('stop');}, 5000) // 五秒后停止