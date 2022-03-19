function digPow(n, p) {
  let ints = [];
  let sum = 0;
  let k = n;
  for (let i = 1; i < n / 10 ** i + n; i++) {
    ints.unshift((n % 10 ** i)/10**(i-1));
    n -= n % 10 ** i;
  };
  console.log(ints);
  for (let i = 0; i < ints.length; i++) {
      sum += Math.pow(ints[i], (p+i));
  }
  console.log(sum, k);
  if( sum % k == 0){
      return (sum/k);
  }else{
      return -1;
  };
}
console.log(digPow(46288, 3));

