const {Schema, model, models} = require('mongoose')

const todoSchema= new Schema({
  title: {
    type: String,
    required: [true, `Title must be filled!`]
  }, 
  description: {
    type: String,
    required: [true, `Description of task must be filled`]
  }, 
  status: {
      type: String,
      enum: ['done', 'pending', 'missed']
  }
})

const Todo = model('Todo', todoSchema)
module.exports = Todo

