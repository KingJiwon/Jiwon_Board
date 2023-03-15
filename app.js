const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
const mainRouter = require('./routes'); // index.js 생략된 것
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');

// MIDDLEWARE

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
});
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다!`);
});
