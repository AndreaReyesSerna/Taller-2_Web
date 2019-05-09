var express = require('express'), 
  hbs = require('express-handlebars');
  MongoClient = require('mongodb').MongoClient,
  ObjectID = require('mongodb').ObjectID,
  bodyParser = require('body-parser');
//npm install handlebars
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var db;

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err;

  //Nombre de la base de datos
  db = client.db('tienda');
});

//Nombre de la coleccion
var dbName = 'products';
var dbVenta = 'ventas';

app.get('/', function (req, res) {

  var productos = db.collection(dbName).find();
  
});

//npm init
//npm install express handlebars consolidate 
//mongo/mongod/mongodb
//Node index