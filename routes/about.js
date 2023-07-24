const express = require("express")
const router = express.Router();
const showdb = require('../connection')

router.get('/', showdb) // connection establishment
 
module.exports = router;