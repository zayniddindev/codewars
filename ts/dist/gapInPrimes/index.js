"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gap = void 0;
const gap = (g, m, n) => {
    let currPrime, nextPrime;
    for (let i = m; i <= n;) {
        if (isPrime(i)) {
            currPrime = i;
            nextPrime = findNext(currPrime);
            if (currPrime + g == nextPrime)
                return [currPrime, nextPrime];
            else
                i += nextPrime - currPrime;
        }
        else
            i++;
    }
    return null;
};
exports.gap = gap;
const isPrime = (n) => {
    if ([2, 3].includes(n))
        return true;
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
};
const findNext = (n) => {
    while (!isPrime(n + 1)) {
        n++;
    }
    n++;
    return n;
};
// console.log(findNext(13));
console.log((0, exports.gap)(10, 300, 400));
console.log((0, exports.gap)(8, 300, 400));
console.log((0, exports.gap)(6, 100, 110));
// 618
