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

    app.put('/admin/:id', async (req, res) => {
      const id = req.params.id;
      const updateAdmin = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          email: updateAdmin.email,
          password: updateAdmin.newPassword,
        },
      };
      const result = await database.updateOne(filter, updateDoc, options);
      res.send(result);
      res.end();
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

async function staffDetails() {
  try {
    await client.connect();

    const database = client
      .db('Hall-Management-Sytem')
      .collection('staff-details');

    app.post('/setStaffProfile', async (req, res) => {
      const staffInfo = req.body;
      console.log('Member info added', staffInfo);
      const result = await database.insertOne(staffInfo);
      res.send(result);
      res.end();
    });

    app.get('/staffDetail', async (req, res) => {
      const query = {};
      const cursor = database.find(query);
      const staffDetail = await cursor.toArray();
      console.log(staffDetail);
      res.send(staffDetail);
      res.end();
    });

    app.get('/staffDetail/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const cursor = database.find(query);
      const staffInfo = await cursor.toArray();
      res.send(staffInfo);
      res.end();
    });

    //put data

    // app.put('/addMember/:id', async (req, res) => {
    //   const id = req.params.id;
    //   const updateUser = req.body;
    //   const filter = { _id: ObjectId(id) };
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: {
    //       userName: updateUser.userName,
    //       password: updateUser.password,
    //       memberStatus: updateUser.memberStatus,
    //     },
    //   };
    //   const result = await database.updateOne(filter, updateDoc, options);
    //   res.send(result);
    //   res.end();
    // });
  } catch {
    console.log(error);
  }
}
staffDetails().catch(console.dir);

async function addStudent() {
  try {
    await client.connect();

    const database = client
      .db('Hall-Management-Sytem')
      .collection('student-details');

    app.post('/studentDetails', async (req, res) => {
      const studentDetails = req.body;
      console.log('Student details added', studentDetails);
      const result = await database.insertOne(studentDetails);
      res.send(result);
      res.end();
    });

    app.get('/studentDetails', async (req, res) => {
      const query = {};
      const cursor = database.find(query);
      const studentDetails = await cursor.toArray();
      console.log(studentDetails);
      res.send(studentDetails);
      res.end();
    });

    app.delete('/studentDetails/:id', async (req, res) => {
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
addStudent().catch(console.dir);

async function editStudent() {
  try {
    await client.connect();

    const database = client
      .db('Hall-Management-Sytem')
      .collection('student-details');

    app.put('/editStudent/:id', async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          userName: updateUser.userName,
          registrationNo: updateUser.registrationNo,
          session: updateUser.session,
          allocatedHall: updateUser.allocatedHall,
          allocatedRoom: updateUser.allocatedRoom,
        },
      };
      const result = await database.updateOne(filter, updateDoc, options);
      res.send(result);
      res.end();
    });
  } catch {
    console.log(error);
  }
}
editStudent().catch(console.dir);

app.get('/', (req, res) => {
  res.send('<h1>Hall management system</h1>');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
