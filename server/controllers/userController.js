const router = require("express").Router();
const userModel = require("../models/userModel");

//Add middlewear
router.get("/", userModel.getUser);
router.post("/register", userModel.registerUser);
router.post("/login", userModel.loginUser);

module.exports = router;
