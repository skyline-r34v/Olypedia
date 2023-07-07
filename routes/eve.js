const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Event Management")
});
module.exports = router;