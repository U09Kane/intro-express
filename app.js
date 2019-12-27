const http = require('http');
const express = require('express');


const app = express();

app.use((req, res, next) => {
  res.send('Hello from expressjs!');
});

const server = http.createServer(app);
server.listen(3000);
