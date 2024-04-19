const max = prompt("Enter the number");

const random = Math.floor(Math.random() * 6) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("quit user");
    break;
  } else if (guess == random) {
    console.log("You are right. Congrates!!");
    break;
  } else {
    guess = prompt("please try again");
  }
}
