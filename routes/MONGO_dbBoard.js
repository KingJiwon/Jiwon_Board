const express = require('express');
const multer = require('multer');
const fs = require('fs');

const {
  getAllArticles,
  wrtieArticle,
  getArticle,
  modifyArticle,
  deleteArticle,
} = require('../controllers/MONGO_boardController');

const router = express.Router();

// 파일 업로드 설정
const dir = './uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now());
  },
});
const limits = {
  fileSize: 1024 * 1024 * 2,
};

const uploads = multer({ storage, limits });

if (!fs.existsSync(dir)) fs.mkdirSync(dir);
// 로그인 확인 미들웨어
function isLogin(req, res, next) {
  if (req.session.login || req.signedCookies.user) {
    next();
  } else {
    res
      .status(400)
      .send(
        '로그인이 필요한 서비스입니다.</br><a href="/login">로그인 페이지로 이동</a>',
      );
  }
}

// 게시판 페이지 호출
router.get('/', isLogin, getAllArticles);

// 글쓰기 모드로 이동
router.get('/write', (req, res) => {
  res.render('db_board_write');
});

// 글쓰기
router.post('/write', isLogin, uploads.single('img'), wrtieArticle);

// 글 수정 모드로 이동
router.get('/modify/:id', isLogin, getArticle);

// 글 수정
router.post('/modify/:id', isLogin, uploads.single('img'), modifyArticle);

// 글 삭제
router.delete('/delete/:id', isLogin, deleteArticle);

module.exports = router;
