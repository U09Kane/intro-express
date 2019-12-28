const path = require('path');

const express = require('express');

const { products } = require('./admin');


const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', { title: 'Shop', path: '/', products });
});

module.exports = router;
