const express = require('express');
const { registerUser } = require('../controllers/MONGO_userController');

const router = express.Router();

// 회원가입 페이지로 이동
router.get('/', (req, res) => {
  res.render('register');
});

// 회원가입
router.post('/', registerUser);

module.exports = router;

// 기존 회원가입 라우터 코드
// router.post('/', async (req, res) => {
//   const duplicatedUser = await userDB.userCheck(req.body.id);
//   if (!duplicatedUser) {
//     const registerResult = await userDB.registerUser(req.body);
//     if (registerResult) {
//       res
//         .status(200)
//         .send('회원 가입 성공!<br><a href="/login">로그인으로 이동<a>');
//     } else {
//       res
//         .status(404)
//         .send(
//           '회원 가입 실패! 알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동<a>',
//         );
//     }
//   } else {
//     res
//       .status(400)
//       .send(
//         '동일한 ID를 가진 회원이 존재 합니다!<br><a href="/register">회원가입으로 이동<a>',
//       );
//   }
// });
