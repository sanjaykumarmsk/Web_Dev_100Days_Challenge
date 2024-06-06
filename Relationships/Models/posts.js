const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "username");
  console.log(result);
};

getData();

// const del = async () => {
//   await Post.findByIdAndDelete("664e02e07bf885bd53a4689a");
//   await User.findByIdAndDelete("664e02e07bf885bd53a46899");
// };

// del();
