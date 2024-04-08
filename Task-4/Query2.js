async function findTechStocksOver500(db) {
    const result = await db.collection('stocks').find({
      $and: [
        { Sector: "Technology" },
        { "Current Price": { $gt: 500 } }
      ]
    }).toArray();
    console.log("Tech Stocks Over $500:", result);
  }
  // find Stocks in a specific sector with price greater than 500