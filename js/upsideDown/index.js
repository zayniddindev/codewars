//https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript
function solve(x, y) {
  let uds = [];
  for (let i = x; i < y; i++) if (isUD(i)) uds.push(i);
  return uds.length;
}
function isUD(num) {
  let n = num.toString().split(''), r = [...n].reverse();
  for (let i = 0; i < n.length; i++) if (['2', '3', '4', '5', '7'].includes(n[i]) || (n[i] == r[i] && !['0', '1', '8'].includes(n[i])) || (n[i] !== r[i] && ['0', '1', '8'].includes(n[i])) || (n[i] == '6' && r[i] !== '9') || (n[i] !== '6' && r[i] == '9')) return false;
  return true;
}

// console.log(isUD(10)); //96
console.log(solve(0, 111));
