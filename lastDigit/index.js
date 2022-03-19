const lastDigit = function (str1, str2) {
  let base = parseInt(str1[str1.length - 1]);
  if ([0, 1, 5, 6].includes(base)) {
    if (parseInt(str2) === 0) {
      return 1;
    }
    return base;
  } else if (parseInt(str2) === 0) {
    return 1;
  } else if ([2, 3, 7, 8].includes(base)) {
    let power1;
    if (parseInt(str2) > 9_007_199_254_740_991) {
      base = BigInt(base);
      power1 = BigInt(str2) % 4n == 0n ? 4n : BigInt(str2) % 4n;
      return parseInt(String(base ** power1 % 10n));
    } else {
      power1 = parseInt(str2) % 4 == 0 ? 4 : parseInt(str2) % 4;
      return base ** power1 % 10;
    }
  } else {
    let power2;
    if (parseInt(str2) > 9_007_199_254_740_991) {
      base = BigInt(base);
      power1 = BigInt(str2) % 2n == 0n ? 2n : BigInt(str2) % 2n;
      return parseInt(String(base ** power1 % 10n));
    } else {
      power2 = parseInt(str2) % 2 == 0 ? 2 : parseInt(str2) % 2;
      return base ** power2 % 10;
    }
  }
};
/* 
    0, 1, 5, 6 -> ...1
    2, 3, 7, 8 -> 4dan
    4, 9 -> 2dan
  */
// console.log(lastDigit("145", "1442"));
// console.log(lastDigit("8486", "1443"));
// console.log(lastDigit("93453", "23247"));
// console.log(lastDigit("875432", "22331"));
// console.log(lastDigit("9234", "12332"));
// console.log(lastDigit("91121", "23884"));
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));
console.log(lastDigit("37152904697156930211989672850167293445806854796545109467239", "68819615221552997273737174557165657483427362207517952651"));