const classInfo = {
    sanjay : {
        grade: "A+",
        city: "Lucknow"
    },
    rahul : {
        grade: "A",
        city: "Delhi"
    },
    amit : {
        grade: "O",
        city: "Mumbai"
    }
}

console.log(classInfo);
console.log(classInfo.sanjay);
console.log(classInfo.sanjay.grade);
console.log(classInfo.grade);
console.log(classInfo.sanjay.city);
classInfo.sanjay.city = "Haidrabad"
console.log(classInfo.sanjay.city);
console.log(classInfo.sanjay);

console.log(classInfo.rahul);
console.log(classInfo.rahul.city);
classInfo.rahul.city = "Pune"
console.log(classInfo.rahul.city);
console.log(classInfo.rahul);