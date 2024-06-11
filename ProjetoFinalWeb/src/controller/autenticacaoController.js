// funcionalidades da página de autenticação

const Usuario = require('../model/usuario');

async function UsuarioAdmin() { // criar na controller
    try {
        // Verifica se já existe um usuário admin
        const adminUser = await Usuario.findOne({ where: { cpf: 'admin' } });
        
        if (!adminUser) {
            // Cria um usuário admin se não existir
            const admin = await Usuario.create({id: '1', cpf: 'admin', senha: 'admin', nome: 'admin', status: 'Ativo'});
            console.log('Usuário admin criado:', admin.toJSON());
        } else {
            console.log('Usuário admin já existe:', adminUser.toJSON());
        }
  
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}

// async function verificarCredenciais(){
//     console.log("testando123")
//     try {
//         const usuario = await Usuario.findOne({where: { cpf: req.body.cpf, senha: req.body.senha}})

//         if(usuario) {
//             alert("Usuário encontrado, você será redirecionado!");
//             setTimeout(()=>{
//                 homeView();
//             }, 1000) 
//         } else 
//             alert("Usuário não existe!");
//     } catch(error) {
//         console.log(error);
//     }
// }   


function indexView(req, res) {
    res.render('index');
    
}

function homeView(req, res) {
    res.render('home');
}

async function autenticar(req, res){

    try {
    const usuario = await Usuario.findOne({ where: {
        cpf: req.body.cpf, 
        senha: req.body.senha,
        status: 'Ativo'}
    });

    if(usuario) {
        console.log("Usuário encontrado, você será redirecionado!");
        return homeView(req, res); 
    } else 
        console.log("Usuário não existe!");
        return indexView(req, res);
    } catch(error) {
        console.log(error);
    }
}

// function verificarAutenticacao(req, res, next) {
//     if(req.session.autorizado){
//         console.log("usuário autorizado");
//         next();
//     }
//     else{
//         console.log("usuário NÃO autorizado");
//         res.redirect('/');
//     }   
// }

function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    autenticar,
    sair,
    indexView,
    homeView,
    UsuarioAdmin,
}