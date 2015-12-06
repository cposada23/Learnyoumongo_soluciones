var coll = 'parrots',
    _age = Number(process.argv[2]);
    
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function (err, db) {
    if (err) throw err;
   var collection = db.collection(coll);
   collection.count({
       age:{$gt:_age}
   },
   
   function (err,data) {
      if (err)throw err;
      console.log(data);
      db.close(); 
   });
});

//qty: { $gt: 20 }