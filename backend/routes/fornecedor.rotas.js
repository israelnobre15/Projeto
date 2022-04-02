const express = require('express');
const router = express.Router();

const controller = require('../controllers/fornecedor.controller');
const itemcontorlador = new controller();

router.post('/cad', itemcontorlador.Fornecedor_cad)

//Lista a quantidade de entregas totais
router.get('/consulta/entregas/:id', itemcontorlador.Entrega_buscar);

//Realiza um pedido para o fornecedor
router.post('/pedido', itemcontorlador.Prox_etg_inserir);

router.put('/atualizar/:id', itemcontorlador.Fornecedor_atualizar);

router.get('/buscar', itemcontorlador.Fornecedor_buscar)
//Deleta usuario
router.delete('/deletar/:id', itemcontorlador.Fornecedor_remover);

//pode ser ultilizado por outro arquivo//
module.exports = router;
