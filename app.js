
const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { router: admin, products } = require('./routes/admin');
const shop = require('./routes/shop');
const root = require('./util/path');


const app = express();
const staticPath = path.join(root, 'public');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(staticPath));

app.use('/', shop);
app.use('/admin', admin);

app.use((req, res, next) => {
  res.status(404)
    .sendFile(path.join(__dirname, 'views', '404.html'));
});
const server = http.createServer(app);
server.listen(3000);
