function solution(number) {
  let res = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      res += i;
    }
  }
  return res
}

console.log(solution(10));