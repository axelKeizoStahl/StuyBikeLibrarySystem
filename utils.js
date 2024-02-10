async function logBike(client, bike) {
  const result = await client.db("StuyBike").collections("bikes").insertOne(bike);
  console.log(`New bike created with the following id: ${result.insertedId}`);
  return result.insertedId;
}

async function logUser(client, user) {
  const result = await client.db("stuybike").collections("users").insertOne(user);
  console.log(`new user created with the following id: ${result.insertedId}`);
  return result.insertedId;
}

async function checkout(client, userid, bikeid, userCheckout, bikeCheckout) {
  const result = await client.db("stuybike").collections("users").updateOne({ userid, checkouts: userCheckout });
  console.log(`new user checkout created with the following id: ${result.insertedid}`);
  result = await client.db("stuybike").collections("bikes").updateOne({ bikeid, checkouts: bikeCheckout });
  console.log(`new bike checkout created with the following id: ${result.insertedId}`);
}


