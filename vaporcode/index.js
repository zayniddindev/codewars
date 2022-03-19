function vaporcode(string) {
  let vaporwave = "";
  let splitted = string.split("");
  console.log(splitted);
  splitted = splitted.filter((item) => {
      return item == ' ' ? '' : item;
  });
  console.log(splitted);
  for (let l = 0; l < splitted.length; l++) {
      vaporwave += ' ' + splitted[l].toUpperCase() + " ";
  }
  return vaporwave;
}
console.log(vaporcode("Lets go to the movies")); // L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S 
