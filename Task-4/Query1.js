[
  {
    '$group': {
      '_id': null, 
      'totalNetWorth': {
        '$sum': '$Net Worth'
      }
    }
  }
]
// calculates the total net worth of all investors
// exported from Mongodb aggregation pipeline