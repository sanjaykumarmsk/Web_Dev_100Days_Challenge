let ipt = document.querySelector("input");

ipt.addEventListener("keypress", function(event) {
    console.log(event.code);
});