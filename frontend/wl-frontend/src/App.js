import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import Dodaj from './components/Dodaj'

function App() {
  return (
    <div className="App">

    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <div className="bggradient">
            <TodoList/>
          </div>
        </Route>
        <Route path="/dodaj">
          <Dodaj/>
        </Route>


      </Switch>
    </Router>

        



    </div>
  );
}

export default App;
