import React, { Component } from 'react';
import Map from '../content/map';
import TripService from '../services/trip-info-service';

const httpTrip = new TripService();

class RTDtrip extends Component {
		constructor(props) {
		super(props);
		
		this.state = {trip:[]};
		
		this.loadData = this.loadData.bind(this);
		this.tripList = this.tripList.bind(this);
		this.loadData();
	}
	
	//Gets the data from httpService
	loadData = () => {
		var self = this;
		httpTrip.getTrips().then(data => {
			self.setState({trip: data.conversations})
		}, err => {
		
		});
	}
	
	tripList = () => {
		const list = this.state.trip.map((trip) =>
			<div className="row justify-content-center m-2">
				<div className="col-md-6" key={trip.route_id}>
					<Map trip={trip}/>
				</div>
			</div>
		);
		return (list);
	}
	render(){
		return(
			<div>
				<Map />
				{this.tripList()}
			</div>
		)
	}
}

export default RTDtrip;