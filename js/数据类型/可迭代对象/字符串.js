for (let char of 'Test') {
  alert(char);
}

let str = '𝒳😂';
for (let char of str) {
  alert(char); // 𝒳，然后是 😂
}