const express = require('express');
const router = express.Router();

const controller = require('../controllers/cliente.controller');
const itemcontroller = new controller();

router.post('/cad', itemcontroller.cliente_inserir);

router.get('/listar', itemcontroller.cliente_listar);

router.get('/listar_cliente/:id', itemcontroller.Cliente_buscar);

router.delete('/deletar/:id', itemcontroller.Cliente_deletar);

router.put('/update/:id', itemcontroller.Cliente_atualizar);

module.exports = router;
