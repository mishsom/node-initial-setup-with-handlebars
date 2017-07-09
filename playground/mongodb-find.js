const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log(err + " error connecting to database");
    } else {
        console.log("Connected to database");
        db.collection('Todos').find().toArray().then((data) => {
            console.log(JSON.stringify(data, undefined, 4));
        }, (error) => {
            console.log("junk data can't fetch");
        });

        db.collection('Todos').find({completed: true}).toArray().then((data) => {
            console.log("--- now filtered query ----");
            console.log(JSON.stringify(data, undefined, 4));
        }, (error) => {
            console.log("junk data can't fetch");
        });
        db.collection('Todos').find({_id: new ObjectID('595972c8be0b046e34e2a949')}).toArray().then((data) => {
            console.log("--- now filtered query with ID ----");
            console.log(JSON.stringify(data, undefined, 4));
        }, (error) => {
            console.log("junk data can't fetch");
        });
        db.collection('Todos').find().count().then((data) => {
            console.log("--- now count query ----");
            console.log(JSON.stringify(data, undefined, 4));
        }, (error) => {
            console.log("junk data can't fetch");
        });
        /*db.close(() => {
            console.log("connection closed");
        });*/
    }
})