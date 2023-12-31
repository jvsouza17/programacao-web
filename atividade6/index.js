const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set("view engine", 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: false })); // necessário para reconhecer o envio do formulário com 'body' // não precisa usar o body-parser
// app.use(express.text());
// app.use(express.json());

app.get('/', (req, res) => { // por meio do método get, ao acessar a rota / iremos preencher o formulário presente no HTML 
    res.render('forms.html') // renderizar a página html    
});
                                    
app.post('/dados', (req, res) => { // ao apertar no botão enviar do formulário seremos direcionados a rota /submit (action=/submit)
                                    // aqui, a rota submit é preparada para ser acessada durante o post
    let formulario = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    }

    res.render('dados.html', {formulario}) // na página dados iremos mandar o objeto formulário ser reconhecido no HTML e ser imprimido na tela
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
})
