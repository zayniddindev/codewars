function numericPalindrome(...arr) {
  let str = arr
      .filter((val) => val > 1)
      .reduce((acc, curr) => acc * curr)
      .toString()
      .split(""),
    obj = {},
    res = [];
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++;
    else obj[str[i]] = 1;
  }
  let keys = Object.keys(obj).sort((a, b) => a - b);
  console.log(keys);
  for (let j = 0; j < keys.length; j++) {
    const e = obj[keys[j]];
    if (e >= 2) {
      for (let k = 0; k < Math.floor(e / 2); k++) {
        res.unshift(keys[j]);
        res.push(keys[j]);
        obj[keys[j]] -= 2;
      }
    }
  }
  keys = Object.keys(obj)
    .filter((val) => obj[val] > 0)
    .sort((a, b) => b - a);
  console.log(obj);
  res.splice(res.length / 2, 0, keys[0]);
  return Number(res.join(""));
}

console.log(numericPalindrome(15, 125, 8)); //81518
