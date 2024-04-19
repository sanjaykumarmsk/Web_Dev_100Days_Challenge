let sum = 54; //Global Scope It is used anywhere used

function calSum(a, b) {
    // let sum = a + b; // Function Scope It is used only inside the Function
    console.log(sum);
}

calSum(1, 2);
console.log(sum);