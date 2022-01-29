const { Client } = require('pg');

async function gerConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'alewachu',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return client;
}

module.exports = gerConnection;
