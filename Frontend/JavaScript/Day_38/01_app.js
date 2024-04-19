let arr = [1, 2, 3, 4, 5];

const square = arr.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

let avg = sum / arr.length;
console.log(avg);