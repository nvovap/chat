//mongodb://<dbuser>:<dbpassword>@ds013486.mlab.com:13486/test_nvovap_mongodb


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://user1:1qazxsw2@ds013486.mlab.com:13486/test_nvovap_mongodb';
// Use connect method to connect to the Server

var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
}

MongoClient.connect(url, function(err, db) {

    insertDocuments(db, function() {
        db.close();
    });



    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});