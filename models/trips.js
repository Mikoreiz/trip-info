const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trips = new Schema({
	route_id                : String, 
	service_id              : String,
	trip_id                 : String,
	trip_headsign           : String,
	trip_short_name         : String,
	direction_id            : Number,
	block_id                : String,
	shape_id                : String,
	bikes_allowed           : String,
	}, {collection : 'trips'}
);

module.exports = mongoose.model('trip', trips);