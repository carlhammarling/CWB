const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    passwordCrypted: { type: String, required: true },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }]
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);