const mongoose = require('mongoose');

// const { MONGO_DB_URI } = process.env;
const MONGO_DB_URI =
  'mongodb+srv://wldnjs0401:Wlehd15!@cluster0.ug5nkne.mongodb.net/?retryWrites=true&w=majority';
const connect = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, {
      dbName: 'kdt5',
      useNewUrlParser: true,
    });

    console.log('몽구스 접속 성공');

    mongoose.connection.on('error', (err) => {
      console.error('몽고 디비 연결 에러', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.err('몽고 디비 연결이 끊어졌습니다. 연결을 재시도합니다!');
      connect();
    });
  } catch (err) {
    console.error(err);
  }
};
connect();
module.exports = connect;
