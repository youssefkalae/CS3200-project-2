import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$group': {
      '_id': null, 
      'totalNetWorth': {
        '$sum': '$Net Worth'
      }
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('project2').collection('Investors');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();

console.log(result);

await client.close();
// from aggregation pipeline in mongo compass 
// calculates the total net worth of the investors