const express = require("express")
const app = express();
const ticketRouter = require("./routes/ticket")
const preRouter = require("./routes/preolym")

app.get('/' , (req,res) => {
    res.send({"v" : "m"});
});
app.use("/ticket", ticketRouter);
app.use("/preolym", preRouter);

app.listen(3000);
