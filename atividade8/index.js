const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const router = require('./src/routes/calculadoraRoutes'); //importa o comportamento das rotas

app.engine('html', mustacheExpress());
app.set("view engine", 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));

app.use('/', router); //utiliza o comportamento get e post das rotas

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT);
})