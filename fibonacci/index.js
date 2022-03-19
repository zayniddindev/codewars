function perimeter(n) {
    let fib = [1, 1];
    if(n===0){
      return 4;
    }else if(n===1){
      return 8;
    }else{
      let sum = 2;
      for(let i = 2; i < n+1; i++){
        fib[i]= fib[i-1] + fib[i-2];
        sum += fib[i];
      }
      return sum*4
    }
  }

  