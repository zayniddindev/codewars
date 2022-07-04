const zero = (arg) => {
  if (typeof arg === "undefined") return 0;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(0 * arg.num);
      case "+":
        return Math.floor(0 + arg.num);
      case "-":
        return Math.floor(0 - arg.num);
      case "/":
        return Math.floor(0 / arg.num);
    }
    return arg;
  }
};
const one = (arg) => {
  if (typeof arg === "undefined") return 1;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(1 * arg.num);
      case "+":
        return Math.floor(1 + arg.num);
      case "-":
        return Math.floor(1 - arg.num);
      case "/":
        return Math.floor(1 / arg.num);
    }
    return arg;
  }
};
const two = (arg) => {
  if (typeof arg === "undefined") return 2;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(2 * arg.num);
      case "+":
        return Math.floor(2 + arg.num);
      case "-":
        return Math.floor(2 - arg.num);
      case "/":
        return Math.floor(2 / arg.num);
    }
    return arg;
  }
};
const three = (arg) => {
  if (typeof arg === "undefined") return 3;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(3 * arg.num);
      case "+":
        return Math.floor(3 + arg.num);
      case "-":
        return Math.floor(3 - arg.num);
      case "/":
        return Math.floor(3 / arg.num);
    }
    return arg;
  }
};
const four = (arg) => {
  if (typeof arg === "undefined") return 4;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(4 * arg.num);
      case "+":
        return Math.floor(4 + arg.num);
      case "-":
        return Math.floor(4 - arg.num);
      case "/":
        return Math.floor(4 / arg.num);
    }
    return arg;
  }
};
const five = (arg) => {
  if (typeof arg === "undefined") return 5;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(5 * arg.num);
      case "+":
        return Math.floor(5 + arg.num);
      case "-":
        return Math.floor(5 - arg.num);
      case "/":
        return Math.floor(5 / arg.num);
    }
    return arg;
  }
};
const six = (arg) => {
  if (typeof arg === "undefined") return 6;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(6 * arg.num);
      case "+":
        return Math.floor(6 + arg.num);
      case "-":
        return Math.floor(6 - arg.num);
      case "/":
        return Math.floor(6 / arg.num);
    }
    return arg;
  }
};
const seven = (arg) => {
  if (typeof arg === "undefined") return 7;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(7 * arg.num);
      case "+":
        return Math.floor(7 + arg.num);
      case "-":
        return Math.floor(7 - arg.num);
      case "/":
        return Math.floor(7 / arg.num);
    }
    return arg;
  }
};
const eight = (arg) => {
  if (typeof arg === "undefined") return 8;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(8 * arg.num);
      case "+":
        return Math.floor(8 + arg.num);
      case "-":
        return Math.floor(8 - arg.num);
      case "/":
        return Math.floor(8 / arg.num);
    }
    return arg;
  }
};
const nine = (arg) => {
  if (typeof arg === "undefined") return 9;
  else {
    switch (arg.o) {
      case "*":
        return Math.floor(9 * arg.num);
      case "+":
        return Math.floor(9 + arg.num);
      case "-":
        return Math.floor(9 - arg.num);
      case "/":
        return Math.floor(9 / arg.num);
    }
    return arg;
  }
};

function plus(num) {
  return { num, o: "+" };
}
function minus(num) {
  return { num, o: "-" };
}
function times(num) {
  return { num, o: "*" };
}
function dividedBy(num) {
  return { num, o: "/" };
}

console.log(five(times(12)));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
