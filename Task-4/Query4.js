import { MongoClient } from 'mongodb';

const investorId = "someInvestorId"; // Replace with the actual InvestorID
const updateQuery = { "InvestorID": investorId, "Portfolio.Ticker": "AAPL" };
const updateOperation = { $inc: { "Portfolio.$.Quantity": 10 } };

const client = await MongoClient.connect('mongodb://localhost:27017/');
const coll = client.db('project2').collection('Investors');
await coll.updateOne(updateQuery, updateOperation);

console.log(`Increased quantity of AAPL for InvestorID ${investorId} by 10.`);

await client.close();
// increase the quantity of a specific stock in a portfolio
