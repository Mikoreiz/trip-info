import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

//Pages
import MainPage from './pages/index';
import NotFound from './pages/404';
import Map from './pages/map';

function App() {
  return (
	<Router>
		<Switch>
			<Route exact path="/" component={MainPage}/>
			<Route exact path="/map" component={Map}/>
			<Route exact path="/404" component={NotFound}/>
			<Redirect to="/404"/>
		</Switch>
	</Router>
  );
}

export default App;
