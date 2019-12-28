const path = require('path');

const express = require('express');

const root = require('../util/path');


const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
  const page = path.join(root, 'views', 'add-product.html');
  res.sendFile(page);
});

router.post('/add-product', (req, res) => {
  products.push({
    title: req.body.title,
  });
  res.redirect('/');
});

exports.router = router;
exports.products = products;
