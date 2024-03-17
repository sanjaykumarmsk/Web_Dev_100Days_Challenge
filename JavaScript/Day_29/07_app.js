let n = prompt("Enter your number");
n = parseInt(n);

for (let i = n * 10; i >= n; i = i - n) {
  console.log(i);
}
