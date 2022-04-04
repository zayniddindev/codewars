function primeFactors(n) {
  let factors = [];
  while (n % 2 == 0) {
    factors.push(2);
    n = n / 2;
  }
  for (var i = 3; i * i <= n; i += 2) {
    while (n % i == 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

const addDeg = (arr) => {
  let result = [];
  let added = {};
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    if (added.hasOwnProperty(e)) {
      added[e]++;
    } else {
      added[e] = 1;
    }
  }
  for (const key of Object.keys(added)) {
    result.push(key + "^" + added[key]);
  }
  return result.join(' * ');
};

console.log(primeFactors(87444)); // [ 2, 2, 3, 3, 7, 347 ]
console.log(addDeg(primeFactors(87444))); // 2^2 * 3^2 * 7^1 * 347^1
