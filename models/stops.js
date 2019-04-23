const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stops = new Schema({
	stop_id                 : String, 
	stop_code               : String,
	stop_name               : String,
	stop_desc               : String,
	stop_lat                : String,
	stop_lon                : String,
	zone_id                 : String,
	stop_url                : String,
	location_type           : String,
	parent_station          : String,
	stop_timezone           : String,
	wheelchair_boarding     : String,
	}, {collection : 'stops'}
);

module.exports = mongoose.model('stop', stops);