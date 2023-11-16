const Livro = require('./livro-schema');

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.error('Erro ao obter livros:', error);
  }
};

const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    console.error('Erro ao incluir livro:', error);
  }
};

const excluir = async (codigo) => {
  try {
    await Livro.deleteOne({ _id: codigo });
    console.log('Livro excluído com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir
};
