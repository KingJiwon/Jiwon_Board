// eslint-disable-next-line import/no-extraneous-dependencies
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://wldnjs0401:Wlehd15!@cluster0.ug5nkne.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
  });
  test.insertOne(
    {
      name: 'jiwon',
      nickname: 'kingjiwon',
    },
    (insertErr, insrtResult) => {
      console.log(insrtResult);
      const findCursor = test.find({});
      findCursor.toArray((err, data) => {
        console.log(data);
      });
    },
  );
});
