import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	`;
	

class Map extends Component {
	componentDidMount(){
		this.map = L.map('map', {
			center: [37.961632, -121.275604],
			zoom: 15,
		});
		
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 19,
			maxNativeZoom: 17,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1IjoibWlraGFlbHJ0ZCIsImEiOiJjanMzdHdpdHAwM2Q3NDRvMW5ueWlpaXh6In0.5QRX579-FSS4GO9VRrNx1A'
		}).addTo(this.map);
		
		var latlngs = [
			[38.020595, -121.361555],
			[38.020426, -121.361555],
			[38.020452, -121.361831],
			[38.021345, -121.361544],
			[38.021337, -121.359548],
			[38.021339, -121.359107],
			[38.021341, -121.358923],
			[38.021342, -121.358741],
			[38.021344, -121.358548],
			[38.021347, -121.358133],
			[38.021342, -121.357578]
			]
		L.polyline(latlngs).addTo(this.map);
	}
	
	render(){
		return( 
		<div className="row justify-content-center">
			<p>{this.props.trip.trip_id}<p>
			<Wrapper width="1280px" height="720px" id="map"/>
		</div>
		)
	}
}

export default Map;