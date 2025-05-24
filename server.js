const express = require('express');
const app = express();
const routes = require('./routes'); // Ou ./routes/index
require('dotenv').config();

app.use(express.json());
app.use('/api', routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}, http://localhost:3001`);
});
