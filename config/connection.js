const { connect, connection } = require('mongoose');
// Creates the DB
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialMediaDB';
// Connection between Mongoose and MongoDB
connect(connectionString);
//  Export the connection
module.exports = connection;