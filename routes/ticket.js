const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Ticket on sale")
});
router.get('/pay', (req,res) =>
{
      res.send("Payment")
});

module.exports = router;