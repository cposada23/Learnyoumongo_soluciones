var _size = process.argv[2];

var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {
    if (err)throw err;
    var collection = db.collection('prices');
    //busco todos los documentos en prices que tengan size que fue pasado por parametros    
    
    collection.aggregate([
        //selecciono los que cumplen el criterio
        {
            $match:{
                size:_size  
            }
        },
        // los agrupo
        {
            $group:{
                _id: 'average',
                average:{
                    $avg: '$price'
                }
                
            }
            
        }
    ]).toArray(function (err, results) {
        if (err) throw err
        if (!results.length) {
          throw new Error('No results found')
        }
        console.log(results[0].average.toFixed(2));
        /*
        var o = results[0]
        console.log(Number(o.average).toFixed(2))
        */
        db.close();
    });
});

