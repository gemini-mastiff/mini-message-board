const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const caCert = fs.readFileSync(
  path.join(__dirname, "certs", "prod-ca-2021.crt").toString()
);

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ca: caCert,
    rejectUnauthorized: true,
  },
});
