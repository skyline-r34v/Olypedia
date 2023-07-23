const express = require("express")
const router = express.Router();

router.get('/', (req,res) =>
{
      res.send("Statistical Data")
});

module.exports = router;