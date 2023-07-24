const express = require("express")
const router = express.Router();
const path = require('path')

router.get('/', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/preoly.html"))
});
router.get('/london', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/london2012.html"))
});
router.get('/brazil', (req,res) =>
{
      res.send("Brazil 2016")
});

router.get('/tokyo', (req,res) =>
{
      res.send("Tokyo 2020")
});
router.use(express.static('public'))
module.exports = router;