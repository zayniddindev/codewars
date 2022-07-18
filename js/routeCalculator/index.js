function calculate(sum) {
  let curr = "",
    nums = [],
    secondOps = [],
    firstOps = [];
  for (let i = 0; i < sum.length; i++) {
    if (!isNaN(sum[i]) || sum[i] == ".") {
      if (i !== sum.length - 1) curr += sum[i];
      else {
        curr += sum[i];
        nums.push(curr);
      }
    } else {
      nums.push(curr);
      curr = "";
      if (sum[i] == "+" || sum[i] == "-") secondOps.push([nums.length, sum[i]]);
      else firstOps.push([nums.length, sum[i]]);
    }
  }
  console.log([nums.join(' '), firstOps, secondOps]);
  let afterFirst = [];
  for (let i = 0; i < firstOps.length; i++) {
    const op = firstOps[i][1];
    console.log(op);
    let pos = [firstOps[i][0] - 1, firstOps[i][0]];
    afterFirst.push(two(nums[pos[0]], nums[pos[1]], op))
    // nums.splice(pos[0], pos[1], two(nums[pos[0]], nums[pos[1]], op));
  }
  return afterFirst;
}
console.log(calculate("1000$2.5$5+5-5+6$6")); //'81'

function two(str1, str2, op) {
  (str1 = Number(str1)), (str2 = Number(str2));
  switch (op) {
    case "+":
      return str1 + str2;
    case "-":
      return str1 - str2;
    case "$":
      return str1 / str2;
    default:
      return str1 * str2;
  }
}
// console.log(two('100', '10', '-')); //90

console.log(eval('1000 / 2.5 / 5 + 5 -5 + 6 /6'));


/**
 * 
 * ****       **     ******            ******   ******   **       **    ** ***********  **  ******  ****       **
 * ** **      **    **    **          **       **    **  **       **    **     **       ** **    ** ** **      **
 * **  **     **    **    **         **        **    **  **       **    **     **       ** **    ** **  **     **
 * **   **    **    **    **         **        **    **  **       **    **     **       ** **    ** **   **    **
 * **    **   **    **    **           **      **    **  **       **    **     **       ** **    ** **    **   **
 * **     **  **    **    **             **    **    **  **       **    **     **       ** **    ** **     **  **
 * **      ** **    **    **             ***   **    **  **       **    **     **       ** **    ** **      ** **
 * **       ****     ******         ******      ******   *******   ******      **       **  ******  **       ****
 * 
 */