const { MongoClient } = require('mongodb');
require('dotenv').config()

async function main() {
  const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@stuybike.vk5ue51.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await client.db("admin").command({ping: 1});
    console.log("You connected");
  } finally {
    await client.close();
  }
}


main().catch(console.error);

