const express = require("express");
const app = express();
const port = 8080;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// GET request handler for /register
app.get("/register", (req, res) => {
    // Retrieve user and password from query parameters
    let {user, password} = req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
});

// POST request handler for /register
app.post("/register", (req, res) => {
    // Retrieve user and password from request body
    let {user, password} = req.body;
    console.log(req.body);
    res.send("Standard POST response");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
