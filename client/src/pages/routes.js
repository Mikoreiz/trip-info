import React, { Component } from 'react';
import Routes from '../content/routes';
import RouteService from '../services/route-services';

const httpRoute = new RouteService();

class RTDroutes extends Component {
		constructor(props) {
		super(props);
		
		this.state = {route:[]};
		
		this.loadData = this.loadData.bind(this);
		this.routeList = this.routeList.bind(this);
		this.loadData();
	}
	
	//Gets the data from httpService
	loadData = () => {
		var self = this;
		httpRoute.getRoutes().then(data => {
			self.setState({route: data})
		}, err => {
		
		});
	}
	
	routeList = () => {
		const list = this.state.route.map((route) =>
			<div className="justify-content-center m-2">
			<div className="col-md-6" key={route._id}>
				<Routes route={route}/>
			</div>
			</div>
		);
		return (list);
	}
	render(){
		return (
		<div>
			<h1 className="row justify-content-center display-4 m-3 font-weight-bold">ROUTES</h1>
			<div className="card-deck row justify-content-center">
				{this.routeList()}
			</div>
		</div>
		);
	}
}

export default RTDroutes;