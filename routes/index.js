const path = require("path");
const router = require("express").Router();
const googleApiRoutes = require("./api/googleAPI");
const apiRoutes = require("./api/localAPI");

// API Routes
router.use("/gapi", googleApiRoutes);
router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;