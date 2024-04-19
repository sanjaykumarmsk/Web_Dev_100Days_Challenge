let start = 100;
let end = 200;

function generateRandomNumber(start, end) {
  let diff = end - start;
  console.log(Math.floor(Math.random() * diff) + start);
}
generateRandomNumber(start, end);
