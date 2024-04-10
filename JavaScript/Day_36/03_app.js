let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

let min = arr.reduce((res, el) => {
    if(el > res) {
        return res;
    } else {
        return el;
    }
});
console.log(min);