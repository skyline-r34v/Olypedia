const express = require("express")
const path = require('path')
const router = express.Router();

router.get('/', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/authprofile.html"))
})

router.get('/coming_soon', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/comingsoon.html"))
})

router.use(express.static('public'))
module.exports = router;
