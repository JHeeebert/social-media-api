const router = require('express').Router();
const apiRoutes = require('./api');
// Middelware
router.use("/api", apiRoutes)
// Error handling
router.use((req, res) =>  res.send("Turn Around, Wrong Route!"));
// Exports router
module.exports = router;