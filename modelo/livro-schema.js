const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  titulo: String,
  autor: String,
  genero: String,
  anoPublicacao: Number
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;