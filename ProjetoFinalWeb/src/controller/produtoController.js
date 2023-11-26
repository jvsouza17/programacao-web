//funcionalidades de produto

const Produto = require('../model/produto');

//abrir a página de pulseira
function pulseiraView(req, res) {
  res.render('pulseira.html');
}

//abrir a página de criação de pulseira
function criarView(req, res){
  res.render('cadastrar-pulseira.html');
}


//cria o produto corretamente e mostra em forma de json
async function cadastrarProduto(req, res) {

  let produto = {
    id: Math.floor(Math.random() * 1000) + 1,
    cor: req.body.cor,
    quantidade: req.body.quantidade,
    status: req.body.status
  };
    await Produto.create(produto)
    .then(()=>{
      console.log(produto)
      res.redirect('/produto/json')
     })
    .catch((err) =>{
      console.log(err);
      let erro = true;
      res.redirect('/produto/json');
  })
}


function listarProdutos(req, res) {
  Produto.findAll()
    .then((produto) => {
      res.json(produto);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function renderizarPaginaEdicaoProduto(req, res) {
  const id = req.body.produtoIdEditar;
  // Renderize a página de edição com o ID fornecido pelo usuário
  // Certifique-se de criar a página de edição adequada
  res.render('editar-pulseira.html', { id });
}

function salvarEdicaoProduto(req, res) {
  const id = req.body['edit-id'];
  const cor = req.body['edit-cor'];
  const quantidade = req.body['edit-quantidade'];
  const status = req.body['edit-status'];

  Produto.findByPk(id)
    .then((produto) => {
      if (produto) {
        produto.cor = cor;
        produto.quantidade = quantidade;
        produto.status = status;

        produto.save()
          .then(() => {
            res.json(produto);
          })
          .catch((err) => {
            console.log(err);
            res.json(produto);
          });
      } else {
        res.json(produto);
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(produto);
    });
}


async function removerProduto(req, res) {
  const id = req.body.produtoId;

  try {
    const produto = await Produto.findByPk(id);

    if (produto) {
      await produto.destroy();
      res.json({ message: 'Produto removido com sucesso.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Erro ao remover o produto.' });
  }
}

async function atualizarProduto(req, res) {
  const id = req.body.produtoId;
  const cor = req.body.cor;
  const quantidade = req.body.quantidade;
  const status = req.body.status;

  try {
    const produto = await Produto.findByPk(id);

    if (produto) {
      produto.cor = cor;
      produto.quantidade = quantidade;
      produto.status = status;

      await produto.save();
      res.json({ message: 'Produto atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Erro ao atualizar o produto.' });
  }
}



module.exports = {
  cadastrarProduto,
  listarProdutos,
  renderizarPaginaEdicaoProduto,
  salvarEdicaoProduto,
  removerProduto,
  criarView,
  pulseiraView,
  atualizarProduto
};