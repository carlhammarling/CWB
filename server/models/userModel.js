const bcrypt = require('bcrypt')
const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");
const auth = require('../auth/auth');

exports.getUser = (req, res) => {

  // User.find()
  // try {

  // } catch {

  // }
    
};

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

    const userHashedPassword = new User({
        userName,
        passwordCrypted: hashedPassword,
    });


    //Making sure the user is stored before generating the token.
    const savedUser = await userHashedPassword.save();
    res.status(201).json(auth.generateToken(savedUser));

  } catch {
    res.status(400).json({ message: "Something went wrong when trying to create the user."});
  }
};

exports.loginUser = async (req, res) => {

 const { userName, password } = req.body;
if(!userName || !password) {
  return res.status(400).json({ message: "Please fill in all the forms."});
}

try {
 const matchingUser = await User.findOne({ userName })
 if(!matchingUser) {
  return res.status(401).json({ message: "Wrong username or password." });
 }
const matchingPasswords = await bcrypt.compare(password, matchingUser.passwordCrypted)
if(!matchingPasswords) {
  return res.status(401).json({ message: "Wrong username or password." })
}

res.status(200).json(auth.generateToken(matchingUser))

}
catch {
  res.status(400).json({ message: "Something went wrong when trying to login."})
}

};
