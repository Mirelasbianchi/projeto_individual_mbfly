const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/tarefaController');

// Rota para renderizar a página
router.get('/', (req, res) => {
  // Formata a data atual como DD/MM/YYYY
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${dia}/${mes}/${ano}`;
  
  // Lista de atividades de exemplo
  const atividades = [
    { descricao: "Verificar documentação", status: "feito" },
    { descricao: "Checar combustível", status: "pendente" },
    { descricao: "Revisar plano de voo", status: "pendente" },
    { descricao: "Inspeção visual", status: "feito" },
    { descricao: "Verificar meteorologia", status: "pendente" }
  ];
  
  res.render('tarefa', { dataAtual, atividades });
});

// CRUD básico
router.post('/api', TarefaController.criarTarefa);
router.get('/api', TarefaController.listarTarefas);
router.get('/api/:id', TarefaController.buscarTarefaPorId);
router.put('/api/:id', TarefaController.editarTarefa);
router.delete('/api/:id', TarefaController.excluirTarefa);

module.exports = router;
