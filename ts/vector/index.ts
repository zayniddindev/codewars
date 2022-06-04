// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/typescript
export class Vector {
  private components: number[];
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
  public add(vector: number[]) {
    let res: number[] = [];
    for (let i = 0; i < this.components.length; i++) {
      const e = this.components[i];
      res.push(e + vector[i]);
    }
    return new Vector(res);
  }
}

let a = new Vector([1, 2, 3]);
console.log(a.equals(new Vector([1, 2, 3])));
console.log(a.toString());
