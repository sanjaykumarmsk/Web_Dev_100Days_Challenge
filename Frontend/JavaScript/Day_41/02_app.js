// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function() {
// //     // console.log("button was clicked");
// //     alert("Button was clicked");
// // };

// function sayHello() {
//     alert("Hello!")
// };

// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("mouse was enter!");
    }
    console.dir(btn);
}

function sayHello() {
    alert("Hello!");
}