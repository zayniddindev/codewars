const probel = (str) => {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        if(i % 5 == 2 || i % 5 == 4){
            ans += (str[i] + '  ');
        }else{
            ans += str[i]
        }
    };
    return ans
  }
  console.log(probel('encapsulation')); // enc  ap  sul  at  ion 

  // [0, 1, 2] + [3, 4] + [5, 6, 7]
  // 012 + 34 + 567 + 89
