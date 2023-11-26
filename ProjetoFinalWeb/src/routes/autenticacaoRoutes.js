const express = require('express');
const router = express.Router();

const autenticacaoController = require('../controller/autenticacaoController');

router.get('/home', autenticacaoController.homeView);
router.get('/', autenticacaoController.indexView);
router.post('/autenticar', autenticacaoController.autenticar); //logar
router.get('/sair', autenticacaoController.sair); //sair

module.exports = router;