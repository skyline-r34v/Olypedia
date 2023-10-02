const express = require("express")
const router = express.Router();
const path = require('path');
//const showdb = require('../connection')

router.get('/', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/aboutoly.html"))
});
router.use(express.static('public'))
//router.get('/', showdb) // connection establishment // test connection reference
 
module.exports = router;