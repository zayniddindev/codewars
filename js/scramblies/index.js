//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
function scramble(str1, str2) {
  const str1Map = {},
    str2Map = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Map[str1[i]]) str1Map[str1[i]]++;
    else str1Map[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2Map[str2[i]]) str2Map[str2[i]]++;
    else str2Map[str2[i]] = 1;
  }
  for (const letter in str2Map) {
    if (!str1Map[letter] || str1Map[letter] < str2Map[letter]) return false;
  }
  return true;
}
console.log(scramble("aabbcamaomsccdd", "commas"));
// console.log(scramble("scriptsjava", "javascripts"));
