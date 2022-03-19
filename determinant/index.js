let arr = [[1,2,3], [2, 4, 5]]
let foo = arr.slice();

foo[0].splice(0,1)
console.log(arr, foo);

let x = [1, 2, 3];
for (let i = 0; i < x.length; i++) {
    let y = Array.from(x);
    y.splice(0,1)
    console.log({y});
    
}