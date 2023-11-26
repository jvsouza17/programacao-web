// funcionalidades da página de autenticação

const Usuario = require('../model/usuario');

const criarUsuarioAdmin = async () => {
    try {
      const senhaAdmin = 'admin'; // Substitua pela senha desejada
      const usuarioAdmin = {
        id: 1, // Substitua pelo valor desejado para o ID
        cpf: 'admin', // Substitua pelo CPF desejado
        senha: senhaAdmin, 
        nome: 'admin', // Substitua pelo nome desejado
        status: 'Ativo' // 'Ativo' ou 'Inativo'
      };
  
      // Inserindo o usuário admin no banco de dados
      await Usuario.create(usuarioAdmin);
  
      console.log('Usuário admin criado com sucesso.');
    } catch (error) {
      console.error('Erro ao criar usuário admin:', error);
    }
  };

function indexView(req, res) {
    criarUsuarioAdmin();
    res.render('index.html');
    
}

function homeView(req, res) {
    res.render('home.html');
}

async function autenticar(req, res){
    // const usuario = await Usuario.findOne({ where: {
    //     login: req.body.matricula, 
    //     senha: req.body.senha}
    // });
    // if(usuario !== null){
    //     req.session.autorizado = true;
    //     req.session.usuario = usuario;
    //     req.session.situacao == 1;
    //     res.redirect('/home.html');
    // }
    // else{
    //     let erro_autenticacao = true;
    //     res.render('index.html', {erro_autenticacao});
    // }
    res.redirect('/home');
}

function verificarAutenticacao(req, res, next) {
    if(req.session.autorizado){
        console.log("usuário autorizado");
        next();
    }
    else{
        console.log("usuário NÃO autorizado");
        res.redirect('/');
    }   
}

function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    autenticar,
    verificarAutenticacao,
    sair,
    indexView,
    homeView,
}