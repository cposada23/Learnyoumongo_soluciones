// intento de coneccion a mongolab
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://cposadaa:Cp@ds033133.mongolab.com:33133/librosdb'

//prueba de coneccion con mongolab.com
/*
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('books');
    collection.find().toArray(function (err,docs) {
        if (err)throw err;
        console.log(docs);
        db.close();
    });
});
*/
//prueva de insercion mongolab.com

var seddata = [ { 
    name: 'Las enseñansas de don juan',
    year: '2009',
    language: 'Ingles',
    author: 'Carlos castaneda' },
  { 
    name: 'conocimiento silencioso',
    year: '2015',
    language: 'Ingles',
    author: 'carlos castaneda' },
  { 
    name: 'otro libro ',
    year: '2009',
    language: 'Ingles',
    author: 'otro autor' } 
];


mongo.connect(url, function(err, db) {
  if (err) throw err
  var books = db.collection('books')
  books.insert(  seddata,   function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(seddata))
    db.close()
  });
});