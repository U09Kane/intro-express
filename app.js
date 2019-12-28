const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shop = require('./routes/shop');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/shop', shop);
app.use('/admin', admin);

app.use((req, res, next) => {
  res.send('<h1>404 Page not found</h1>')
});
const server = http.createServer(app);
server.listen(3000);
