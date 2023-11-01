// importa a função calcular da calculadora e define o comportamento dos arquivos html
const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) { 
    res.render('index.html');
}

function calcular(req, res) {
    const resultado = calculadora.calcular(req.body.numeroA, req.body.numeroB, req.body.operacao);
    res.render('resultado', { resultado });
}

module.exports = {
    indexCalculadora,
    calcular
};