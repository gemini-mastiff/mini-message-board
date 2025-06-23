const pool = require("./pool.js");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

module.exports = {
  getAllMessages,
};
