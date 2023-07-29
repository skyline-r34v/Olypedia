const express = require("express")
const router = express.Router();
const path = require('path')

router.get('/', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/ticket.html"))
});

router.get('/pay', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/pay.html"))
});

//https://shivam-fl.github.io/Olypedia-testing/pay.html
router.use(express.static('public'))
module.exports = router;