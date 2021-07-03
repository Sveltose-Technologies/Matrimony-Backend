const express = require('express');
const app = express();
require("dotenv").config()
const mongoose = require("mongoose")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Middleware
const user = require('./routes/userSignup')
const caste = require('./routes/caste')
const otherdetails = require('./routes/otherdetails')
const religion = require('./routes/religion')
const country = require('./routes/country')
const state = require('./routes/state')
const city = require('./routes/city')
const staff = require('./routes/staff')
const profilefor = require('./routes/profilefor')





//Use
app.use('/api',user)
app.use('/api',caste)
app.use('/api',otherdetails)
app.use('/api',religion)
app.use('/api',country)
app.use('/api',state)
app.use('/api',city)
app.use('/api',staff)
app.use('/api',profilefor)






app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log("DB CONNECTED SUCCEFULLY")
}).catch((error) => {
    console.log(error)
})


app.listen(4000 || process.env.PORT, () => {
    console.log('Example app listening on port 4000!');
});