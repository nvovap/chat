//mongodb://<dbuser>:<dbpassword>@ds013486.mlab.com:13486/test_nvovap_mongodb


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://user1:1qazxsw2@ds013486.mlab.com:13486/test_nvovap_mongodb';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {

    var collection = db.collection('documents');

    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });

    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        assert.equal(2, docs.length);
        console.log("Found the following records");
        console.dir(docs);
        callback(docs);
    });

    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});