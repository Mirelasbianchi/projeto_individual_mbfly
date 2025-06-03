const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes'); 
require('dotenv').config();

// Configuração do template engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// Middleware para JSON
app.use(express.json());

// Middleware para servir arquivos estáticos (CSS, imagens, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/api', routes);

// Porta do servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}, http://localhost:${PORT}`);
});
