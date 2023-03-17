const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('cookie');
});

router.get('/cook', (req, res) => {
  res.cookie('cookie', true, {
    maxAge: 1000 * 60 * 5,
    httpOnly: false,
  });
  res.redirect('/');
});

module.exports = router;
