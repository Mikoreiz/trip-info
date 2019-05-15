import React, {Component} from 'react';
import './routes.css';

class Routes extends Component {
	render() {
		return(
		<div>
		<a href={this.props.route.route_url} id="routeCard" className="card">
			<div className="card-body row justify-content-start">
				<h1 className="headclass card-title ml-2" 
					style={{color: '#' + this.props.route.route_color}}>{this.props.route.route_id}
				</h1>
				<p className="longName font-weight-light ml-4 mt-3">{this.props.route.route_long_name}</p>
				<input type="hidden" name="routeID" value={this.props.route.route_id}></input>
			</div>
		</a>
		</div>
		);
	}
}

export default Routes;