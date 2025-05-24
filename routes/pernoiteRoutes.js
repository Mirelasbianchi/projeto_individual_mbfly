const express = require('express');
const router = express.Router();
const PernoiteController = require('../controllers/pernoiteController');

router.post('/', PernoiteController.criarPernoite);
router.get('/', PernoiteController.listarPernoites);
router.put('/:id', PernoiteController.editarPernoite);
router.delete('/:id', PernoiteController.excluirPernoite);

module.exports = router;
