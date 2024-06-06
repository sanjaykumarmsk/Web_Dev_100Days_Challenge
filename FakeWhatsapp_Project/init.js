const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "rohit",
    to: "neeraj",
    msg: "tech me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "sunil",
    to: "ravi",
    msg: "all the best",
    created_at: new Date(),
  },
  {
    from: "ankit",
    to: "manoj",
    msg: "How are you bro?",
    created_at: new Date(),
    z,
  },
  {
    from: "shivangi",
    to: "neha",
    msg: "bring me some fruits",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
