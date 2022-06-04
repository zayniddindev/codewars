const divisors = (int) => {
    let arr = [];
    let s = int;
    for (let i = 2; i < s+1;) {
        if(int % i == 0){
            arr.push(i);
            int /= i;
        }else i++;
    }
    return arr;
}

const convertFrac = (lst) => {
    let denom = 1, arr = [];
    for (let i = 0; i < lst.length; i++) {
        arr.push([...divisors(lst[i][1])]);
    }   
    arr = arr.sort((a, b) => a-b).filter((e, i) => arr.indexOf(e) == i);
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
        denom *= arr[j]   
    }
    for (let k = 0; k < lst.length; k++) {
        let sub = denom/lst[k][1];
        lst[k][0] *= sub
        lst[k][1] = denom;
        lst[k] = '(' + lst[k].toString() + ')'
    }
    return lst.join('')
};

var lst = [ [1, 2], [1, 3], [1, 4] ];
console.log(convertFrac(lst));