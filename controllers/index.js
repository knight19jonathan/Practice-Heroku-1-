const express = require("express");
const router = express.Router();

const topicRoutes = require("./topicController");
router.use("/api/topics",topicRoutes);

const userRoutes = require("./userController");
router.use("/api/users",userRoutes);

module.exports = router;