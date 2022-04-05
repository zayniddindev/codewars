function twoSum(arr, sum) {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let difference = sum - current;
    if (hashTable[current] != undefined) {
      return [current, difference];
    } else {
      hashTable[difference] = i;
    }
  }
  return -1;
}

console.log(twoSum([1, 2, 3, 4, 5, 7], 9));
