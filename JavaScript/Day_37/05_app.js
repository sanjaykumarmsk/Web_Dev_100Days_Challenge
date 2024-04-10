let names = ["toney", "bruce", "peter", "steve", "abc", "xyz", "pqy"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, ...others] = names;

console.log(others);