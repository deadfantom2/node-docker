const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();
const User = require('./models/User');

// Init express
let app = express();

// Connect to MongoDB.     lexx6680 @
connectDB();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(__dirname + '/'));

if (process.env.NODE_ENV === 'production') {
  console.log('Mode Production is runnig...');
  app.use('/api/user', require('./routes/userRoutes'));
} else {
  console.log('Mode Developemnt is runnig...');
  app.get('/', (req, res) => res.send('API IS RUNNING...'));
}

module.exports = app;
