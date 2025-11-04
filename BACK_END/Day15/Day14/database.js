const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// username password cluster

// @ === %40
// @ == hexdecimal: 0x40
const url = "fill your connection link here";
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

//   const findResult =  collection.find({});
//   const ans = await findResult.toArray();
  
//   let balance = 0;

//    for await (const doc of findResult){
//     console.log(doc);
//     balance++;
//    }
//   console.log('Found documents =>', ans);


// const insertResult = await collection.insertOne({name:"Soveer", age:40});
// console.log('Inserted documents =>', insertResult);

// const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// console.log('Inserted documents =>', insertResult);

const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// Database na karta ho, what will happen: Will it create DB for you or throw an error
// collection name karta ho: what will happen: Will it create collection for you or throw an error