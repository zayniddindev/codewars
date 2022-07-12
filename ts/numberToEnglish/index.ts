const numbers: any = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "thousand",
};
export function numberToEnglish(x: number): string {
  if (x == 0) return "zero";
  else {
    let tens: any = { 1: 0, 10: 0, 100: 0, 1000: 0 };
    let res: string[] = [];
    let str = x.toString();
    for (let i = 0; i < str.length; i++) {
      if (i < 4) tens[10 ** i] = Number(str[str.length - i - 1]);
      else
        tens[10 ** 3] = Number(
          str.substring(0, str.length - i) + tens[10 ** 3]
        );
    }
    for (const key in tens) {
      if (Object.prototype.hasOwnProperty.call(tens, key) && tens[key] !== 0) {
        const e = tens[key];
        if (key == "10" && e == 1) {
          res.shift();
          res.unshift(numbers[10 + tens[1]]);
        } else if (key == "10" || key == "1")
          res.unshift(numbers[e * Number(key)]);
        else if (key == "1000" && e.toString().length == 2)
          res.unshift(numberToEnglish(e) + " thousand");
        else res.unshift(numbers[e] + " " + numbers[key]);
      }
    }
    return res.join(" ");
  }
}

console.log(numberToEnglish(26916));
