let box = document.querySelector(".box");

box.addEventListener("mouseout", function(event) {
   box.style.backgroundColor = "yellow";
   console.log(event.mouseout);
});