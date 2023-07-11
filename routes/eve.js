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
router.get('/venue',(req,res) => {
      res.send("Venue Page")
})
//sort by country -->
router.get("/sortcountry/:myparam", async (req, res) => {
      const myParam = req.params.myparam;
  
      if (myParam === "d1") {
          res.send("Venue (C) Day 1");
      } 
      else if (myParam === "d2") {
          res.send("Venue (C) Day 2");
      } 
      else if (myParam === "d3") {
            res.send("Venue (C) Day 3");
        }
      else {
          // Handle other cases if necessary
          res.send("Invalid parameter");
          res.status(404);
      }
  });
  //sort by game
  router.get("/sortgame/:myparam", async (req, res) => {
      const myParam = req.params.myparam;
  
      if (myParam === "d1") {
          res.send("Venue (G) Day 1");
      } 
      else if (myParam === "d2") {
          res.send("Venue (G) Day 2");
      } 
      else if (myParam === "d3") {
            res.send("Venue (G) Day 3");
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