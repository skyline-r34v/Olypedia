const express = require("express")
const router = express.Router();
const showdb = require('../Database/connection')

router.get('/', showdb) // connection establishment
 
module.exports = router;