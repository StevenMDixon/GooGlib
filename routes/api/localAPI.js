const router = require("express").Router();

// Matches with "/api/books"
router.get("/", function(req, res){
  res.send("ok")
})

module.exports = router;