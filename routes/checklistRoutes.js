const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

// Rota para renderizar a página
router.get('/', (req, res) => {
  res.render('checklist');
});

// Rotas da API
router.get('/api', checklistController.getChecklist);
router.put('/api/:id', checklistController.updateChecklistItem);

module.exports = router;
