import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Dodaj from './components/Dodaj';
import Podrobno from './components/Podrobno';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <div className="bggradient">
              <TodoList />
            </div>
          </Route>
          <Route path="/dodaj">
            <Dodaj />
          </Route>
          <Route path="/podrobno/:id">
            <Podrobno />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
