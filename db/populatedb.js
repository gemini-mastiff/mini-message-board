require("dotenv").config();
const { Client } = require("pg");

const date = new Date(1883, 3, 14, 11, 30, 0).toISOString();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255)
  user VARCHAR(32)
  time TIMESTAMP
  );
  
  INSERT INTO messages (text, user, time)
  VALUES 
    ("Hello world!", "Karl Marx", ${date});`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
