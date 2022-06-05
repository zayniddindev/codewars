// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/typescript
export function cleanString(s: string): string {
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (e == "#" && i == 0) {
      s = s.substring(1, s.length);
      i--;
    } else if (e == "#" && i != 0) {
      s = s.substring(0, i - 1) + s.substring(i + 1, s.length);
      i -= 2;
    }
    // console.log(e, s);
  }
  return s;
}
console.log(cleanString("abc#d##c"));
