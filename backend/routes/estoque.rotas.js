const express = require('express');
const router = express.Router();

const controller = require('../controllers/estoque.controller');
const itemcontorlador = new controller();

router.post('/addprod', itemcontorlador.Estoque_cad);

//Muda quantidade de estoque de um produto
router.put('/atualizar/:id', itemcontorlador.Estoque_atualizar);

//Busca estoque de um produto
router.get('/listar/:id', itemcontorlador.Estoque_buscar);

router.get('/prox_entrega/:id', itemcontorlador.Entrega_buscar);

router.post('/prox_entrega', itemcontorlador.Prox_etg_inserir);

router.get('/buscar', itemcontorlador.Estoque_listar);

router.delete('/deletar/:id', itemcontorlador.Estoque_remover);

//pode ser ultilizado por outro arquivo//
module.exports = router;
