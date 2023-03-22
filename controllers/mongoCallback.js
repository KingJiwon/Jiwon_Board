// eslint-disable-next-line import/no-extraneous-dependencies
const { MongoClient, ServerApiVersion } = require('mongodb');

// eslint-disable-next-line operator-linebreak
const uri =
  'mongodb+srv://wldnjs0401:Wlehd15!@cluster0.ug5nkne.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
// insertOne 쿼리

async function main() {
  try {
    await client.connect();
    const member = client.db('kdt5').collection('member');
    await member.deleteMany({});
    await member.insertMany([
      { name: '장경은', age: 27 },
      { name: '송수빈', age: 26 },
      { name: '윤제', age: 26 },
      { name: '김계환', age: 36 },
    ]);
    await member.insertOne({ name: '백진솔', age: 34 });
    await member.deleteOne({ name: '송수빈' });
    await member.updateOne(
      { name: '백진솔' },
      { $set: { name: '송수빈', age: 26 } },
    );
    const findCursor = member.find({ age: { $gte: 25 } });
    const findResult = await findCursor.toArray();
    console.log(findResult);
  } catch (err) {
    console.error(err);
  }
}
main();
