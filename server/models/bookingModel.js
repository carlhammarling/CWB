const Booking = require("../schemas/bookingSchema");
const User = require("../schemas/userSchema");

//CRUD

exports.getAllBookings = async (req, res) => {
  try {
    const data = await Booking.find().populate("coworkingId");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: "Could not get the bookings." });
  }
};

exports.getUserBooking = async (req, res) => {
  const userId = req.userId;
  try {
    const data = await Booking.find({ userId }).populate("coworkingId");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: "Could not get the bookings." });
  }
};

exports.postBooking = async (req, res) => {
  const userId = req.userId;

  const user = await User.findById(userId);
  const { coworkingId, paymentMethod, arriveDate, checkoutDate, price } =
    req.body;

  try {
    if (!user) {
      return res.status(404).json({
        message:
          "Could not find any user with that id. Please try to sign in again.",
      });
    }

    if (
      !coworkingId ||
      !paymentMethod ||
      !arriveDate ||
      !checkoutDate ||
      !price
    ) {
      return res
        .status(400)
        .json({ message: "You have to fill in all the fields." });
    }

    const newBooking = await Booking.create({
      userId,
      coworkingId,
      paymentMethod,
      arriveDate,
      checkoutDate,
      price,
    });

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({
      message: "Somthing went wrong when trying to create the booking.",
    });
  }
};
