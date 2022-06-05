"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNb = void 0;
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/typescript
/*
 * 1^3 + 2^3 + 3^3 + ... + n^3 = m,   n=?
 */
function findNb(m) {
    let i = 1, volume = 0;
    while (m >= Math.pow(i, 3)) {
        m -= Math.pow(i, 3);
        i++;
        volume++;
    }
    return m == 0 ? volume : -1;
}
exports.findNb = findNb;
console.time("Execution time");
console.log(findNb(1071225));
console.timeEnd("Execution time");
