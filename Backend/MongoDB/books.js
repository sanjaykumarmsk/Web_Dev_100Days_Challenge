const mongoose = require("mongoose");

main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
};

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("663dc4151bee54a516a45c9e", {price: -500})
.then((res)=> {
    console.log(res);
})
.catch((res)=>{
    console.log(err.errors.price.properties.message);
});

// let book1 = new Book({
//     title: "Marbal Comics",
//     price: 500,
//     category: "non-fiction",
// });

// book1
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });
