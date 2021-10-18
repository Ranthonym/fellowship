const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcome friend to auth route");
});

module.exports = router;
