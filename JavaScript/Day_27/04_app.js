// // Array references(address in memory)

// console.log("name" == "name");
// console.log("name" === "name");

// console.log([] == []);
// // console.log([] === []);

// console.log(1 == 1);
// console.log([1] == [1]);
// // console.log([1] === [1]);


let arr = ['a', 'b', 'c', 'd'];
let arrCopy = arr;
console.log(arr == arrCopy);
arr.push('d');
console.log(arr);
console.log(arrCopy);
arrCopy.pop();
console.log(arrCopy);
console.log(arr);