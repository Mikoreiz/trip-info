const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shapes = new Schema({
	shape_id                : String, 
	shape_pt_lat            : String,
	shape_pt_lon            : String,
	shape_pt_sequence       : String,
	shape_pt_traveled       : String,
	}, {collection : 'shapes'}
);

module.exports = mongoose.model('shape', shapes);