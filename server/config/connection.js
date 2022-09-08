const mongoose = require('mongoose');

//change the location of the mongodb localhost.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const { connect, connection } = require('mongoose');

// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmediaDB';

// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;



module.exports = mongoose.connection;