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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bd11d3529070bfc986c9644')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('unable to fetch todos', err)
    // })

        db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err)=> {
        console.log('unable to fetch todos', err)
    })

    db.collection('User').find({name:'Jordan'}).toArray().then((docs) => {
        console.log('Users')
        console.log(JSON.stringify(docs,undefined,2))
    }, (err) => {
        console.log('cannot find users', err)
    })

    //client.close();
});