var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var restaurantSchema = new Schema ({
    name: String,
    address: String,
    specific: String

});

var Restaurants = mongoose.model('Restaurants', restaurantSchema);

module.exports = Restaurants;
