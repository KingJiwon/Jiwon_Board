const express = require('express');
const boardDB = require('../controllers/boardController');

const router = express.Router();

// 게시판 페이지 호출
router.get('/', (req, res) => {
  boardDB.getAllArticles((data) => {
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    res.render('db_Board', { ARTICLE, articleCounts });
  });
});

// 글쓰기 페이지 호출
router.get('/write', (req, res) => {
  res.render('db_board_write');
});

// 데이터 베이스에 글쓰기
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.wrtieArticle(req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 쓰기 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다!');
    err.statusCode = 400;
    throw err;
  }
});

router.get('/modify/:id', (req, res) => {
  boardDB.getArticle(req.params.id, (data) => {
    if (data.length > 0) {
      res.render('db_board_modify', { selectedArticle: data[0] });
    } else {
      const err = new Error('해당 ID 값을 가지는 게시글이 없습니다!');
      err.statusCode = 500;
      throw err;
    }
  });
});

router.post('/modify/:id', (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.modifyArticle(req.params.id, req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = Error('글 수정 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다');
    err.statusCode = 400;
    throw err;
  }
});

router.delete('/delete/:id', (req, res) => {
  if (req.params.id) {
    boardDB.deleteArticle(req.params.id, (data) => {
      if (data.affectedRows >= 1) {
        res.status(200).send('회원 삭제 완료!');
      } else {
        const err = Error('글 삭제 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다');
    err.statusCode = 400;
    throw err;
  }
});

router.get('/getAll', (req, res) => {
  boardDB.getAllArticles((data) => {
    res.send(data);
  });
});

module.exports = router;
