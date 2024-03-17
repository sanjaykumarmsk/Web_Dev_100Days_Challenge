let arr = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];

console.log(arr);
console.log(arr[0][1]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr.length);
arr[0][1] = 'O';
console.log(arr);
arr[2][1] = 'X';
console.log(arr);