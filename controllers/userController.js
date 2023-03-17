const connection = require('./dbConnect');

const userDB = {
  // 중복 회원 찾기
  userCheck: (userId, cb) => {
    connection.query(
      `SELECT * FROM myDB.user WHERE USERID = '${userId}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
  // 회원가입하기
  registerUser: (nweUser, cb) => {
    connection.query(
      `INSERT INTO myDB.user (USERID, PASSWORD) VALUES ('${nweUser.id}','${nweUser.password}')`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
};

module.exports = userDB;
