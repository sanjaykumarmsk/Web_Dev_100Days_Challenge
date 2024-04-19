let nums = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 8];
let ans = nums.filter((el) => {
    return el % 2 == 0; // even -> true, odd-> false
});
console.log(ans);