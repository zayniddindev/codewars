// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
class RomanNumerals {
  static romans = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  static numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  static toRoman(num) {
    let peices = [],
      l = num.toString().length;
    for (let i = l; i > 0; i--) {
      let base = num % 10;
      let power = Math.pow(10, l - i);
      if (base == 4 || base == 9) {
        if (power === 1) peices.push("I" + this.romans[base + 1]);
        else if (power === 10) peices.push("X" + this.romans[(base + 1) * 10]);
        else if (power === 100)
          peices.push("C" + this.romans[(base + 1) * 100]);
        else peices.push("M" + this.romans[(base + 1) * 1000]);
      } else if (base == 5) {
        if (power === 1) peices.push("V");
        else if (power === 10) peices.push("L");
        else if (power === 100) peices.push("D");
      } else if (base == 1 || base == 2 || base == 3) {
        if (power === 1) peices.push("I".repeat(base));
        else if (power === 10) peices.push("X".repeat(base));
        else if (power === 100) peices.push("C".repeat(base));
        else peices.push("M".repeat(base));
      } else if (base == 6 || base == 7 || base == 8) {
        if (power === 1) peices.push("V" + "I".repeat(base - 5));
        else if (power === 10) peices.push("L" + "X".repeat(base - 5));
        else if (power === 100) peices.push("D" + "C".repeat(base - 5));
        else peices.push("M".repeat(base));
      } else {
      }
      num = Math.trunc(num / 10);
    }
    return peices.reverse().join("");
  }

  static fromRoman(str) {
    let num = 0;
    let l = str.length;
    for (let i = 0; i < l; i++) {
      let base = str[i],
        next = str[i + 1],
        power = Math.pow(10, l - i - 1);
      if (this.numerals[base] >= this.numerals[next]) {
        num += this.numerals[base];
      } else if (this.numerals[base] < this.numerals[next]) {
        num += this.numerals[next] - this.numerals[base];
        i++;
      } else {
        num += this.numerals[base];
      }
    }
    return num;
  }
}

console.log(RomanNumerals.toRoman(1666));
console.log(RomanNumerals.fromRoman("MMVIII"));

