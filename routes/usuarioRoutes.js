const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

// Criar um novo usuário
router.post('/', UsuarioController.criarUsuario);

// Listar todos os usuários
router.get('/', UsuarioController.listarUsuarios);

// Buscar um usuário por ID
router.get('/:id', UsuarioController.buscarUsuarioPorId);

// Atualizar um usuário
router.put('/:id', UsuarioController.editarUsuario);

// Deletar um usuário
router.delete('/:id', UsuarioController.excluirUsuario);

module.exports = router;
