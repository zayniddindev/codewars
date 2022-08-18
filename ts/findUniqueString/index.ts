export function findUniq(arr: string[]): string {
  let newArr = arr.map((val) => [...new Set(val.toLowerCase().split("").sort().filter(val => val != " "))].join(""));
  console.log(newArr);
  return [...newArr].sort()[0] == [...newArr].sort()[1] ? arr[newArr.indexOf([...newArr].sort()[newArr.length - 1])] : arr[newArr.indexOf([...newArr].sort()[0])];
}
console.log(findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]));
console.log(findUniq(['victor', 'silvia', 'vasili']));
