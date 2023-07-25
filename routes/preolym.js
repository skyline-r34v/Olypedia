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
router.get('/rio', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/rio2016.html"))
});

router.get('/tokyo', (req,res) =>
{
      res.sendFile(path.join(__dirname,"../public/tokyo2020.html"))
});
router.use(express.static('public'))
module.exports = router;