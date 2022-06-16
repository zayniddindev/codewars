// https://www.codewars.com/kata/515f51d438015969f7000013/train/typescript
export function pyramid(n: number): any[] {
  let res = [];
  for (let i = 1; i < n + 1; i++) {
    const arr = new Array(i).fill(1);
    res.push(arr);
  }
  return res;
}

console.log(pyramid(0)); /// [ [1], [1, 1], [1, 1, 1] ]
