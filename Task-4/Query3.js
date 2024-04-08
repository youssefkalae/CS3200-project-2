import { MongoClient } from 'mongodb';

async function countTransactionsPerStock() {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    try {
        const coll = client.db('project2').collection('Transactions');
        const result = await coll.aggregate([
          { $group: { _id: "$StockID", totalTransactions: { $sum: 1 } } },
          { $sort: { totalTransactions: -1 } }
        ]).toArray();
        console.log("Number of transactions per stock:", result);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

countTransactionsPerStock().catch(console.error);

// count the number of transactions for a given stock 