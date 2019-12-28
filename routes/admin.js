const path = require('path');

const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  const page = path.join(__dirname, '../', 'views', 'add-product.html');
  res.sendFile(page);
});

module.exports = router;
