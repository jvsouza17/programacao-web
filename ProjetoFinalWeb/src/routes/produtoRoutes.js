const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController');


router.post('/produto/criacao', produtoController.criarView); //cadastrar usuário
router.post('/produto/cadastrar', produtoController.cadastrarProduto);
router.get('/produto', produtoController.pulseiraView);
router.get('/produto/json', produtoController.listarProdutos); //lista dos produtos
router.post('/produto/editar', produtoController.renderizarPaginaEdicaoProduto); // Alterado para GET
router.post('/produto/editar', produtoController.salvarEdicaoProduto); // Nova rota para salvar edição
router.post('/produto/excluir', produtoController.removerProduto);
router.post('/produto/atualizar', produtoController.atualizarProduto);

module.exports = router;