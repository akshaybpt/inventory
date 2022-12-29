const express = require('express');
const connectToMongo = require('./db');
const cors =require('cors');
const bodyParser = require('body-parser');

connectToMongo();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api/auth', require('./routes/auth'));
 app.use('/api/product', require('./routes/product'));
// app.use('/api/photo', require('./routes/photo'));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})