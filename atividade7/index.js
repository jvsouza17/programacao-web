const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set("view engine", 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: false })); // necessário para reconhecer o envio do formulário com 'body' // não precisa usar o body-parser
// app.use(express.text());
// app.use(express.json());

app.get('/', (req, res) => { // por meio do método get, ao acessar a rota /forms iremos preencher o formulário presente no HTML 
    res.render('forms.html') // renderizar a página html    
});
                                    // ao apertar no botão enviar do formulário seremos direcionados a rota /submit (action=/submit)
app.post('/dados', (req, res) => { // aqui, a rota submit é preparada para ser acessada durante o post

    let formulario = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        nascimento: req.body.nascimento,
        endereco: req.body.endereco,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone
    }

    let erro_form = false;
    
    if(formulario.nome == ""){
        erro_form = true
    }
    if(formulario.email == ""){
        erro_form = true
    }
    if(formulario.telefone == ""){
        erro_form = true
    }

    res.render('dados.html', {formulario, erro_form}) // ela irá trazer as informações passadas no formulário da rota /forms
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
})
