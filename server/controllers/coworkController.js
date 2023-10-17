const router = require('express').Router()
const coworkModel = require('../models/coworkModel')


//CRUD

//GET
router.get('/', coworkModel.getAllCowork)
router.post('/', coworkModel.postCowork)


module.exports = router;