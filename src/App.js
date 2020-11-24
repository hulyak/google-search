import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


const App =() =>  (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App; 