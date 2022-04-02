const mongoose = require('../database');
const Schema = mongoose.Schema;

let ProdutosSchema = new Schema({
	nome: { type: String, required: true },
	peso: { type: String, required: true },
	preco: { type: String, required: true },
	tamanho: { type: String, required: true },
	marca: { type: String, required: true }
});

module.exports = mongoose.model('Produtos', ProdutosSchema, 'produtos');
