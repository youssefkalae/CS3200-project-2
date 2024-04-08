import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); 

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2';
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db();
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}

connectDB().then((db) => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/investors', async (req, res) => {
    try {
      const investors = await db.collection('Investors').find().toArray();
      res.json(investors);
    } catch (error) {
      res.status(500).json({ message: "Could not fetch investors" });
    }
  });

  app.post('/investors', async (req, res) => {
    try {
      const result = await db.collection('Investors').insertOne(req.body);
      res.status(201).json(result.ops[0]);
    } catch (error) {
      res.status(400).json({ message: "Could not create the investor" });
    }
  });

  app.get('/politicalFigures', async (req, res) => {
    try {
      const figures = await db.collection('PoliticalFigures').find().toArray();
      res.json(figures);
    } catch (error) {
      res.status(500).json({ message: "Could not fetch political figures" });
    }
  });

  app.post('/politicalFigures', async (req, res) => {
    try {
      const result = await db.collection('PoliticalFigures').insertOne(req.body);
      res.status(201).json(result.ops[0]);
    } catch (error) {
      res.status(400).json({ message: "Could not create the political figure" });
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});