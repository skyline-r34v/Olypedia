const express = require('express')
const app = express();
const morgan = require('morgan')
const ticketRouter = require('./routes/ticket')
const preRouter = require('./routes/preolym')
const eveRouter = require('./routes/eve')
const aboutRouter = require('./routes/about')
const athRouter =require('./routes/ath')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path:'config.env'})
const PORT = process.env.PORT||

app.use(morgan("combined"))
app.use(bodyParser.urlencoded({extended:true}));

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"));
});
app.use('/ticket' , ticketRouter);
app.use('/preolym', preRouter);
app.use('/eve' , eveRouter);

app.use('/about' , aboutRouter);
app.use('/athprofile',athRouter);

app.listen(PORT, () => {
    console.log(`Connected at http://localhost:${PORT}`)
});

app.use(express.static('public'))