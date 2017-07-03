/**
 * Created by soumitramishra on 3/7/17.
 */
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log(err + " error connecting to database");
    } else {
        db.collection('Todos').insertOne({
            text: "complete office work",
            completed: false
        }, (err, results) => {
            if(err) {
                console.log("error occured while creating collection Todos " + err);
            } else {
                console.log(JSON.stringify(results.ops, undefined, 4));
            }
        });
        db.collection('Users').insertOne({
            name: "soumitra",
            age: 28,
            location: 'bangalore'
        }, (err, results) => {
            if(err) {
                console.log("error occured while creating collection Todos " + err);
            } else {
                console.log(JSON.stringify(results.ops, undefined, 4));
            }
        });
        db.close();
    }
})