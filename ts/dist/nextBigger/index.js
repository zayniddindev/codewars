"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger = void 0;
function nextBigger(n) {
    let m = n.toString(), rest = [];
    for (let i = 0; i < m.length; i++) {
        let curr = Number(m[m.length - i - 1]), next = Number(m[m.length - i - 2]);
        if (curr > next) {
            rest.push(curr, next);
            m = m.substring(0, m.length - i - 2) + nextBigInArr(next, rest);
            return Number(m);
        }
        else
            rest.push(curr);
    }
    return -1;
}
exports.nextBigger = nextBigger;
function nextBigInArr(n, arr) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (n < arr[i]) {
            n = arr[i];
            delete arr[i];
            return [n + arr.join("")];
        }
    }
}
console.log(nextBigger(59884848459853)); //59884848483559
