const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => {
    client.query('SELECT NOW()')
      .then(res => {
        console.log("Conectado com sucesso!");
        console.log(res.rows[0]);
        client.end();
      })
      .catch(err => {
        console.error('Erro ao executar a consulta:', err.stack);
      });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  });