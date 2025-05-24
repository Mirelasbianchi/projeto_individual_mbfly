const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/tarefaController');

// CRUD básico
router.post('/', TarefaController.criarTarefa);
router.get('/', TarefaController.listarTarefas);
router.get('/:id', TarefaController.buscarTarefaPorId);
router.put('/:id', TarefaController.editarTarefa);
router.delete('/:id', TarefaController.excluirTarefa);

// Rotas adicionais
router.get('/usuario/:usuario_id', TarefaController.listarTarefasPorUsuario);

module.exports = router;