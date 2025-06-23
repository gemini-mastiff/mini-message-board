const db = require("../db/queries.js");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

function getNewMessage(req, res) {
  res.render("form", { title: "New Message" });
}

async function postNewMessage(req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  messages.push({
    id: messages.length,
    text: messageText,
    user: messageUser,
    added: formatDate(new Date()),
  });
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
