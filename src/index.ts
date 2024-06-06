import { MongoClient } from 'mongodb';

async function runQuery() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const db = client.db();
    const collection = db.collection('products');
  
    try {
      const result = await collection.find().toArray();
      console.log(result);
    } catch (error) {
      console.error('Error executing query:', error);
    } finally {
      client.close();
    }
  }
  
  runQuery();
  