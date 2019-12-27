const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.sendStatus(404);
});

module.exports = router;
