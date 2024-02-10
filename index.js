const { MongoClient } = require('mongodb');

async function main() {
  const uri = "***INSERT URI OF DB***";

  const client = new MongoClient(uri);

  try {
    await client.connect();
  } finally {
    await client.close();
  }
}

main().catch(console.error);
