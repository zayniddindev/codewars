function duplicateCount(text) {
  arr = [];
  text = text.toLowerCase();
  let splitted = [...text];
  console.log(splitted);
  for (let i = 0; i < splitted.length; i++) {
    let splitted = [...text];
    let ele = splitted[i];
    splitted = splitted.slice(i, 0) + splitted.slice(i + 1);
    if (splitted.includes(ele)) {
      arr.push(ele);
      console.log(ele);
      console.log(splitted);
    }
  }
  return (arr.filter((v, i, a) => a.indexOf(v) === i)).length;
}
console.log(duplicateCount("Indivisibilities")); //2

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//   }

console.log("Indivisibilities".toLowerCase().split('').sort().join('').match(/([^])\1+/g));