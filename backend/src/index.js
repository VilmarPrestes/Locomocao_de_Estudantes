const express = require('express');
const app = express();
const config = require('./config/config');
const routes = require('./src/routes');

app.use(express.json());
app.use('/api', routes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
