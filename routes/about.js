const express = require("express")
const router = express.Router();
const showdb = require('../connection')

router.get('/', showdb) // connection establishment // test connection reference
 
module.exports = router;