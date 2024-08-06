const express = require('express');
const cors = require('cors');

const {port} = require('./conserver/conServer');
const {connectToDatabase} = require('./Database/database')
const {router} = require('./route/todoRoute')

connectToDatabase();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(port, () => {
    console.log(`server on ${port}`);
})