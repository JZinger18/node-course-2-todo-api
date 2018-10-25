//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, (err, client) => {
    if(err) {
        return console.log('unable to connect to mongodb server')
    }

    console.log('connected to mongodb server')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     comepleted: false
    // }, (err, result) => {
    //     if (err) {
    //        return console.log('unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    //name property, age, location

    // db.collection('User').insertOne({
    //     name: 'Jordan',
    //     age:26,
    //     location: 'Tampa',
    //     comepleted:false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert user collection', err)
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});