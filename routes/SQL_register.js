// const express = require('express');
// const userDB = require('../controllers/SQL_userController');

// const router = express.Router();

// router.get('/', (req, res) => {
//   res.render('register');
// });

// router.post('/', (req, res) => {
//   userDB.userCheck(req.body.id, (data) => {
//     if (data.length === 0) {
//       userDB.registerUser(req.body, (result) => {
//         if (result.affectedRows >= 1) {
//           res
//             .status(200)
//             .send('회원 가입 성공!<br><a href="/login">로그인으로 이동<a>');
//         } else {
//           res
//             .status(500)
//             .send(
//               '회원 가입 실패! 알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동<a>',
//             );
//         }
//       });
//     } else {
//       res
//         .status(400)
//         .send(
//           '동일한 ID를 가진 회원이 존재 합니다!<br><a href="/register">회원가입으로 이동<a>',
//         );
//     }
//   });
// });

// module.exports = router;
