const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routed = new Schema({
	route_id         : String,
	agency_id        : String,
	route_short_name : String,
	route_long_name  : String,
	route_desc       : String,
	route_type       : Number,
	route_url        : String,
	route_color      : String,
	route_text_color : String,
	agency_key       : String,
	}, {collection : 'routes'}
);

module.exports = mongoose.model('route', routed);