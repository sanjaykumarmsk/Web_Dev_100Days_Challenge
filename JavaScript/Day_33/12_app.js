// {
//     let a = 25; // Block Scope
// }
// console.log(a); // It is not access the block scope variable

// for (let i = 0; i <= 5; i++){
//     console.log(i);  // Block Scope
// }

// console.log(i); // It is not access inside the loops

let age = 25;
if (age >= 18) {
  let str = "adult";
  console.log(str);
}

console.log(str); //It is not access inside the scoped means curely brackets
