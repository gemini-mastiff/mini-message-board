const pool = require("./pool.js");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query(
    `
    SELECT * FROM messages
    WHERE id = $1`,
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllMessages,
  getMessage,
};
