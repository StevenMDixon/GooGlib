const router = require("express").Router();
const BooksDB = require("../../controllers/bookController");

// Matches with "/api/books"
router.get("/", function(req, res){
  // api/books (get) - Should return all saved books as JSON.
  res.send("ok");
});

router.post("/", function(req, res){
  if(req.user){
    BooksDB.create(req, res);
  }else{
    res.send("err");
  }
});

router.delete("/:id", function(req, res){
  // /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
  if(req.user){
    BooksDB.remove(req, res);
  }else{
  res.send("err")
  }
});

module.exports = router;