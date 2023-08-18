const router = require('express').Router();
const apiRoutes = require('./api');
// Middelware
router.use("/api", apiRoutes)

router.use((req, res) => {
    return res.send("Turn Around, Wrong Route!")
})
// Exports router
module.exports = router;