const favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while (guess != favMovie && guess != "quit") {
  guess = prompt("wrong guess. Please try again");
}

if (guess == favMovie) {
  console.log("Congrates!!");
}else{
    console.log("You quit");
}
