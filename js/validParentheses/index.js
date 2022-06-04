function validParentheses(parens) {
    parens = parens.split('')
    if(parens.length % 2 !== 0) return false;
    let opens = [], closes = [];
    for (let i = 0; i < parens.length; i++) {
        const p = parens[i];
        if (p == '(') {
            opens.push(p);
        }else{
            if(opens.length > 0) opens.pop()
            else return false;
        }
    }
    return opens.length == 0 ? true : false;
}

console.log(validParentheses("()))"));

// (( ((()))) (()))

// ()()
