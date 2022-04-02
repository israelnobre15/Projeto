const Fornecedor = require('../models/fornecedor.model');

class FornecedorController {
	async Fornecedor_cad(req, res) {
		try {
			const fornecedor = await Fornecedor.create(req.body);
			if (!fornecedor)
				return res.status(400).json({ error: 'Erro criação .' });
			return res.status(200).json(estoque);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Prox_etg_inserir(req, res) {
		try {
			const prox_etg = await Fornecedor.create(req.body);
			if (!prox_etg)
				return res
					.status(400)
					.json({ error: 'Erro criação da próxima entrega.' });
			return res.status(200).json(prox_etg);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Entrega_buscar(req, res) {
		try {
			const { id } = req.params;
			const data = await Fornecedor.findById(id, { prox_etg });
			if (!data)
				return res.status(400).json({ error: 'Erro consulta entrega.' });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
	async Fornecedor_buscar(req, res) {
		try {
			const list = await Fornecedor.find({}).sort({ name: 1 });
			if (!list) return res.status(400).json({ error: 'Erro lista forneced.' });
			return res.status(200).json(list);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Fornecedor_atualizar(req, res) {
		try {
			const data = await Fornecedor.findByIdAndUpdate(req.params.id, {
				$set: req.body
			});
			if (!data)
				return res.status(406).json({ error: 'Erro atualização do estoque.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}

	async Fornecedor_remover(req, res) {
		try {
			const data = await Fornecedor.findByIdAndRemove(req.params.id);
			if (!data)
				return res.status(406).json({ error: 'Erro exclusão estoque.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}
}

module.exports = FornecedorController;
