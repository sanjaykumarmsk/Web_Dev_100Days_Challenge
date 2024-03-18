let num = 28715200;

let count = 0;

let copy = num;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);
