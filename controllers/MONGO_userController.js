const mongoClinet = require('./mongoConnect');

const REGISTER_DUPLICATED_MSG =
  '동일한 ID를 가진 회원이 존재 합니다!<br><a href="/register">회원가입으로 이동<a>';
const REGISTER_SUCCESS_MSG =
  '회원 가입 성공!<br><a href="/login">로그인으로 이동<a>';
const REGISTER_UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동<a>';
const LOGIN_NOT_REGISTERD_MSG =
  '해당 ID가 존재하지 않습니다.<br><a href = "/register">회원가입 페이지로 이동</a>';
const LOGIN_NOT_RIGHT_PASSWORD_MSG =
  '비밀번호가 다릅니다!<br><a href = "/login">로그인으로 이동</a>';
const LOGIN_UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/login">로그인으로 이동<a>';

const registerUser = async (req, res) => {
  try {
    const client = await mongoClinet.connect();
    const user = client.db('kdt5').collection('user');

    const duplicatedUser = await user.findOne({ id: req.body.id });
    if (duplicatedUser) return res.status(400).send(REGISTER_DUPLICATED_MSG);

    await user.insertOne(req.body);
    res.status(200).send(REGISTER_SUCCESS_MSG);
  } catch (err) {
    console.error(err);
    res.status(500).send(REGISTER_UNEXPECTED_MSG);
  }
};

const loginUser = async (req, res) => {
  try {
    const client = await mongoClinet.connect();
    const user = client.db('kdt5').collection('user');

    const findUser = await user.findOne({ id: req.body.id });

    if (!findUser) return res.status(400).send(LOGIN_NOT_REGISTERD_MSG);
    if (findUser.password !== req.body.password)
      return res.status(400).send(LOGIN_NOT_RIGHT_PASSWORD_MSG);
    req.session.login = true;
    req.session.userId = req.body.id;
    // 로그읜 쿠키 발행
    res.cookie('user', req.body.id, {
      maxAge: 1000 * 30,
      httpOnly: true,
      signed: true,
    });
    res.status(200).redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).res(LOGIN_UNEXPECTED_MSG);
  }
};

module.exports = {
  registerUser,
  loginUser,
};

// const userDB = {
//   // 중복 회원 찾기
//   userCheck: async (userId) => {
//     try {
//       const client = await mongoClinet.connect();
//       const user = client.db('kdt5').collection('user');
//       const findUser = await user.findOne({ id: userId });
//       return findUser;
//     } catch (err) {
//       console.err(err);
//     }
//   },

//   // 회원가입하기
//   registerUser: async (newUser) => {
//     try {
//       const client = await mongoClinet.connect();
//       const user = client.db('kdt5').collection('user');

//       await user.insertOne(newUser);
//       return true;
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };

// module.exports = userDB;
