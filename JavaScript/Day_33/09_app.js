function sum(n) {
    let addSum = 0;
    for (let i = 1; i <= n; i++){
        addSum += i;
    }
    return addSum; 
}

console.log(sum(1000));