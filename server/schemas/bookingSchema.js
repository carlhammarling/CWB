const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      coworkingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cowork",
        required: true,
      },
    arriveDate: { type: Date, required: true },
    checkoutDate: { type: Date, required: true },
    paymentMethod: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
