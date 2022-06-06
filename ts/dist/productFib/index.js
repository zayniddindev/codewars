"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/typescript
class G964 {
    static fib(n) {
        if (n <= 1)
            return n;
        return this.fib(n - 1) + this.fib(n - 2);
    }
}
exports.G964 = G964;
_a = G964;
G964.productFib = (prod) => {
    let i = 1, sum;
    do {
        sum = _a.fib(i) * _a.fib(i + 1);
        if (sum < prod)
            i++;
        else if (sum == prod)
            return [_a.fib(i), _a.fib(i + 1), true];
        else
            return [_a.fib(i), _a.fib(i + 1), false];
    } while (sum <= prod);
};
console.log(G964.productFib(714)); //[ 21, 34, true ]
