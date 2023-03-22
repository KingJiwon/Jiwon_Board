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

module.exports = client;
