const mongoose = require('../database');
const Schema = mongoose.Schema;

let FornecedorSchema = new Schema({
	nome: { type: String, required: true },
	celular: { type: String, required: true },
	cnpj: { type: String, required: true },
	endereco: { type: String, required: true },
	cep: { type: String, required: true },
	entregas: { type: Number, default: 0 }
});

module.exports = mongoose.model('Fornecedor', FornecedorSchema, 'fornecedor');
