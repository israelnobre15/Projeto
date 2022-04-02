const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuario.controller');
const itemcontrolador = new controller();

// Cadastra usuario (nome, telefone, cpf, endereco, salario)
router.post('/cad', itemcontrolador.Usuario_inserir);

//Lista salario do úsuario pelo id
router.get('/listarsalario/:id', itemcontrolador.Usuario_buscar_salario);

//Configura o status de um usuario na empresa (ativo, ferias, inativo)
router.put('/atualizar/:id', itemcontrolador.Usuario_atualizar);

// Deleta os dados de um úsuario em caso de saida da empresa
router.delete('/deletar/:id', itemcontrolador.Usuario_deletar);

router.get('/listar', itemcontrolador.Usuario_listar)
//Consulta feita pelo usuario para identificar seu cargo
router.get('/status/:id', itemcontrolador.Usuario_buscar_status);

//pode ser ultilizado por outro arquivo//
module.exports = router;
