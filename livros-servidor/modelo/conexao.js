const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect('mongodb+srv://admin:admin@livraria.c882jui.mongodb.net/', options);

module.exports = mongoose;

