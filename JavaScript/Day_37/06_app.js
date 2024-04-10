const student = {
    name: "sanjay",
    age: 18,
    class: 12,
    subject: ["Hindi", "English", "Math", "Science"],
    username: "sanjay@1234",
    password: "abcd",
    city: "Goa",
};

let {username: user, password: secret, city= "Mumbai"} = student;

console.log(user);
console.log(secret);
console.log(city);