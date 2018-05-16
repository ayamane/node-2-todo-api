'use strict';

//const MongoClient = require('mongodb').MongoClient;
// note: changes in comments are for mongodb module v3,
// now require a client object in the .connect() method
// then use a const to get the db reference before using it

// var user = {name: 'andrew', age: 49};
// var {name} = user;    // this will create a variable name for the user property name
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db /* client */) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.close(); // client.close();
});

// code snippets
  //const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location) using InsertOne
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 49,
  //   location: 'Captain Cook'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
