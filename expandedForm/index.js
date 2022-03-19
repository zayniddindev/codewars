function expandedForm(num) {
  let expandedArr = [];
  let str = "";
  for (let i = 1; i < num / 10 ** i + num; i++) {
    let n = num % 10 ** i;
    if (n > 0) {
      expandedArr.unshift(n);
      expandedArr.unshift(" + ");
    }
    num -= num % 10 ** i;
  }
  expandedArr.splice(0, 1);
  for (let j = 0; j < expandedArr.length; j++) {
    str += expandedArr[j];
  }
  return str;
}

console.log(expandedForm(70304)); //70000 + 300 + 4
