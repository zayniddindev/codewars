function adjacentsOf(n) {
    switch (n) {
        case 1:
            return ["2", "4"];
        case 2:
            return ["1", "3", "5"];
        case 3:
            return ["2", "6"];
        case 4:
            return ["1", "5", "7"];
        case 5:
            return ["2", "4", "6", "8"];
        case 6:
            return ["3", "5", "9"];
        case 7:
            return ["4", "8"];
        case 8:
            return ["0", "5", "7", "9"];
        case 9:
            return ["6", "8"];
        case 0:
            return ["8"];
    }
}

function getPINs(str) {
    let arr = [str];
    let clone = str.split('');
    console.log(clone.length);
    for (let i = 0; i < clone.length; i++) {
        let ajsArr = adjacentsOf(clone[i]);
        console.log(ajsArr);
        for (let j = 0; j < ajsArr.length; i++) {
            str = str;
            str.slice(i, ajsArr[j]);
            arr.push(str);
        }
    }
    return arr;
}

console.log(getPINs("11"));
//     "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
