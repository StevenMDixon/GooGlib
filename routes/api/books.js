const router = require("express").Router();
const db = require("../../controllers/bookControler");

// Matches with "/api/books"
router.get("/books", function(req, res){
  // api/books (get) - Should return all saved books as JSON.
  res.send("ok")
});

router.post("/books", function(req, res){
  // /api/books (post) - Will be used to save a new book to the database.
  res.send("ok")
});

router.delete("/books/:id", function(req, res){
  // /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
  res.send("ok")
});

module.exports = router;