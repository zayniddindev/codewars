function primeFactors(n) {
  let result = "";
  let arr = [];
  let an = n;
  for (let i = 2; i < n; ) {
    if (an % i == 0) {
      arr.push([i, 0]);
      an = an / i;
    } else i++;
  }
  arr = arr.reduce(addDeg);
  return arr;
}

const addDeg = (a, b, i) => {
    if(a[0] == b[0]) {
        a[1]++;
        return a
    }else{
        return i++
    }
}

console.log(primeFactors(7775460));
// console.log(addDeg([2, 0], [2, 0]));
