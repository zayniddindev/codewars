export const gap = (g: number, m: number, n: number): number[] | null => {
  let currPrime: number, nextPrime: number;
  for (let i = m; i <= n; ) {
    if (isPrime(i)) {
      currPrime = i;
      nextPrime = findNext(currPrime);
      if (currPrime + g == nextPrime) return [currPrime, nextPrime];
      else i += nextPrime - currPrime;
    } else i++;
  }
  return null;
};

const isPrime = (n: number): boolean => {
  if ([2, 3].includes(n)) return true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i == 0) return false;
  }
  return true;
};

const findNext = (n: number): number => {
  while (!isPrime(n + 1)) {
    n++;
  }
  n++;
  return n;
};

// console.log(findNext(13));
console.log(gap(10, 300, 400));
console.log(gap(8, 300, 400));
console.log(gap(6, 100, 110));

// 618
