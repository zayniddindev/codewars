function validSolution(board) {
    for (let i = 0; i < board.length; i+= 3) {
        const x = board[i], y = board[i+1], z = board[i+2];
        // console.table([x, y, z]);
        for (let j = 0; j < x.length; j+=3) {
            let arr = [];
            arr.push(x[j], x[j+1], x[j+2], y[j], y[j+1], y[j+2], z[j], z[j+1], z[j+2])
            arr = arr.filter((a, i, arr) => i == arr.indexOf(a))
            // console.log(arr)
            if(arr.length !== 9) return false;
        }
    } 
    return true
}
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 6, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
); // false. Change the 6th number in the 1st row from 6 to 9
