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
router.get('/venue',(req,res) => {
      res.send("Venue Page")
})
//days -->
router.get("/venue/:myparam", async (req, res) => {
      const myParam = req.params.myparam;
  
      if (myParam === "day1") {
          res.send("Venue Day 1");
      } 
      else if (myParam === "day2") {
          res.send("Venue Day 2");
      } 
      else if (myParam === "day3") {
            res.send("Venue Day 3");
        }
      else {
          // Handle other cases if necessary
          res.send("Invalid parameter");
          res.status(404);
      }
  });
  //activity -->
  router.get('/activity',(req,res) => {
      res.send("Activity Page")
})
module.exports = router;