const express = require('express');
const router = express.Router();

const vooRoutes = require('./vooRoutes');
const pernoiteRoutes = require('./pernoiteRoutes');
const diaFolgaRoutes = require('./diaFolgaRoutes');
const conexaoRoutes = require('./conexaoRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const tarefaRoutes = require('./tarefaRoutes');


router.use('/voos', vooRoutes);
router.use('/pernoites', pernoiteRoutes);
router.use('/dias-folga', diaFolgaRoutes);
router.use('/conexoes', conexaoRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/tarefa', tarefaRoutes);

module.exports = router;
