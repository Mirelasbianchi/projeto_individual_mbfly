const express = require('express');
const router = express.Router();
const VooController = require('../controllers/vooController');

router.post('/', VooController.criarVoo);
router.get('/', VooController.listarVoos);
router.put('/:id', VooController.editarVoo);
router.delete('/:id', VooController.excluirVoo);

module.exports = router;
