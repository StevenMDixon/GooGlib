const router = require("express").Router();
const axios = require("axios");

// Matches with "/api/books"
router.get("/:id", function(req, res){
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.id)
  //.then(res => res.JSON())
  .then(response => {
    res.json(response.data.items)
  })
  .catch(err => {console.log(err); res.send(err)})
})

module.exports = router;