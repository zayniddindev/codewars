//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript
export function narcissistic(value: number): boolean {
  let power = value.toString().length;
  let sum = 0;
  for (let i = 0; i < power; i++) {
    sum += Math.pow(parseInt([...value.toString()][i]), power)
  }
  return value == sum;
}
console.log(narcissistic(153));
