const express = require('express');
const router = express.Router();

// Rota para renderizar a página inicial
router.get('/', (req, res) => {
  res.render('inicio');
});

module.exports = router;


// routes/inicioRoutes.js
router.get('/', (req, res) => {
  res.render('inicio');
});
