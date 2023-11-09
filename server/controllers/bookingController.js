const router = require('express').Router();
const { verifyToken } = require('../auth/auth');
const bookingModel = require('../models/bookingModel');


//CRUD
router.get('/', bookingModel.getAllBookings);
router.get('/userbooking', verifyToken, bookingModel.getUserBooking);
router.post('/', verifyToken, bookingModel.postBooking);
// router.put('/')
// router.delete('/')

module.exports = router;