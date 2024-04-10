let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

button.classList.add("btn");