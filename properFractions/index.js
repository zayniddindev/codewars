function properFractions(n) {
  const divisors = (int) => {
    let array = [1];
    for (let i = 2; i < int; i++) {
      if (int % i == 0) {
        array.push(i);
      }
    }
    return array;
  };

  let arr = [1];
  let divs = divisors(n);
  for (let j = 2; j < n; ) {
    if(divs.some((div) => j % div !== 0)) arr.push(j)
  }
  return arr.length;
}

console.log(properFractions(151377818));
