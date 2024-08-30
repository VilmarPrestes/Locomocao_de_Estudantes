const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

console.log('Database URL:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const testConnectionAndInsert = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database');

    const email = 'testuser@example.com';
    const password = 'securepassword';

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id', [email, hashedPassword]);

    console.log('User inserted with ID:', result.rows[0].id);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await pool.end();
  }
};

testConnectionAndInsert();
