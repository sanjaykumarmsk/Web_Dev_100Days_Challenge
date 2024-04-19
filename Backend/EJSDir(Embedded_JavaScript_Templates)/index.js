const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("home");
});

app.get("/ig/username", (req, res) => {
    const followers = ["adam", "bob", "steve", "abc"];
    let {username} = req.params;
    rex.render("instagram.ejs", {username});
})

app.get("rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1; 
    res.render("rooldice.ejs", {diceValue});
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});z