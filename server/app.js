const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use('/api/cowork', require('./controllers/coworkController'));
app.use('/api/user', require('./controllers/userController'));
app.use('/api/booking', require('./controllers/bookingController'));


module.exports = app;