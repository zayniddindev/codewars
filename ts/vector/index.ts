// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/typescript
export class Vector {
  public components: number[];
  constructor(components: number[]) {
    this.components = components;
  }
  //toString
  public toString() {
    return "(" + this.components.join(",") + ")";
  }
  //equals
  public equals(vector: Vector) {
    return vector.components.join("") == this.components.join("");
  }
  //add
  public add(vector: Vector) {
    if (this.components.length !== vector.components.length)
      throw new Error("Vectors must be equal");
    else {
      let res: number[] = [];
      for (let i = 0; i < this.components.length; i++) {
        const e = this.components[i];
        res.push(e + vector.components[i]);
      }
      return new Vector(res);
    }
  }
  //subtract
  public subtract(vector: Vector) {
    if (this.components.length !== vector.components.length)
      throw new Error("Vectors must be equal");
    else {
      let res: number[] = [];
      for (let i = 0; i < this.components.length; i++) {
        const e = this.components[i];
        res.push(e - vector.components[i]);
      }
      return new Vector(res);
    }
  }
  //dot
  public dot(vector: Vector) {
    if (this.components.length !== vector.components.length)
      throw new Error("Vectors must be equal");
    else {
      let res: number[] = [];
      for (let i = 0; i < this.components.length; i++) {
        const e = this.components[i];
        res.push(e * vector.components[i]);
      }
      return res.reduce((a, b) => a + b);
    }
  }
  //norm
  public norm() {
    let sum: number = 0;
    for (let i = 0; i < this.components.length; i++) {
      const e = this.components[i];
      sum += e ** 2;
    }
    return Math.sqrt(sum);
  }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);
console.log(a.dot(b));
