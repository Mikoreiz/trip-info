const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/gtfs',{useNewUrlParser: true});
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Models
const routeRTD = require('./models/routes');
const shapeRTD = require('./models/shapes');
const stop_timeRTD = require('./models/stop_times');
const stopRTD = require('./models/stops');
const tripRTD = require('./models/trips');
const pathRTD = require('./models/trippath');

app.get('/route', function(request, response){
	routeRTD.find({}, function(err, routes){
		if (err) {
			console.log('Could not fetch');
		} else {
			response.send(routes);
		}
	});
});

app.get('/trip-test/:route_id', function(request, response){
	pathRTD.findOne({'route_id' : request.params.route_id}).exec(function(err, trips){
		if (err) {
			console.log('Could not fetch');
		} else {
			response.send(trips);
		}
	});	
});

app.get('/trip-path/:route_id', function(request, response){
	tripRTD.aggregate([
			{$match: {'route_id': '97'}},
			{$lookup: {
				from: 'shapes',
				localField: 'shape_id',
				foreignField: 'shape_id',
				as: 'trip_path'
			}},
			{$project: {
				route_id : 1,
				trip_id : 1,
				latitude: '$trip_path.shape_pt_lat',
				longitude: '$trip_path.shape_pt_lon'
				}}
	]).exec(function(err, trips){
		if (err) {
			console.log('Could not fetch');
		} else {
			response.send(trips);
		}
	});	
});

app.get('/stops', function(request, response){
	stopRTD.aggregate([
// 			{$match: {'stop_id': ''}},
			{$lookup: {
				from: 'stoptimes',
				localField: 'stop_id',
				foreignField: 'stop_id',
				as: 'stop_times'
			}},
			{$project: {
				stop_name: 1, 
				depart: '$stop_times.departure_time',
				}}
	]).exec(function(err, trips){
		if (err) {
			console.log('Could not fetch');
		} else {
			response.send(trips);
		}
	});	
});

app.get('/stoptimes', function(request, response){
	stop_timeRTD.aggregate([
// 			{$match: {'trip_id': '230416'}},
			{$lookup: {
				from: 'stops',
				localField: 'stop_id',
				foreignField: 'stop_id',
				as: 'stopps'
			}},
			{$project: {
				stop_name: '$stopps.stop_name', 
				departure_time: 1,
				}}
	]).exec(function(err, trips){
		if (err) {
			console.log('Could not fetch');
		} else {
			response.send(trips);
		}
	});	
});


app.listen(3001, function(){
    console.log(`Running on port 3001...`);
});