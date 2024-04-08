import { MongoClient } from 'mongodb';

async function findAverageMarketCapBySector() {
    const uri = 'mongodb://localhost:27017/';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('project2');
        const result = await db.collection('Stocks').aggregate([
            {
                $group: {
                    _id: "$Sector",
                    AverageMarketCap: { $avg: "$Market Cap" }
                }
            },
            { $sort: { AverageMarketCap: -1 } } // Sort by AverageMarketCap in descending order
        ]).toArray();
        console.log("Average Market Cap by Sector:", result);
    } catch (e) {
        console.error("Error:", e);
    } finally {
        await client.close();
    }
}

findAverageMarketCapBySector().catch(console.error);
// finds average market cap by sector