//https://www.codewars.com/kata/596549c7743cf369b900021b/train/javascript
function twinPrime(n) {
  if (n < 3) return 0;
  let twins = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i) && isPrime(i + 2)) twins++;
  }
  return twins;
}

function isPrime(n) {
  if (n < 3) return true;
  else {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (n % i == 0) return false;
    }
  }
  return true;
}

console.log(isPrime(4));
console.log(twinPrime(15));
