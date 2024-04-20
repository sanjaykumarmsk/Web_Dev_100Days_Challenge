const express = require("express");
const path = require("path"); // Don't forget to require 'path'
const app = express();

const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    const username = req.params.username; // Corrected parameter extraction
    const instaData = require("./data.json");
    const data = instaData[username]; // Access data using username as key
    if (data) {
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
    res.render("instagram.ejs", { data }); // Corrected typo in the template name
});

app.get("/hello", (req, res) => {
    res.send("Hello"); // Corrected response message
});

app.get("/ig/username", (req, res) => {
    const followers = ["adam", "bob", "steve", "abc"];
    let { username } = req.params; // Extract username from params
    res.render("instagram.ejs", { username }); // Corrected template name and provided username
});

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceValue });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
