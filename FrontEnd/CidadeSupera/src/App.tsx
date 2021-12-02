import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight: '100vh'}}>
            
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
