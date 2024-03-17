const express = require('express')
const  {getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser} = require('../controllers/userController')
const router = express.Router()

//GET all workouts
router.get('/', getUser)

// GET a single workout
router.get('/:id', getUsers)

//POST  a new workout
router.post('/', createUser)

router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)


module.exports = router
