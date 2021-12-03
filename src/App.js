import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeerList from './pages/BeerList';
import Beer from './pages/Beer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/BeerList/:id'} component={Beer} />
        <Route exact path={'/BeerList'} component={BeerList} />
        <Route exact path={'/RandomBeer'} component={RandomBeer} />
        <Route exact path={'/NewBeer'} component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
