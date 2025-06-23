const db = require("../db/queries.js");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  messages.forEach((message) => {
    message.time = message.time.toISOString().slice(0, 19).replace("T", " ");
  });
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

function getNewMessage(req, res) {
  res.render("form", { title: "New Message" });
}

async function postNewMessage(req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  await db.insertMessage(messageText, messageUser);
  res.redirect("/");
}

async function getMessageDetails(req, res) {
  const id = Number(req.params.messageId);
  const message = await db.getMessage(id);
  res.render("details", { title: `Message Details`, message: message });
}

module.exports = {
  getMessages,
  getNewMessage,
  postNewMessage,
  getMessageDetails,
};
