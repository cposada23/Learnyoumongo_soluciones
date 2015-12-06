var database = process.argv[2],
    col = process.argv[3],
    id = process.argv[4];


var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+database;

mongo.connect(url, function (err, db) {
   if (err)throw err;
   var collection = db.collection(col);
   collection.remove({
       _id:id
       
   },function (err,data) {
       if (err) throw err;
       db.close();
   })
});

/*
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection(process.argv[3])
  collection.remove({
    _id: process.argv[4]
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
*/