const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async () => {
  let urlDb;
  try {
    if (process.env.NODE_ENV === 'production') {
      urlDb = process.env.URI_DB_CONTAINER;
    } else {
      // urlDb = process.env.URI_DB;
      urlDb = process.env.URI_DB;
    }
    await mongoose.connect(urlDb, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('%s MongoDB is running.', chalk.green('✗'));
  } catch (error) {
    console.log('error: ', error);
    process.exit(1);
  }
};

module.exports = connectDB;
