const express = require('express');
const Car = require('./cars-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Car.getAll()
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).json({ message: "your get fell through the sad path" })
        })
})
router.post('/', (req, res) => {
    Car.insert(req.body)
        .then(car => {
            res.status(201).json({ message: "car was created" })
        })
        .catch(e => {
            console.log(e.message)
            res.status(500).json({ message: "your post fell through the sad path" })
        })
})



module.exports = router;