function permutations(string) {
  let chars = {}, charNums = {}, res = [];
  for (let i = 0; i < [...string].length; i++) {
    chars[i] = [...string][i];
    if(Object.keys(charNums).includes([...string][i])) charNums[[...string][i]] ++
    else charNums[[...string][i]] = 1
  }
  let l = Object.keys(chars);
  for (let j =  parseInt(l.join("")); j <= parseInt(Object.keys(chars).reverse().join("")); j++) {
    let pos = j.toString().split("");
    if(pos.length < Object.keys(chars).length) pos.unshift("0")
    let arr = pos.map(e => chars[e]).filter((val, i, arr) => val !== undefined).filter((val, i, arr) => takeOrNot(val, arr, charNums[val]));
    if(arr.length == l.length) if(!res.includes(arr.join("")) && arr.length == l.length) res.push(arr.join(""))
  }
  return res;
}

function takeOrNot(e, arr, count) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == e) res++
  }
  return res === count
}
console.log(permutations("b")); //[ 'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa' ]
