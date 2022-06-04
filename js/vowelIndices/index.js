function vowelIndices(word){
    let arr = [];
    let vovelArr = [...word];
    console.log(vovelArr);
    let vovels = [ 'a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < vovelArr.length; i++) {
        if(vovels.includes(vovelArr[i])){
            arr.push(i+1)
        }
    }
    return arr;
  }

  console.log(vowelIndices("rjchbPQELaEeVFpGufwN"));