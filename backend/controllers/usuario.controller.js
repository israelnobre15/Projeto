const Usuario = require('../models/usuario.models');

class UsuarioController {
	async Usuario_inserir(req, res) {
		try {
			console.log(req.body)
			const usuario = await Usuario.create(req.body);
			if (!usuario)
				return res.status(400).json({ error: 'Erro criação de usuario.' });
			return res.status(200).json(usuario);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Usuario_buscar_salario(req, res) {
		try {
			const { id } = req.params;
			const data = await Usuario.findById(id, { salario });
			if (!data)
				return res.status(400).json({ error: 'Erro consulta usuario.' });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Usuario_buscar_status(req, res) {
		try {
			const { id } = req.params;
			const data = await Usuario.findById(id, { status });
			if (!data)
				return res.status(400).json({ error: 'Erro consulta usuario.' });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async Usuario_atualizar(req, res) {
		try {
			const data = await Usuario.findByIdAndUpdate(req.params.id, {
				$set: req.body
			});
			if (!data)
				return res.status(406).json({ error: 'Erro atualização usuario.' });
			return res.status(200).json(data);
		} catch {
			return res.status(400).json(error);
		}
	}

	async Usuario_deletar(req, res) {
		try {
			console.log("Usuario deletado")
			const data = await Usuario.findByIdAndRemove(req.params.id);
			if (!data)
				return res.status(406).json({ error: 'Erro exclusão usuario.' });
			return res.status(200).json(data);

		} catch {
			return res.status(400).json(error);
		}
	}
	async Usuario_listar(req, res) {
		try {
			const list = await Usuario.find({}).sort({ name: 1 });
			if (!list) return res.status(400).json({ error: 'Erro lista usuarios.' });
			return res.status(200).json(list);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}

module.exports = UsuarioController;
