const router = require("express").Router();
const db = require("../../controllers/userController");

// Matches with "/api/user"
router.get("/user", function(req, res){
  // api/user (get) - Should return all saved user as JSON.
  res.send("ok")
});

router.post("/user", function(req, res){
  // /api/user (post) - Will be used to save a new book to the database.
  res.send("ok")
});

router.delete("/user/:id", function(req, res){
  // /api/user/:id (delete) - Will be used to delete a book from the database by Mongo _id.
  res.send("ok")
});

module.exports = router;