function modularExponentation(base, exp, mod) {
  if (mod == 1) return 0;
  let value = 1;
  for (let i = 0; i < exp; i++) {
    value = (value * base) % mod;
  }
  return value;
}

console.log(modularExponentation(6 * 10 ** 77, 27, 497)); // 149 
