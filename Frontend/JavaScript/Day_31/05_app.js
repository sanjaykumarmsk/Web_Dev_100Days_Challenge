let arr = [10, 5, 20, 7, 9, 22, 12, 2, 29];
let largest = 0;

for (let i = 0; i < arr.length; i++){
    if( largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);