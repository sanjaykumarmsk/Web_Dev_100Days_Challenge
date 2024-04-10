let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function colorChange() {
    console.dir(this.innerText);
    this.style.backgroundColor = "yellow";
};

btn.addEventListener("click", colorChange);

p.addEventListener("click", colorChange); 

h1.addEventListener("click", colorChange);

h3.addEventListener("click", colorChange);




// p.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });

// h1.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// });

// h3.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "purple";
// });

// btn.addEventListener("click",  function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue"; 
// });