var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/gtfs',{useNewUrlParser: true});
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');

mongoose.set('useFindAndModify', false);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var routed = new Schema({
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

var routeRTD = mongoose.model('route', routed);

app.get('/', function(request, response){
routeRTD.find({}, function(err, obj){
if (err) {
console.log('Could not fetch');
} else {
response.render('index', {
route : obj
});
}
});
});

app.listen(3000, function(){
    console.log(`Running on port 3000...`);
});