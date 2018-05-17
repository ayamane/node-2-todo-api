'use strict';

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5afcc9ed40d528d210a97f7711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById
var id = '5afc64d18c9c3dc205773004';

if (!ObjectID.isValid(id)) {
  console.log('User ID not valid');
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User by Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
