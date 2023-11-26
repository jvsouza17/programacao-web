// funcionalidades de usuário

const Usuario = require('../model/usuario');

//abrir a página de usuário
function usuarioView(req, res){
  res.render('usuario.html')
}

//abrir a pagina de criação de usuário
function criacaoView(req, res){
  res.render('cadastrar-usuario.html');
}

//cria o usuário corretamente e mostra em forma de json
async function cadastrarUsuario(req, res) {

  let usuario = {
    id: Math.floor(Math.random() * 1000) + 1,
    nome: req.body.nome,
    cpf: req.body.cpf,
    senha: req.body.senha,
    status: req.body.status
  };
    await Usuario.create(usuario)
    .then(()=>{
      console.log(usuario)
      res.redirect('/usuario/json')
     })
    .catch((err) =>{
      console.log(err);
      let erro = true;
      res.redirect('/usuario/json');
  })
}

// lista os usuários em formato json
function listarUsuarios(req, res) {
  Usuario.findAll()
    .then((usuario) => {
      // Renderiza a página com a lista de usuários
      res.json(usuario);
    })
    .catch((err) => {
      // Lida com erros, caso ocorram
      console.error(err);
      res.json(err);
    });
}

//precisa ser corrigida, aplicar a mesma lógica que o Lucas fez para produto

function renderizarPaginaEdicaoUsuario(req, res) {
  const id = req.body.usuarioIdEditar;
  // Renderize a página de edição com o ID fornecido pelo usuário
  // Certifique-se de criar a página de edição adequada
  res.render('editar-usuario.html', { id });
}

function salvarEdicaoUsuario(req, res) {
  const id = req.body['edit-id'];
  const nome = req.body['edit-nome'];
  const cpf = req.body['edit-cpf'];
  const senha = req.body['edit-senha']
  const status = req.body['edit-status'];

  Usuario.findByPk(id)
    .then((usuario) => {
      if (usuario) {
        usuario.nome = nome;
        usuario.cpf = cpf;
        usuario.senha = senha;
        usuario.status = status;

        usuario.save()
          .then(() => {
            res.json(usuario);
          })
          .catch((err) => {
            console.log(err);
            res.json(usuario);
          });
      } else {
        res.json(usuario);
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(usuario);
    });
}

// remove o usuário selecionado
async function removerUsuario(req, res) {
  const id = req.body.usuarioId;

  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      await usuario.destroy();
      res.json({ message: 'Usuário removido com sucesso.' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Erro ao remover o usuário.' });
  }
}

//
async function atualizarUsuario(req, res) {
  const id = req.body.usuarioId;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const senha = req.body.senha;
  const status = req.body.status;

  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      usuario.nome = nome;
      usuario.cpf = cpf;
      usuario.senha = senha;
      usuario.status = status;

      await usuario.save();
      res.json({ message: 'Usuário atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
}

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  renderizarPaginaEdicaoUsuario,
  salvarEdicaoUsuario,
  removerUsuario,
  criacaoView,
  usuarioView,
  atualizarUsuario
};