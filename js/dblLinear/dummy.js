function dblLinear(n) {
    let u = [1];
    for (let i = 0; i < 2 * n; i++) {
      let y = 2 * u[i] + 1;
      let z = 3 * u[i] + 1;
      if (!u.includes(y)) u.push(y);
      if (!u.includes(z)) u.push(z);
    }
    return u.sort((a, b) => a - b)[n];
  }
  
  console.log(dblLinear(100)); //447