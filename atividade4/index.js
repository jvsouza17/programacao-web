// arquivo que recebe as funções da calculadora e faz as requisições e respostas dentro da porta desejada

const calc = require('./util/calculadora');
const express = require('express');

const app = express();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Rodando na porta " + PORT)
});

app.get("/somar/:n1/:n2", (req, res)=>{
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} + ${n2} = ${calc.somar(n1,n2)}`)
})

app.get("/subtrair/:n1/:n2", (req, res)=>{
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} - ${n2} = ${calc.subtrair(n1,n2)}`)
})

app.get("/multiplicar/:n1/:n2", (req, res)=>{
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} * ${n2} = ${calc.multiplicar(n1,n2)}`)
})

app.get("/dividir/:n1/:n2", (req, res)=>{
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} / ${n2} = ${calc.dividir(n1,n2)}`)
})

