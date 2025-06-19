const express = require("express");
const router = express.Router();

function formatDate(date) {
  const options = {
    day: "2-digit",
    year: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleDateString("en-GB", options);
}

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

router.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);
router.get("/new", (req, res) => res.render("form", { title: "New Message" }));
router.post("/new", (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  messages.push({
    id: messages.length,
    text: messageText,
    user: messageUser,
    added: formatDate(new Date()),
  });
  res.redirect("/");
});

module.exports = router;
