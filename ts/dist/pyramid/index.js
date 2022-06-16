"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pyramid = void 0;
// https://www.codewars.com/kata/515f51d438015969f7000013/train/typescript
function pyramid(n) {
    let res = [];
    for (let i = 1; i < n + 1; i++) {
        const arr = new Array(i).fill(1);
        res.push(arr);
    }
    return res;
}
exports.pyramid = pyramid;
console.log(pyramid(0)); /// [ [1], [1, 1], [1, 1, 1] ]
