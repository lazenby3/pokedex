import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import PokemonDetails from './components/PokemonDetails'
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/pokemonstats/:id' exact component=
          {PokemonDetails} />
          <Route path='/' exact component=
          {Home} />
          <Route path='/sign-up' exact component=
          {SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
