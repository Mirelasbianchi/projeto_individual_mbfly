const express = require('express');
const router = express.Router();

const tarefaRoutes = require('./tarefaRoutes');
const inicioRoutes = require('./inicioRoutes');
const checklistRoutes = require('./checklistRoutes');

// Rotas principais
router.use('/', inicioRoutes);
router.use('/tarefa', tarefaRoutes);
router.use('/checklist', checklistRoutes);

module.exports = router;
