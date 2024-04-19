let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", () => {
    console.log("div was clicked");
});

ul.addEventListener("click", () => {
    console.log("ul was clicked");
});


for (li of lis) {
    li.addEventListener("click", () => {
        console.log("li was clicked");
    });
}