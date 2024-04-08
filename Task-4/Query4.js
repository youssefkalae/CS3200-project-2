async function increaseStockQuantity(db, investorId, ticker, increaseBy) {
    await db.collection('investors').updateOne(
      { "InvestorID": investorId, "Portfolio.Ticker": ticker },
      { $inc: { "Portfolio.$.Quantity": increaseBy } }
    );
    console.log(`Increased quantity of ${ticker} for investor ${investorId} by ${increaseBy}.`);
  }
  // increase the quantity of a specific stock in a portfolio
