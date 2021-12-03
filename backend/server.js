require('dotenv').config();
const express = require('express');
const app = express();
const mongo = require('mongoose');
const cors = require('cors')

const {mongourl, port} = require('./.config');

app.use(cors());
app.use(express.json());

mongo.connect(mongourl);
const connection = mongo.connection;
connection.once('open', () => {
    console.log('DB connected');
    const genRouter = require('./routes/genderize');
    app.use('/', genRouter);
});
connection.once('error', (err) => {
    console.log('Connection failed with - ',err);
});

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})