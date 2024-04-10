let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNums = nums.some((el) =>{
    return el % 2 == 0;
});

console.log(newNums);