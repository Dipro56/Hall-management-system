const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

require('dotenv').config();

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

//mongodb adding

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ecommercecluster.5jtjb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const database = client
      .db('Hall-Management-Sytem')
      .collection('adminCredential');

    app.get('/admin', async (req, res) => {
      const query = {};
      const cursor = database.find(query);
      const adminInfo = await cursor.toArray();
      console.log(adminInfo);
      res.send(adminInfo);
      res.end();
    });

    app.post('/admin', async (req, res) => {
      const adminInfo = req.body;
      console.log('Admin info added', adminInfo);
      const result = await database.insertOne(adminInfo);
      res.send(result);
    });
  } catch {
    console.log(error);
  }
}
run().catch(console.dir);

async function addMember() {
  try {
    await client.connect();

    const database = client.db('Hall-Management-Sytem').collection('member');

    app.get('/addMember', async (req, res) => {
      const query = {};
      const cursor = database.find(query);
      const memberInfo = await cursor.toArray();
      console.log(memberInfo);
      res.send(memberInfo);
      res.end();
    });

    app.get('/addMember/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const cursor = database.find(query);
      const memberInfo = await cursor.toArray();
      res.send(memberInfo);
      res.end();
    });

    app.post('/addMember', async (req, res) => {
      const memberInfo = req.body;
      console.log('Member info added', memberInfo);
      const result = await database.insertOne(memberInfo);
      res.send(result);
      res.end();
    });

    //put data

    app.put('/addMember/:id', async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          userName: updateUser.userName,
          password: updateUser.password,
          memberStatus: updateUser.memberStatus,
        },
      };
      const result = await database.updateOne(filter, updateDoc, options);
      res.send(result);
      res.end();
    });

    //delete data

    app.delete('/addMember/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await database.deleteOne(query);
      res.send(result);
      res.end();
    });
  } catch {
    console.log(error);
  }
}
addMember().catch(console.dir);

app.get('/', (req, res) => {
  res.send('<h1>Hall management system</h1>');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
