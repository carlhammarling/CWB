const jwt = require('jsonwebtoken');
require('dotenv').config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

exports.generateToken = (user) => {
    return jwt.sign({ _id: user._id} , accessTokenSecret)
};

exports.verifyToken = (req, res, next) => {
    try {
        //This value will contain Bearer & TOKEN, we extract the TOKEN.
        const token = req.headers.authorization.split(' ')[1]
        //Decrypting the token.
        req.userId = jwt.verify(token, accessTokenSecret)._id

        next()
    } catch {
        return res.status(401).json({ message: "Could not verify token."})
    }

    
}

