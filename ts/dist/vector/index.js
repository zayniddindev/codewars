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
        if (this.components.length !== vector.components.length)
            throw new Error("Vectors must be equal");
        else {
            let res = [];
            for (let i = 0; i < this.components.length; i++) {
                const e = this.components[i];
                res.push(e + vector.components[i]);
            }
            return new Vector(res);
        }
    }
    //subtract
    subtract(vector) {
        if (this.components.length !== vector.components.length)
            throw new Error("Vectors must be equal");
        else {
            let res = [];
            for (let i = 0; i < this.components.length; i++) {
                const e = this.components[i];
                res.push(e - vector.components[i]);
            }
            return new Vector(res);
        }
    }
    //dot
    dot(vector) {
        if (this.components.length !== vector.components.length)
            throw new Error("Vectors must be equal");
        else {
            let res = [];
            for (let i = 0; i < this.components.length; i++) {
                const e = this.components[i];
                res.push(e * vector.components[i]);
            }
            return res.reduce((a, b) => a + b);
        }
    }
    //norm
    norm() {
        let sum = 0;
        for (let i = 0; i < this.components.length; i++) {
            const e = this.components[i];
            sum += e ** 2;
        }
        return Math.sqrt(sum);
    }
}
exports.Vector = Vector;
let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);
console.log(a.dot(b));
