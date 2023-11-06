const bcrypt = require("bcrypt");
const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");


//GET ALL
exports.getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch {
    res.status(400).json({ message: "Could not get the users." });
  }
};

//GET ONE USER
exports.getOneUser = async (req, res) => {
  const userId = req.userId;

  try {
    const data = await User.findById(userId).select('-passwordCrypted');
    res.status(200).json(data);
  } catch {
    res.status(400).json({ message: "Could not find any user with that id." });
  }
};


//REGISTER
exports.registerUser = async (req, res) => {
  const { userName, password, passwordRepeat } = req.body;

  if (!userName || !password || !passwordRepeat) {
    return res.status(400).json({ message: "Please fill in all the fields." });
  }

  if (password !== passwordRepeat) {
    return res.status(400).json({ message: "Passwords does not match." });
  }

  //Past correct input validation.
  try {
    const userExists = await User.findOne({ userName });

    if (userExists) {
      return res.status(409).json({ message: "User allready exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      userName,
      passwordCrypted: hashedPassword,
    });

    res.status(201).json(auth.generateToken(newUser));
  } catch {
    res
      .status(400)
      .json({
        message: "Something went wrong when trying to create the user.",
      });
  }
};


//LOGIN
exports.loginUser = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({ message: "Please fill in all the forms." });
  }

  try {
    const matchingUser = await User.findOne({ userName });
    if (!matchingUser) {
      return res.status(401).json({ message: "Wrong username or password." });
    }
    const matchingPasswords = await bcrypt.compare(
      password,
      matchingUser.passwordCrypted
    );
    if (!matchingPasswords) {
      return res.status(401).json({ message: "Wrong username or password." });
    }

    res.status(200).json(auth.generateToken(matchingUser));
  } catch {
    res
      .status(400)
      .json({ message: "Something went wrong when trying to login." });
  }
};
