"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = void 0;
//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript
function narcissistic(value) {
    let power = value.toString().length;
    let sum = 0;
    for (let i = 0; i < power; i++) {
        sum += Math.pow(parseInt([...value.toString()][i]), power);
    }
    return value == sum;
}
exports.narcissistic = narcissistic;
console.log(narcissistic(153));
