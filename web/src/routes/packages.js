const express = require('express')
const router = express.Router()
const Package = require('../models/package')

// Getting all
router.get('/', async (req, res) => {
    try {
        const packages = await Package.find()
        res.json(packages)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting one
router.get('/:id', getPackages, (req, res) => {
    res.send(res.package.Name)
})

// Creating (Uploading)
router.post('/', async (req, res) => {
    const package = new Package({
        Name: req.body.Name,
        Version: req.body.Version
    })
    try {
        const newPackage = await package.save()
        res.status(201).json(newPackage)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update
router.patch('/:id', (req, res) => {
    
})

// Deleting
router.delete('/:id', (req, res) => {

})

async function getPackages(req, res, next) {
    let package
    try {
        package = await Package.findById(req.params.id)
        if (package == null) {
            return res.status(404).json({ message: 'Cannot find package '})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.package = package
    next()
}

module.exports = router