const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/tarefaController');

// Rota para renderizar a página
router.get('/', TarefaController.renderizarPagina);

// API Routes
router.get('/tarefas', TarefaController.listarTarefas);
router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas/:id', TarefaController.buscarTarefaPorId);
router.put('/tarefas/:id', TarefaController.atualizarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;
