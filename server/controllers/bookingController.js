const router = require('express').Router();
const { verifyToken } = require('../auth/auth');
const bookingModel = require('../models/bookingModel');


//CRUD
router.get('/', bookingModel.getAllBookings);
router.get('/userbooking', verifyToken, bookingModel.getUserBooking);
router.post('/', verifyToken, bookingModel.postBooking);
router.put('/', verifyToken, bookingModel.updateBooking);
router.delete('/:id', verifyToken, bookingModel.deleteOneBooking);

module.exports = router;