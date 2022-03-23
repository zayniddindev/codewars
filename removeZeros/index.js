function removeZeros(array) {
  return array.sort((a, b) => {
    if (a > 0 && b > 0) return 0;
    else if (a > 0 && b == 0) return -1;
    else if (a == 0 && b > 0) return 1;
  });
}

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
console.log(removeZeros(input)); //[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
