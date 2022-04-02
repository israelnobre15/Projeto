const mongoose = require('../database');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
	email: { type: String, required: [true, 'email obrigatório'], unique: true },
	nome: { type: String, required: true },
	celular: { type: String, required: true },
	cpf: { type: String, required: true },
	endereco: { type: String, required: true },
	salario: { type: String, required: true },
	status: { type: String, required: true, default: 'Usuario ativo' },
	idade: {
		type: Number,
		require: [true, 'É necessario ser maior de 18 anos']
	},
		nome_dep: { type: String, default :''},
		possui: { type: Boolean, default: false  },
		dat_nasc: { type: Date, default:'' }
	
});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'Usuario');
