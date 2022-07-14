export function decomp(n: number): string {
  let res = [], prime: any = {};
  for (let i = 2; i <= n; i++) {
    const p = primize(i);
    for (const key in p) {
      if (prime[key]) prime[key] += p[key];
      else prime[key] = p[key];
    }
  }
  for (const key in prime) {
    if (prime[key] == 1) res.push(key);
    else res.push(`${key}^${prime[key]}`);
  }
  return res.join(" * ").trim();
}
function primize(n: number): any {
  let primes: any = {};
  for (let i = 2; i <= n; ) {
    if (n % i == 0) {
      if (primes[i]) primes[i]++;
      else primes[i] = 1;
      n = n / i;
    } else i++;
  }
  return primes;
}

console.log(decomp(4000)); //"2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"
// console.log(primize(2));
