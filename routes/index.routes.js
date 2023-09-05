const router = require("express").Router();
const contactDetails = require("../db/contactDetails");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
