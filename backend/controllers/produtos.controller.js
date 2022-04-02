const Produtos = require('../models/produtos.models');

class ProdutosController {
	async Produtos_cad(req, res) {
		try {
		
			const produtos = await Produtos.create(req.body);
			if (!produtos)
				return res.status(400).json({ error: 'Erro criação de produto.' });
				return res.status(200).json(produtos);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Pedido_inserir(req, res) {
		try {
			const pedido = await Produtos.create(req.body);
			if (!pedido)
				return res
					.status(400)
					.json({ error: 'Erro criação do próxima pedido.' });
			return res.status(200).json(pedido);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Produtos_listar(req, res) {
		try {
			const list = await Produtos.find({
				name: { $regex: req.params.nome, $options: 'i' }
			});
			if (!list) return res.status(406).json({ error: 'Erro lista produto.' });
			return res.status(200).json(list);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
	async Produtos_buscar(req, res) {
		try {
			const list = await Produtos.find({}).sort({ name: 1 });
			if (!list) return res.status(400).json({ error: 'Erro lista produtos.' });
			return res.status(200).json(list);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Produtos_atualizar(req, res) {
		try {
			const data = await Produtos.findByIdAndUpdate(req.params.id, {
				$set: req.body
			});
			if (!data)
				return res.status(406).json({ error: 'Erro atualização do produto.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}

	async Produtos_remover(req, res) {
		try {
			const data = await Produtos.findByIdAndRemove(req.params.id);
			if (!data)
				return res.status(406).json({ error: 'Erro exclusão do produto.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}
}

module.exports = ProdutosController;
