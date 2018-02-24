import React, { Component } from 'react';
import './main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Income from './components/income/income';
import Assets from './components/assets/assets';
import Liabilities from './components/liabilities/liabilities';
import Budget from './components/budget/budget';
import Game from './components/game/game';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/income' component={Income} />
              <Route path='/assets' component={Assets} />
              <Route path='/liabilities' component={Liabilities} />
              <Route path='/budget' component={Budget} />
              <Route path='/game' component={Game} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
