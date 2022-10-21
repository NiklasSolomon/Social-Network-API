const { connect, connection } = require('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;