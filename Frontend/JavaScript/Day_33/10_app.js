// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = ["hi", "hello", "bye", "!"];

function printArraySum(arr) {
    let result = " ";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(printArraySum(arr));