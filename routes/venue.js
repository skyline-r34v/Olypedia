const express = require('express')
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("venue page")
});
/**router.get('/day1', (req,res) =>
{
      res.send("venue page")
});
router.get('/day2', (req,res) =>
{
      res.send("venue page")
});
router.get('/day3', (req,res) =>
{
      res.send("venue page")
});**/

router.get("/:myparam", async (req, res) => {
      const myParam = req.params.myparam;
  
      if (myParam === "day1") {
          res.send("day1");
      } 
      else if (myParam === "day2") {
          res.send("day2");
      } 
      else if (myParam === "day3") {
            res.send("day3");
        }
      else {
          // Handle other cases if necessary
          res.send("Invalid parameter");
          res.status(404);
      }
  });
  
  module.exports = router;