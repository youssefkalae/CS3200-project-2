import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const coll = client.db('project2').collection('Stocks');
const result = await coll.find({ Sector: "Technology", "Current Price": { $gt: 500 } }).toArray();

console.log(result);

await client.close();
// find Stocks in a specific sector with price greater than 500