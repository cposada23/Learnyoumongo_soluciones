var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2];
var databasename= process.argv[2];



mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection("users")
  collection.update(  {username:"tinatime"}, {
      $set:{
          age:40
      }
  } ,
  
  function(err, data) {
      if(err)throw err;
      data.close();
  })
})

/* db.products.update(
   { _id: 100 },
   { $set:
      {
        quantity: 500,
        details: { model: "14Q3", make: "xyz" },
        tags: [ "coats", "outerwear", "clothing" ]
      }
   }
)

*/
