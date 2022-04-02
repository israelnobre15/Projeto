import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cliente from './Cliente.App'
import Produto from './Produtos.App'
import Usuario from './Usuario.App'
import Fornecedor from './Fornecedor.App'
import Estoque from './Estoque.App'
ReactDOM.render(
  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/cliente">Cliente</Link>
        </li>
        <li>
          <Link to="/produto">Produto</Link>
        </li>
        <li>
          <Link to="/usuario">Usuário</Link>
        </li>
        <li>
          <Link to="/fornecedor">Fornecedor</Link>
        </li>
        <li>
          <Link to="/estoque">Estoque</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/cliente">
        <Cliente />
      </Route>
      <Route path="/produto">
        <Produto />
      </Route>
      <Route path="/usuario">
        <Usuario />
      </Route>
      <Route path="/fornecedor">
        <Fornecedor />
      </Route>
      <Route path="/estoque">
        <Estoque />
      </Route>
    </Switch>
  </div>
</Router>
,   document.getElementById("root"))
    