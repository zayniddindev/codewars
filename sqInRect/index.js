let arr = [];
function sqInRect(lng, wdth){
        if(lng == 1){
            for (let i = 0; i < wdth; i++) {
                arr.push(1)
            }
        }else if(wdth == 1){
            for (let i = 0; i < lng; i++) {
                arr.push(1)
            }
        }else if(lng > wdth){
            arr.push(wdth);
            sqInRect(lng-wdth, wdth)
        }else if(lng == wdth){
            return null;
        }else{
            arr.push(lng);
            sqInRect(lng, wdth-lng);
        }
        return arr.sort();
  }

console.log(sqInRect(20, 14));