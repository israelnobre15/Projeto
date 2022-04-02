const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('site'));


app.use('/api/produto', require('./routes/produtos.rotas'));
app.use('/api/usuario', require('./routes/usuario.rotas'));
app.use('/api/cliente', require('./routes/clientes.rotas'));
app.use('/api/estoque', require('./routes/estoque.rotas'));
app.use('/api/fornecedor', require('./routes/fornecedor.rotas'));

let port = 8080;

app.listen(port, () => {
	console.log('Servidor rodando na porta ' + port + '!!!');
});
console.log('Para entrar no servidor digite na url: http://localhost:' + port);
console.log('Servidor iniciado');
