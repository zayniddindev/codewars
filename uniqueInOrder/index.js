const uniqueInOrder = (iter) => {
  console.log(iter.split(""));
  return iter.split("").filter((char) => {
    char == iter[(iter.split("")).indexOf(char) + 1];
  });
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
