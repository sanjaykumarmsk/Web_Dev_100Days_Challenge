let nums = [2, 4, 6, 8];
let newNum = nums.every((el) =>{
    return el % 2 == 0;
});
console.log(newNum);