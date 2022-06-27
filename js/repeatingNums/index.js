//aaaacbba -> 5a1c2b
function repeat(str) {
  let chars = {},
    res = "";
  str.split("").forEach((e) => {
    if (chars[e]) chars[e] += 1;
    else chars[e] = 1;
  });
  for (const char in chars) {
    if (Object.hasOwnProperty.call(chars, char)) {
      res += chars[char] + char;
    }
  }
  return res;
}

console.log(repeat("aaafebggga"));
