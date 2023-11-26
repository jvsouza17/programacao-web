const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db = require('./src/db');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

app.use(methodOverride('_method'));

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public')); // arquivos públicos da aplicação como imagens e css

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
}));

//Define as rotas da aplicação na pasta routes
app.use('/', require('./src/routes/produtoRoutes'));
app.use('/', require('./src/routes/usuarioRoutes'));
app.use('/', require('./src/routes/autenticacaoRoutes'));

db.sync() 
    .then(() => {
    console.log('Modelo sincronizado com o banco de dados');
    // Resto do código do seu aplicativo
  })
    .catch((err) => {
    console.error('Erro ao sincronizar modelo:', err);
  });

const PORT = 8088;
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT)
});

db.options.logging = (msg) => console.log(msg);