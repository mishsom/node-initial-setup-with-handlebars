/**
 * Created by soumitramishra on 8/7/17.
 */
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log(err + " error connecting to database");
    } else {

        db.collection('Todos').deleteMany({completed: true}).then((result) => {
           console.log(result);
        });
        db.collection('Todos').deleteOne({completed: false}).then((result)=>{
            console.log(result);
        });
        db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
            console.log(result);
        })
        // db.close();
    }
})