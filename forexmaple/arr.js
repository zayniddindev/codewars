function solution(arr) {
    let ans = 0;
    for(let i = 0; i < arr.length - 1; ) {
        if(arr[i] < arr[i+1]) {
            i++;
        }else{
            ans += (arr[i] - arr[i+1] + 1);
            arr[i+1] = arr[i] + 1;
        }
    }
    return ans;
}

console.log(solution([1, 2, 1, -2])); // 1 2 3 4