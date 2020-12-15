const MongoClient = require("mongodb").MongoClient;
const config = require("../config");

module.exports = {
  getCollection,
};

const dbName = "finitoDB";
let dbConn = null;

async function getCollection(collectionName) {
    const db=await _connect()
    return db.collection(collectionName)
}

async function _connect() {
  if (dbConn) return dbConn;
  try {
    const client = await MongoClient.connect(config.dbURL, {
      useNewUrlParser: true
    });
    const db = client.db(dbName);
    dbConn = db;
    return db;
  } catch (err) {
    console.log(`Problem Connecting to DB -${dbName}`, err);
    throw err;
  }
}
