let ipt = document.querySelector("input");

ipt.addEventListener("keydown", function(event) {
    // console.log(event);
    console.log("key = ", event.code);
    console.log("code = ", event.key);
    console.log("key is pressed");
});

// ipt.addEventListener("keyup", function() {
//     console.log("key is pressed");
// })