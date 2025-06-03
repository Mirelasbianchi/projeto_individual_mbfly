const express = require('express');
const router = express.Router();

const tarefaRoutes = require('./tarefaRoutes');
const inicioRoutes = require('./inicioRoutes');
const checklistRoutes = require('./checklistRoutes');

router.use('/tarefa', tarefaRoutes);
router.use('/inicio', inicioRoutes);
router.use('/checklist', checklistRoutes);

module.exports = router;
