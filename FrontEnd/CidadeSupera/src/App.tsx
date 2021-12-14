import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Equipe from './paginas/equipe/Equipe';
import Sobre from './paginas/sobre/Sobre';
import SobreNos from './paginas/sobrenos/SobreNos';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Feed from './paginas/feed/Feed';
import SideBar from './components/estaticos/sideBar/SideBar';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastropost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch >

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/equipe'>
            <Equipe />
          </Route>

          <Route path='/sobrenos'>
            <SobreNos />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/cadastroUsuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/posts'>
            <ListaPostagem />
          </Route>

          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

          <Route path='/feed'>
            <Feed />
          </Route>

        </Switch>
        <Footer />
      </Router >
    </>
  );
}

export default App;
