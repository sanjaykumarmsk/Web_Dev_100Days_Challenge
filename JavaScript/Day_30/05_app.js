let students = [
  ["sanjay", 98],
  ["rahul", 94],
  ["manav", 100],
];

for (let i = 0; i < students.length; i++) {
    console.log(`Info of students #${i+1}`);
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}
