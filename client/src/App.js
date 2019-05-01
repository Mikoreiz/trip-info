import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

//Pages
import MainPage from './pages/index';
import NotFound from './pages/404';
import RTDtrip from './pages/trip-info';
import RTDroutes from './pages/routes';

function App() {
  return (
	<Router>
		<Switch>
			<Route exact path="/" component={MainPage}/>
			<Route exact path="/trip-info/:route_id" component={RTDtrip}/>
			<Route exact path="/404" component={NotFound}/>
			<Route exact path="/routes" component={RTDroutes}/>
		</Switch>
	</Router>
  );
}

export default App;
