const towerBuilder = (n) => {
    let tower = [];
    for(let i = 1; i < n+1; i++){
        let space = '';
        let star = '*';
        for (let k = 0; k < i-1; k++) {
            star += '**';
        }
        for (let j = i-1; j >0; j--) {
            space += '\xa0';
        }
        console.log(space + star + space);
      tower.push(space + star + space)
    }
    return tower;
}
console.log(towerBuilder(3));

for (let t = 0; t < 1; t++) {
    console.log('wedcw');
    
}