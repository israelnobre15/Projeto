const mongoose = require('../database');
const Schema = mongoose.Schema;

let EstoqueSchema = new Schema({
	qnt_stq: { type: String, required: true },
	prox_etg: { type: Date },
	nomeprod: { type: String, required: true },
	ult_etg: { type: Date, required: true },
	dat_fabric: { type: Date, required: true }
});

module.exports = mongoose.model('Estoque', EstoqueSchema, 'estoque');
