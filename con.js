// intento de coneccion a mongolab
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://camilo.posadaa:1234@ds027295.mongolab.com:27295/libreriadb'


//prueba de borrado por id


mongo.connect(url, function (err, db) {
   if (err)throw err;
   var books = db.collection('books');
   books.remove({
     name: 'otro',
     year: 'tratando',
     language: 'de',
     author: 'borrar'
       
   },function (err,data) {
       if (err) throw err;
       db.close();
   })
});

//pueba de busqueda por nombre 
/*
var _name = 'conocimiento silencioso';
mongo.connect(url, function(err, db) {
  if (err) throw err
  var books = db.collection('books')
  books.find({
    name: _name
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(JSON.stringify(docs[0]));
    var named = docs[0].name;
    console.log("nombre"+ named);
    db.close()
  });
});
*/


//prueba de coneccion con mongolab.com devuelve todos los libros 

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('books');
    collection.find().toArray(function (err,docs) {
        if (err)throw err;
        console.log(docs);
        db.close();
    });
});

//prueva de insercion mongolab.com

/*
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

*/