async function findPoliticalFiguresByAffiliation(db, affiliation) {
    const result = await db.collection('politicalFigures').find({ "Political Affiliation": affiliation }).toArray();
    console.log(`Political Figures with affiliation ${affiliation}:`, result);
  }// find all political figures from a specific party