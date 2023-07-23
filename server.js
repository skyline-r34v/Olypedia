const express = require('express')
const app = express();
const morgan = require('morgan')
const ticketRouter = require('./Server/routes/ticket')
const preRouter = require('./Server/routes/preolym')
const eveRouter = require('./Server/routes/eve')
const staticsRouter = require('./Server/routes/statics')
const aboutRouter = require('./Server/routes/about')
const athRouter =require('./Server/routes/ath')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config({ path:'config.env'})
const PORT = process.env.PORT||

app.use(morgan("combined"))
app.use(bodyParser.urlencoded({extended:true}));

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

app.listen(PORT, () => {
    console.log(`Connected at http://localhost:${PORT}`)
});
