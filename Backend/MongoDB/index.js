const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({ 
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({age: 60}).then((res)=> {
  console.log(res);
});

// User.findByIdAndDelete({_id: "66313cb3e16a313e1d847af9"}).then((res)=> {
//   console.log(res);
// });

// User.findByIdAndUpdate({_id: "66313cb3e16a313e1d847af7"}, {new: true})
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.find({_id: "66313cb3e16a313e1d847af7"})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Bruce", email: "bruce@gmail.com", age: 45},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then((res) => {
//   console.log(res);
// });

// const user1 = new User({name:"Adam", email:"adam@yahoo.in", age:48});
// const user2 = new User({name:"eve", email:"eve@google.com", age:48});

// user1
// .save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// user2.save();