const express = require("express");
const controller = require("../controllers/controller.js");
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

router.get("/", controller.getMessages);
router.get("/new", controller.getNewMessage);
router.post("/new", controller.postNewMessage);
router.get("/message/:messageId", controller.getMessageDetails);

module.exports = router;
