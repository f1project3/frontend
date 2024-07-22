import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamsPage from './pages/TeamsPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import DriversPage from './pages/DriversPage';
import DriverDetailsPage from './pages/DriverDetailsPage';
import StandingsPage from './pages/StandingsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/teams" component={TeamsPage} />
          <Route path="/teams/:id" component={TeamDetailsPage} />
          <Route exact path="/drivers" component={DriversPage} />
          <Route path="/drivers/:id" component={DriverDetailsPage} />
          <Route path="/standings" component={StandingsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
