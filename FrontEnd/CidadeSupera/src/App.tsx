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

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight: '100vh'}}>

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

          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
