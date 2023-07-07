const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Previous Olympic")
});
router.get('/london', (req,res) =>
{
      res.send("london 2012")
});
router.get('/brazil', (req,res) =>
{
      res.send("Brazil 2016")
});

router.get('/tokyo', (req,res) =>
{
      res.send("Tokyo 2020")
});
module.exports = router;