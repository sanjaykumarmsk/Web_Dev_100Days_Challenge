let students = [
    {
        name: "sanjay",
        marks: 95,
    },
    {
        name: "amit",
        marks: 98.3,
    },
    {
        name: "rahul",
        marks: 98,
    },
];

let gpa = students.map((el) =>{
    return el.marks / 10;
});

console.log(gpa);