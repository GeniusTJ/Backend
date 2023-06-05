const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const user = require('./root/user');

dotenv.config();
const app = express();

app.use(bodyParser.json());


app.use('/api/user',user);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`PORT listen on ${PORT}`);
})