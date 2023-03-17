const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = () => {
  return mongoose.connect(process.env.uri || 'mongodb://127.0.0.1/todo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
