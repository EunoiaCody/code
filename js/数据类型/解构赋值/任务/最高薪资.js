let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// 新建一个函数 topSalary(salaries)，返回收入最高的人的姓名。

// 如果 salaries 是空的，函数应该返回 null。
// 如果有多个收入最高的人，返回其中任意一个即可。

function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

alert(topSalary(salaries));