function divisors(a) {
  let sum = 0;
  let quads = [];
  for (let i = 1; i < a+1; i++) {
    if (a % i === 0) quads.push(i * i);
  }
  for (let j = 0; j < quads.length; j++) {
    sum += quads[j];
  }
  return sum;
}

function listSquared(m, n) {
  let couples = [];
  for (let i = m; i < n; i++) {
    let quad = divisors(i);
    if (Number.isInteger(Math.sqrt(quad))) {
      couples.push([i, quad]);
    }
  }
  return couples;
}

console.log(divisors(12))
console.log(listSquared(250, 500));


