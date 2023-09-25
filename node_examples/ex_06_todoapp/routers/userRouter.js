const Router = require('express').Router 
const {getUsers, getById, addUser} = require("../controllers/userController")

const router = Router();

router.get('/', getUsers) 
router.get('/:id', getById) // path variable
module.exports = router