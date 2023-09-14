const express = require('express');
const estoque = require('./estoque/estoque')
const app = express();

app.get("/api/estoque/cadastrar/:id/:nome/:qtd", (req, res) => {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criar_produto(id, nome, qtd);
    res.send("Produto criado!\n")
    estoque.adicionar_produto(p);
    res.json(p);
});

app.get("/api/estoque/listar", (req, res) => {
    res.json(estoque.listar_produtos);
});

app.get("/api/estoque/editar/:id/:qtd", (req, res) => {
    let id = req.params.id;
    let qtd = req.params.qtd;
    res.json(estoque.editar_produto(id, qtd))
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})