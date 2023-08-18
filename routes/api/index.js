const router = require('express').Router();
const userRoutes = require("./user-routes")
const thoughtRoutes = require("./thought-routes")

// Middleware
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
// Exports the router
module.exports = router;