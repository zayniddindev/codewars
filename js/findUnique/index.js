//https://www.codewars.com/kata/55f81f9aa51f9b72a200002f/train/javascript
function findUnique(n) {
  let n1 = Array.from(new Set(n));
  let sum = 0,
    sum1 = 0;
  if (n.length < 1e6) {
    sum = n.reduce((a, b) => a + b);
    sum1 = n1.reduce((a, b) => a + b);
  } else {
    for (let i = 0; i < Math.floor(n.length / 10); i++) {
      sum +=
        n[i] +
        n[Math.floor(n.length / 10) + i] +
        n[2 * Math.floor(n.length / 10) + i] +
        n[3 * Math.floor(n.length / 10) + i] +
        n[4 * Math.floor(n.length / 10) + i] +
        n[5 * Math.floor(n.length / 10) + i] +
        n[6 * Math.floor(n.length / 10) + i] +
        n[7 * Math.floor(n.length / 10) + i] +
        n[8 * Math.floor(n.length / 10) + i] +
        n[9 * Math.floor(n.length / 10) + i] +
        n[10 * Math.floor(n.length / 10) + i];
    }
  }

  return 2 * sum1 - sum;
}

console.log(
  findUnique([3, 5, 5, 4, 4, 10, 10, 11, 11, 9, 3, 2, 2, 6, 6, 7, 8, 8, 7])
); //9
