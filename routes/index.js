const path = require("path");
const router = require("express").Router();
const googleApiRoutes = require("./api/googleAPI");
const apiBooks = require("./api/books");
const apiUsers = require("./api/users");

// API Routes
router.use("/gapi", googleApiRoutes);
router.use("/api", apiBooks, apiUsers);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;