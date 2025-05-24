const express = require('express');
const router = express.Router();
const ConexaoController = require('../controllers/conexaoController');

router.post('/', ConexaoController.criarConexao);
router.get('/', ConexaoController.listarConexoes);
router.put('/:id', ConexaoController.editarConexao);
router.delete('/:id', ConexaoController.excluirConexao);

module.exports = router;
