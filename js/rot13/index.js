function rot13(str) {
  let arr = [...str];
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowers = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < arr.length; i++) {
    if (capitals.includes(arr[i])) {
      if (capitals.indexOf(arr[i]) >= 13) {
        arr[i] = capitals[capitals.indexOf(arr[i]) - 13];
      } else {
        arr[i] = capitals[capitals.indexOf(arr[i]) + 13];
      }
    } else if (lowers.includes(arr[i])) {
      if (lowers.indexOf(arr[i]) >= 13) {
        arr[i] = lowers[lowers.indexOf(arr[i]) - 13];
      } else {
        arr[i] = lowers[lowers.indexOf(arr[i]) + 13];
      }
    }
  }
  return arr.join("");
}

console.log(rot13("This is my first ROT13 excercise!"));
