const Cliente = require('../models/cliente.models');

class ClienteController {
	async cliente_inserir(req, res) {
		try {
			const cliente = await Cliente.create(req.body);
			if (!cliente)
				return res.status(400).json({ error: 'Erro criação cliente.' });
			return res.status(200).json(cliente);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async cliente_listar(req, res) {
		try {
			const list = await Cliente.find({}).sort({ name: 1 });
			if (!list) return res.status(400).json({ error: 'Erro lista cliente.' });
			return res.status(200).json(list);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Cliente_buscar(req, res) {
		try {
			const { id } = req.params;
			const data = await Cliente.findbyid(id);
			if (!data)
				return res.status(406).json({ error: 'Erro consulta cliente.' });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Cliente_atualizar(req, res) {
		try {
			const data = await Cliente.findByIdAndUpdate(req.params.id, {
				$set: req.body
			});
			if (!data)
				return res.status(406).json({ error: 'Erro atualização cliente.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}

	async Cliente_deletar(req, res) {
		try {
			const data = await Cliente.findByIdAndRemove(req.params.id);
			if (!data)
				return res.status(406).json({ error: 'Erro exclusão cliente.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}
}

module.exports = ClienteController;
