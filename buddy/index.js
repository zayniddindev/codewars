const divisors = (int) => {
  let arr = [1];
  for (let i = 2; i < int; i++) {
    if (int % i == 0) {
      arr.push(i);
    }
  }
  return (arr = arr
    .sort((a, b) => a - b)
    .filter((e, i) => arr.indexOf(e) == i));
};

const sumOfAll = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum - 1;
};

const buddy = (s, l) => {
    let sums = [];
    for (let i = s; i < l; i++) {
        sums.push(sumOfAll(divisors(i)))
    }
    return sums;
};

console.log(buddy(47, 76));
// console.log(sumOfAll(divisors(75)));
// 1, 2, 3, 4, 6, 8, 12, 16, 24
