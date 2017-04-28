var Restaurants = require('../models/restaurantModel');
var bodyParser = require ('body-parser');

module.exports = function (app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

//get restaurants by name
  app.get('/api/restaurants/:name', function(req,res) {
    Restaurants.find({ name: req.params.name },
    function(err, Restaurants) {
      if (err) throw err;
      res.send(Restaurants);
    });
  });

// get restaurants by ID
  app.get('/api/restaurant/:id', function(req,res) {
    Restaurants.findById({ _id: req.params.id }, function(err,Restaurants) {
      if (err) throw err;
      res.send(Restaurants);
    });
  });

//post new restaurant or update existing one

  app.post('/api/restaurant', function(req,res) {

    if (req.body.id) {
      Restaurants.findByIdAndUpdate(req.body.id, {
        name: req.body.name, address: req.body.address, specific: req.body.specific },
        function (err,restaurant)
        {
          if (err) throw err;
          res.send ('Success');

        });
      }

    else {
    var newRestaurant = Restaurants({
      name: req.body.name,
      address: req.body.address,
      specific: req.body.specific
    });
    newRestaurant.save(function(err) {
      if (err) throw err;
      res.send('Success');
    });
    }
  });

// delete restaurant by id
  app.delete('/api/restaurant', function(req,res) {

    Restaurants.findByIdAndRemove (req.body.id, function(err) {
      if (err) throw err;
      res.send ('Success');
    });
  });
}
