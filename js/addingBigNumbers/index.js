function add(a, b) {
  let res = "";
  let remain = "";
  a.length > b.length
    ? (b = b.padStart(a.length, "0"))
    : (a = a.padStart(b.length, "0"));
  for (let i = 0; i < a.length; i++) {
    const e1 = a[a.length - i - 1];
    const e2 = b[a.length - i - 1];
    if (+e1 + +e2 + remain < 10) {
      res = +e1 + +e2 + remain + res;
      remain = 0;
    } else {
      res = String(+e1 + +e2 + remain)[1] + res;
      remain = 1;
    }
  }
  return remain == 1 ? 1 + res : res;
}

/**
 *   9007199254740991 9007199254740991
 * +
 *   9007199254740991 9007199254740991
 * -------------------
 *  18014398509481982 18014398509481982 18014398509481982
 */
console.log(add("9007199254740991", "90071992547409919007199254740991"));
