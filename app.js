const express = require('express')
const app = express();
const ticketRouter = require('./routes/ticket')
const preRouter = require('./routes/preolym')
const eveRouter = require('./routes/eve')
const staticsRouter = require('./routes/statics')
const aboutRouter = require('./routes/about')
const athRouter =require('./routes/ath')

app.get('/' , (req,res) => {
    res.send({"v" : "m"});
});
app.use('/ticket' , ticketRouter);
app.use('/preolym', preRouter);
app.use('/eve' , eveRouter);
//app.use('/eve/venue' , venueRouter);
app.use('/statics' , staticsRouter);
app.use('/about' , aboutRouter);
app.use('/athprofile',athRouter);

app.listen(3000, () => {
    console.log("Connected at Port 3000")
});
