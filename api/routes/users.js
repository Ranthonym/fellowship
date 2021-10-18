const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcome friend");
});

module.exports = router;
