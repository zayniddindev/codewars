const probel = (str) => {
  str = str.split("");
  str = str.map((elem, i, str) => (elem += str[i + 1] ? str[i + 1] : "_"));
  str = str.filter((e, i) => i % 2 !== 1);
  str = str.join("  ");
  return str;
};
console.log(probel("zayniddin")); // za  yn  id  di  n_

// More complex version):
// return str.split('').map( (elem, i, str)  => elem += str[i+1] ? str[i+1] : '_').filter((e, i) => i % 2 !== 1).join('  ');
