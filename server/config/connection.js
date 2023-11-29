const { connect, connection } = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/realEstateLawsDB';
connect(mongoURI);

module.exports = connection;

