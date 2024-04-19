let ipt = document.querySelector("#text");
let p = document.querySelector("p");

ipt.addEventListener("input", function() {
    console.log(ipt.value);
    p.innerText = ipt.value;
});