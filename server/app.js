if (process.env.NODE_ENV == 'development') require('dotenv').config();

const express = require('express')
const app = express()
const mongoose = require('mongoose');

const routes = require('./routes') // requires index.js in routes folder


//MongoDB COnfig
mongoose.connect('mongodb+srv://admin:admin@cluster-mahdi-fbcbi.mongodb.net/todosDB?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
    if (err) {console.log('database error, see error details!')
console.log(err)}
    else console.log('data base is active')
  })

app.use(express.json()) //digunakan jika ada proses res.status().json
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
// Error Handler ditempatkan pada posisi terakhir

module.exports = app;