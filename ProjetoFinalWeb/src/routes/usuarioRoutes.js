const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuarioController');

router.post('/usuario/criacao', usuarioController.criacaoView); //renderizar página de cadastrar usuário
router.post('/usuario/cadastrar', usuarioController.cadastrarUsuario); //cadastrar usuário
router.get('/usuario', usuarioController.usuarioView); //renderizar página de usuário
router.get('/usuario/json', usuarioController.listarUsuarios); //lista dos usuários em json
router.post('/usuario/editar', usuarioController.renderizarPaginaEdicaoUsuario); // Alterado para GET
router.post('/usuario/editar', usuarioController.salvarEdicaoUsuario); // Nova rota para salvar edição
router.post('/usuario/excluir', usuarioController.removerUsuario);
router.post('/usuario/atualizar', usuarioController.atualizarUsuario);

module.exports = router;