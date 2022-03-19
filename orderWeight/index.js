function strSum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += parseInt(a[i]);
  }
  return sum;
}


function orderWeight(str) {
  let arr = str.split(" ");
  let oredered = [];
  let ans = ''
  for (let i = 0; i < arr.length; i++) {
      oredered.push([ strSum(arr[i]), arr[i] ]);
  }
  ordered = oredered.sort((a, b) => {
    if(a[0] < b[0]) return -1;
    if(a[0] > b[0]) return 1;
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
  });
  for (let j = 0; j < ordered.length; j++) {
      ans += (' ' + ordered[j][1]);
  }
  return ans.trim();
}

console.log(orderWeight("2000 11 11 10003 22 123 1234000 44444444 9999"));
// "11 11 2000 10003 22 123 1234000 44444444 9999"