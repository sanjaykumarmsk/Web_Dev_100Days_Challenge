async function greet() {
    throw"404 page not found";
    return "hello!";
}

greet()
.then((result) => {
    console.log("promose was resolved");
    console.log("result was : ", result);
})
.catch((error) => {
    console.log("promise was rejected with error : ", error);
});

let demo = async () => {
    return 5;
} 