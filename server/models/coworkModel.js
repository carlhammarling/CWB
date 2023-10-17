const Cowork = require('../schemas/coworkSchema')



//CRUD

//POST
exports.postCowork = (req, res) => {
    const { name, adress, email, description, price, reviews, images, fascilities } = req.body

    if( !name || !adress || !email || !description || !price || !reviews || !images || !fascilities ) {
        return res.status(400).json({
            message: 'You have to fill in all the fields.'
        })
    }

    Cowork.create({ name, adress, email, description, price, reviews, images, fascilities })
        .then(data => res.status(201).json(data))
        .catch(() => res.status(400).json({
            message: 'Something went wrong while posting.'
        }))
}

//GET
exports.getAllCowork = (req, res) => {
    Cowork.find()
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).json({
            messsage: 'Could not find the data.'
        }))
}