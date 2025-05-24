const express = require('express');
const router = express.Router();
const DiaFolgaController = require('../controllers/diaFolgaController');

router.post('/', DiaFolgaController.criarDiaFolga);
router.get('/', DiaFolgaController.listarDiasFolga);
router.put('/:id', DiaFolgaController.editarDiaFolga);
router.delete('/:id', DiaFolgaController.excluirDiaFolga);

module.exports = router;
