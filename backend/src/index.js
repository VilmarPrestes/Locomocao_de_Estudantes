const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
