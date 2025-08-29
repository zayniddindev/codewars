function persistence(num) {
  let times = 0;
  let multiplication = num;

  main: while (true) {
    if (multiplication.toString().length === 1) break main;

    multiplication = multiplication
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a * b, 1);

    times++;
  }

  return times;
}

console.log(persistence(999)); // 3
