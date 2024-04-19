let arr = [1, 2, 22, 11, 3, 4, 5, 6, 7, 8, 9, 12, 10];

// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

let max = arr.reduce((res, el) => {
   if (res < el) {
    return el;
   } else {
    return res;
   }
});
console.log(max);