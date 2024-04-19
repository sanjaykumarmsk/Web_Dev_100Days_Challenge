let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let finalVal = nums.reduce((res, el) =>{
    console.log(res);
    return res * el;
});
console.log(finalVal);