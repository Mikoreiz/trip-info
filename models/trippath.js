const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trippath = new Schema({
	route_id                : String, 
	trip_id                 : String,
	latitude				: [{type:String}],
	longitude				: [{type:String}]
	}, {collection : 'trippath'}
);

module.exports = mongoose.model('trippath', trippath);