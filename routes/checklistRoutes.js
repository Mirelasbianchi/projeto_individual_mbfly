const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

// Rota para renderizar a página
router.get('/', (req, res) => {
  res.render('checklist');
});

// Rotas da API
router.get('/items', checklistController.getChecklist);
router.put('/items/:id', checklistController.updateChecklistItem);

module.exports = router;
