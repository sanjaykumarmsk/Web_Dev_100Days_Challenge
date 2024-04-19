function diceRoll() {
  const random = Math.floor(Math.random() * 6) + 1;

  let guess = prompt("guess the number");

  while (true) {
    if (guess == "quit") {
      console.log("User quit");
      break;
    } else if (guess == random) {
      console.log("you right!, Congrate!!");
      break;
    } else {
      console.log("please try again");
    }
  }
  prompt("enter you max number");
}

diceRoll();
6;
