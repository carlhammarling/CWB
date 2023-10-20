const mongoose = require('mongoose');

const coworkSchema = mongoose.Schema({
    name: { type: String, required: true },
    adress: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    price: {
        day: { type: Number, required: true },
        week: { type: Number, required: true },
        month: { type: Number, required: true },
    },
    reviews: [{
        rating: { type: Number, required: false },
        message: { type: String, required: false }
    }],
    images: { type: [String], required: true },
    facilities: { type: [String], required: false }
})

module.exports = mongoose.model('Cowork', coworkSchema)