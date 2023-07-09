const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Event Management")
});
router.get('/sortgame', (req,res) =>
{
      res.send("sort by game")
});
router.get('/sortcountry', (req,res) =>
{
      res.send("sort by country")
});

router.get('/venue', (req,res) =>
{
      res.send("Venue page")
});
router.get('/venue/day1', (req,res) =>
{
      res.send("Today's Venue")
});
router.get('/venue/day2', (req,res) =>
{
      res.send("Tomorrow's Venue")
});
router.get('/venue/day3', (req,res) =>
{
      res.send("Day After Tomorrow's Venue")
});
module.exports = router;