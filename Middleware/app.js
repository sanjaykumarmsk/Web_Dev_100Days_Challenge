const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.use((req, res, next) => {
  console.log("Hi, I am a 1st middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Hi, I am a 2nd middleware");
  next();
});

app.get("/random", (req, res, next) => {
  console.log("I am only random");
  next();
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});

// Middleware -> response send
app.get("/", (req, res) => {
  res.send("Hi, I am a root");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

//logger- morgan (useful info)
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

//404
// app.use((req, res) => {
//   res.status(404).send("Page not found!");
// });

app.listen(8080, () => {
  console.log("server listing to port 8080");
});
