let nums = [1, 3, 5, 7];

let newNums = nums.every((el) =>{
    return el % 2 != 0;
});
console.log(newNums);