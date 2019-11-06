import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Decks from './pages/Decks';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Deckbuilder from './pages/Deckbuilder';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';  

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/decks" component={Decks} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/deckbuilder" component={Deckbuilder} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
