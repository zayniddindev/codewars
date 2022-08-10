function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i < b; i++) {
    if (eureka(i)) arr.push(i);
  }
  return arr;
}

function eureka(n) {
  let res = 0;
  for (let i = 0; i < String(n).length; i++) {
    res += (+String(n).charAt(i)) ** (i + 1);
  }
  return res == n;
}
console.log(eureka(89));
console.log(sumDigPow(10, 150));