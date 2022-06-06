// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/typescript
export class G964 {
  public static productFib = (prod: number) => {
    let i = 1,
      sum;
    do {
      sum = this.fib(i) * this.fib(i + 1);
      if (sum < prod) i++;
      else if (sum == prod) return [this.fib(i), this.fib(i + 1), true];
      else return [this.fib(i), this.fib(i + 1), false];
    } while (sum <= prod);
  };

  public static fib(n: number): number {
    if (n <= 1) return n;
    return this.fib(n - 1) + this.fib(n - 2);
  }
}

console.log(G964.productFib(714)); //[ 21, 34, true ]
