const Estoque = require('../models/estoque.models');

class EstoqueController {
	async Estoque_cad(req, res) {
		try {
			const estoque = await Estoque.create(req.body);
			if (!estoque)
				return res.status(400).json({ error: 'Erro criação estoque.' });
			return res.status(200).json(estoque);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Prox_etg_inserir(req, res) {
		try {
			const prox_etg = await Estoque.create(req.body);
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
			const data = await Estoque.findById(id, { prox_etg });
			if (!data)
				return res.status(400).json({ error: 'Erro consulta entrega.' });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
	async Estoque_listar(req, res) {
		try {
			const list = await Estoque.find({}).sort({ name: 1 });
			if (!list) return res.status(400).json({ error: 'Erro lista usuarios.' });
			return res.status(200).json(list);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Estoque_buscar(req, res) {
		try {
			const { id } = req.params;
			const data = await Estoque.findById(id);
			if (!data)
				return res.status(406).json({ error: 'Erro consulta estoque.' });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Estoque_atualizar(req, res) {
		try {
			const data = await Estoque.findByIdAndUpdate(req.params.id, {
				$set: req.body
			});
			if (!data)
				return res.status(406).json({ error: 'Erro atualização do estoque.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}

	async Estoque_remover(req, res) {
		try {
			const data = await Estoque.findByIdAndRemove(req.params.id);
			if (!data)
				return res.status(406).json({ error: 'Erro exclusão estoque.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}
}

module.exports = EstoqueController;
