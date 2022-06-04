function persistence(num) {
  let pers = 0;
  if (num < 10) {
    return 0;
  } else {
    let dividers = [];
    let sqr = Math.sqrt(num)
    for (let i = 1; i < sqr; i++) {
      console.log(num);
      if (num % i === 0) {
        dividers.push(i);
        num = num / i;
        return persistence(num);
      }
    }
    console.log(dividers);
  }
  return pers;
}
console.log(persistence(39));
