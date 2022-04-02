const mongoose = require('../database');
const Schema = mongoose.Schema;

let ClienteSchema = new Schema({
	email: { type: String, required: [true, 'email obrigatório'], unique: true },
	nome: { type: String, required: true },
	celular: { type: String, required: true },
	cpf: { type: String, required: true },
	endereco: { type: String, required: true },
	cep: { type: String, required: true },
	idade: {
		type: Number,
		required: [true, 'É necessario ser maior de 18 anos']
	},
	
		numero: { type: String },
		cvv: String,
		val_date: Date,
		bandeira: String,
		possui: {type: Boolean}
});

module.exports = mongoose.model('Cliente', ClienteSchema, 'cliente');
