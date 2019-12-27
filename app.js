const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shop = require('./routes/shop');


const app = express();
const api = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', api);
api.use('/shop', shop);
api.use('/admin', admin);

app.use((req, res, next) => {
  res.send('<h1>404 Page not found</h1>')
});
const server = http.createServer(app);
server.listen(3000);
