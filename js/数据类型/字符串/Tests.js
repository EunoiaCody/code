// 写一个函数 ucFirst(str)，并返回首字母大写的字符串 str
function ucFirst(str) {
  let upper = str.charAt(0).toUpperCase() + str.slice(1);
  return upper;
}



// 写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false
function checkSpam(str) {
  let lowStr = str.toLowerCase();

  return lowStr.includes('viagra') || lowStr.includes('xxx');
}


// 创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength
function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  str = str.slice(0, maxlength - 1) + '…';
  return str;
}



// 我们有以 "$120" 这样的格式表示的花销。意味着：先是美元符号，然后才是数值。
// 创建函数 extractCurrencyValue(str) 从字符串中提取数值并返回
function extractCurrencyValue(str) {
  str = str.slice(1, str.length);
  return Number(str);
}