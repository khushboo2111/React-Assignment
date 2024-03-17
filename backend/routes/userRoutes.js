const express = require('express')
const  {getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser} = require('../controllers/userController')
const router = express.Router()

//GET all workouts
router.get('/', getUsers)

// GET a single workout
router.get('/:id', getUser)

//POST  a new workout
router.post('/create', createUser)

router.delete('/delete/:id', deleteUser)
router.patch('/update/:id', updateUser)


module.exports = router
