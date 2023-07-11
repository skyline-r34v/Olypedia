const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Athletes Profile")
});
router.get('/sport', (req,res) =>
{
      res.send("Sports Wise")
});
router.get('/sport/country', (req,res) =>
{
      res.send("Country Wise")
});
module.exports = router;