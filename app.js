
const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shop = require('./routes/shop');
const { get404 } = require('./controllers/errors');
const root = require('./util/path');


const app = express();
const staticPath = path.join(root, 'public');
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(staticPath));

app.use(shop);
app.use('/admin', admin);

// app.use('/', get404);
const server = http.createServer(app);
server.listen(3000);
