function modularExponentation(base, exp, mod) {
  return Math.pow(base, exp) % mod;
}

console.log(modularExponentation(4, 3, 5)); // 4 -it is easy one, but
console.log(modularExponentation(6*10**77, 27, 497)); 
// In this case, it is very large number  and cannot be stored in a memeory. See ./index.js :)

