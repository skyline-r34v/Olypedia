const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Event Management")
});
router.get('/sortGame', (req,res) =>
{
      res.send("sort by game")
});
router.get('/sortCountry', (req,res) =>
{
      res.send("sort by country")
});

module.exports = router;