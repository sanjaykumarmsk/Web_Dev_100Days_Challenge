const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((value) => value * 2),
];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));
