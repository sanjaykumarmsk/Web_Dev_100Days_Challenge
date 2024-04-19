// Object literal spread
const data = {
    email: "ironman@gmail.com",
    password: "12345",
};

const dataCopy = {...data, id: 123, country: "India"};

console.log(dataCopy);