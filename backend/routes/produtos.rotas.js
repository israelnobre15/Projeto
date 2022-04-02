const express = require('express');
const router = express.Router();

const controller = require('../controllers/produtos.controller');
const itemcontrolador = new controller();

//Cadastro de um produto (nome,preço,peso,tamanho,marca)
router.post('/cad', itemcontrolador.Produtos_cad);

//Lista os atributos de um produto, listados no cadastro
router.get('/listar', itemcontrolador.Produtos_listar);

router.get('/buscar', itemcontrolador.Produtos_buscar);

//deleta produto

router.delete('/deletar/:id', itemcontrolador.Produtos_remover);

// Realiza pedido do produto pelo nome
router.post('/pedido', itemcontrolador.Pedido_inserir);

//muda preço do produto
router.put('/atualizar/:id', itemcontrolador.Produtos_atualizar);

//pode ser ultilizado por outro arquivo//
module.exports = router;
