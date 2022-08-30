/**
 * Function that counts how many different ways you can make change for an amount of money, given an array of coin denominations.
 * @param {Number} money Amount of monet
 * @param {Array} coins Array of coin denominations
 * @returns {Number}
 */
const countChange = function (money, coins) {
  let result = [];
  let max = {};
  coins = coins.sort((a, b) => a - b);
  coins.forEach((coin) => (max[coin] = Math.floor(money / coin)));
  for (const coin in max) {
    const maxCount = max[coin];
    for (let i = 1; i <= maxCount; i++) {
      const remain = coin * i;
      
    }
  }
  return max;
};

console.log(countChange(4, [1, 2])); //3     -> [1+1+1+1], [1+1+2], [2+2]




// console.log(countChange(10, [5, 2, 3])); //4  -> [2+2+2+2+2], [2+2+3+3], [2+3+5], [5+5]
// console.log(countChange(11, [5, 7])); // 0
