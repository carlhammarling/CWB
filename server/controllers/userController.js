const router = require("express").Router();
const { verifyToken } = require("../auth/auth");
const userModel = require("../models/userModel");

//Add middlewear
router.get("/", userModel.getAllUsers);
router.get("/bytoken", verifyToken, userModel.getOneUser);
router.post("/register", userModel.registerUser);
router.post("/login", userModel.loginUser);

module.exports = router;
