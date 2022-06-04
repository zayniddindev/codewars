"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/typescript
class Vector {
    constructor(components) {
        this.components = components;
    }
    //toString
    toString() {
        return "(" + this.components.join(",") + ")";
    }
    //equals
    equals(vector) {
        return vector.components.join("") == this.components.join("");
    }
    //add
    add(vector) {
        let res = [];
        for (let i = 0; i < this.components.length; i++) {
            const e = this.components[i];
            res.push(e + vector[i]);
        }
        return new Vector(res);
    }
}
exports.Vector = Vector;
let a = new Vector([1, 2, 3]);
console.log(a.equals(new Vector([1, 2, 3])));
console.log(a.toString());
