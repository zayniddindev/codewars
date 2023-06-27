function someNumber(num, action) {
  if (action) {
    const sign = action.slice(0, 1);
    const number = Number(action.slice(1));
    switch (sign) {
      case '+':
        return num + number;
      case '-':
        return num - number;
      case '*':
        return num * number;
      case '/':
        return parseInt(num / number);
    }
  } else return num;
}

function zero(action) {
  return someNumber(0, action);
}
function one(action) {
  return someNumber(1, action);
}
function two(action) {
  return someNumber(2, action);
}
function three(action) {
  return someNumber(3, action);
}
function four(action) {
  return someNumber(4, action);
}
function five(action) {
  return someNumber(5, action);
}
function six(action) {
  return someNumber(6, action);
}
function seven(action) {
  return someNumber(7, action);
}
function eight(action) {
  return someNumber(8, action);
}
function nine(action) {
  return someNumber(9, action);
}

function plus(num) {
  return '+' + num;
}
function minus(num) {
  return '-' + num;
}
function times(num) {
  return '*' + num;
}
function dividedBy(num) {
  return '/' + num;
}

console.log(one(plus(two())));
console.log(three(times(two())));
console.log(nine(dividedBy(two())));
