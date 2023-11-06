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
    arriveDate: { type: Date, required: true, validate: [dateValidator, "Checkout date can not be before arrivedate."] },
    checkoutDate: { type: Date, required: true },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["paypal", "visa-mastercard"],
    },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

function dateValidator(value) {
  const now = new Date();
  return (
    this.arriveDate >= now &&
    this.checkoutDate >= now &&
    this.arriveDate <= this.checkoutDate
  );
}

module.exports = mongoose.model("Booking", bookingSchema);
