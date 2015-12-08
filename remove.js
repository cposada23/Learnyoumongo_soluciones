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

