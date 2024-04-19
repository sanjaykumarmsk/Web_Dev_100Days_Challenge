const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello, i am get root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page og @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
       res.send("<h1>nothing searched</h1>"); 
    }
    res.send(`search results for query: ${q}`);
});

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results");
// }); 


// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`Welcome to the page of @${username}.`);
// });

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>Orange</li><li>Banana</li></ul>";
//     res.send(code);
// });
