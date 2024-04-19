let ipt = document.querySelector("#text");
let h2 = document.querySelector("h2");

ipt.addEventListener("input", () => {
    console.log(ipt.value);
    h2.innerText = ipt.value;
});