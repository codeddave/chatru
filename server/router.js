const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("app is running");
});

module.exports = router;
