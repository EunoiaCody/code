// 欧洲国家的星期计算是从星期一（数字 1）开始的，然后是星期二（数字 2），直到星期日（数字 7）。
// 编写一个函数 getLocalDay(date)，并返回日期的欧洲式星期数。

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));

function getLocalDay(date) {
  let days = ['7', '1', '2', '3', '4', '5', '6'];

  return days[date.getDay()];
}