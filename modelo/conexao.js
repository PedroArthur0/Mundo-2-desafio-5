const mongoose = require('mongoose');

const banco = mongoose.connection;
banco.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
banco.once('open', () => {
  console.log('Conexão bem-sucedida com o banco de dados.');
});

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = banco;