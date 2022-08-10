// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

function fibonacci(n) {
  if (n < 2) return n;
  let prev = 0,
    curr = 1;
  for (let i = 0; i < n - 1; i++) {
    const newCurr = curr;
    curr = prev + curr;
    prev = newCurr;
  }
  return curr;
}

console.log(fibonacci(10)); // 55