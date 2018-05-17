'use strict';

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// 3 methods to delete documents
//  1. Todo.remove() --> only get # of records affected
//  2. Todo.findOneAndRemove(query_obj) e.g. .findOneAndRemove({_id: '5afdbf62d8e0e32b2557adaf'})
//  3. Todo.findByIdAndRemove

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5afdbf62d8e0e32b2557adaf').then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});
