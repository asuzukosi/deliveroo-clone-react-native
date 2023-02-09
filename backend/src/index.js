const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const tempDB = require("./data.json")
const restaurantDB = require("./restaurant.json")
const dishDB = require("./dish.json")
const categoryDB = require("./category.json")
const featuredDB = require("./featured.json")



// initialize express application
const app = express()

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/restaurants', (req, res) => {
    res.send(restaurantDB);
  });

// defining an endpoint to return all ads
app.get('/dishes', (req, res) => {
  res.send(dishDB);
});

// defining an endpoint to return all ads
app.get('/featured', (req, res) => {
  res.send(featuredDB);
});

// defining an endpoint to return all ads
app.get('/categories', (req, res) => {
  res.send(categoryDB);
});


  
  // starting the server
  app.listen(3001, () => {
    console.log('listening on port 3001');
  });


