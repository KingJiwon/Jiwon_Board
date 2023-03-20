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
  res.status(200).json('쿠기 굽기 성공!');
});

module.exports = router;
