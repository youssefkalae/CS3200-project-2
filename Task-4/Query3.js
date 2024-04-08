async function countTransactionsForInvestor(db, investorId) {
    const count = await db.collection('transactions').countDocuments({ InvestorID: investorId });
    console.log(`Number of transactions for investor ${investorId}:`, count);
  }
// count the number of transactions for a given InvestorID