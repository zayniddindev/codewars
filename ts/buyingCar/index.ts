// https://www.codewars.com/kata/554a44516729e4d80b000012/train/typescript
export function nbMonths(
  oldP: number,
  newP: number,
  wage: number,
  pr: number
): number[] {
  if (oldP >= newP) {
    return [0, oldP - newP];
  } else {
    let w = wage,
      mult = (100 - pr) / 100,
      month = 1,
      remain = (newP - oldP) * mult - wage;
    while (remain > 0) {
      month++;
      wage += w;
      pr += month % 2 === 0 ? 0.5 : 0;
      mult *= (100 - pr) / 100;
      remain = (newP - oldP) * mult - wage;
    }
    return [month, Math.round(-remain)];
  }
}

console.log(nbMonths(2700, 2600, 1000, 1.3));
