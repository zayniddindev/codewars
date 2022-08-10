function powerSumDigTerm(n) {
  let nth = 0,
    num = 10;
  while (nth <= n) {
    if (power(num)) {
      nth++;
      if (nth == n) return num;
    } else {
      num++;
      console.log(num);
    }
  }
  return num;
}

function power(n) {
  let sumDigs = [...String(n)].reduce((a, b) => +a + +b),
    power = 2;
  while (sumDigs < n) {
    sumDigs = sumDigs ** power;
    if (sumDigs == n) return true;
    else power++;
  }
  return false;
}

// console.log((4 + 1 + 9 + 3) ** 3);
// console.log(power(81));
console.log(powerSumDigTerm(1));
