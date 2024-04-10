let ipt = document.querySelector("input");

ipt.addEventListener("keydown", function(event) {
    console.log("code = ", event.code); //ArrowDown(D), ArrowUp(U), ArrowLeft(L), ArrowRight(R)
    if (event.code == "KeyU"){
        console.log("Character move up");
    } else if (event.code == "KeyD") {
        console.log("Character move down");
    } else if (event.code == "KeyL") {
        console.log("Character move left");
    } else if (event.code == "KeyR") {
        console.log("Character move right");
    }
})