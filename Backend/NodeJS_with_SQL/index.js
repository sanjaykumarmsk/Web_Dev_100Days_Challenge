const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Sanjay@4499",
  });

  let getRandomUser = () => {
      return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
      ];
  };

  // Inserting New data
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for (let i = 1; i <= 100; i++){
  data.push(getRandomUser());
}

  try{
  connection.query(query, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  } catch (err) {
    console.log(err);
  }

  connection.end();
