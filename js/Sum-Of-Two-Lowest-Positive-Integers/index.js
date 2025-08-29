function sumTwoSmallestNumbers(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b);
  return sortedArray[0] + sortedArray[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
