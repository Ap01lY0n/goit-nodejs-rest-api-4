const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

const { DB_HOST, PORT = 3008 } = process.env;
mongoose.set('strictQuery', true);

mongoose.connect(config.mongodbURI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });
