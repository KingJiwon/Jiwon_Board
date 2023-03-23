const express = require('express');
const { registerUser } = require('../controllers/MONGOOSE_userController');

const router = express.Router();

// 회원가입 페이지로 이동
router.get('/', (req, res) => {
  res.render('register');
});

// 회원가입
router.post('/', registerUser);

module.exports = router;
