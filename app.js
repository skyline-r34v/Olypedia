const express = require("express")
const app = express();
const ticketRouter = require("./routes/ticket")
const preRouter = require("./routes/preolym")
const eveRouter = require("./routes/eve")

app.get('/' , (req,res) => {
    res.send({"v" : "m"});
});
app.use("/ticket", ticketRouter);
app.use("/preolym", preRouter);
app.use("/eve", eveRouter);

app.listen(3000);
