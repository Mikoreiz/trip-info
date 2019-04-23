const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stoptimes = new Schema({
	trip_id                 : String, 
	arrival_time            : String,
	departure_time          : String,
	stop_id                 : String,
	stop_sequence           : String,
	stop_headsign           : String,
	pickup_type             : String,
	drop_off_type           : String,
	shape_dist_traveled     : String,
	}, {collection : 'stoptimes'}
);

module.exports = mongoose.model('stoptime', stoptimes);