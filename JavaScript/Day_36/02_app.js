let arr = [5, 15, 10, 23, 20, 30, 11, 50, 17, 40, 60];
// let arr = [10, 20, 30, 40, 50];

let mul = arr.every((el) => {
    return el % 10 == 0;
});

console.log(mul);

