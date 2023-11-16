const express = require('express');
const livroDAO = require('../modelo/livro-dado');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const livros = await livroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    console.error('Erro ao obter livros:', error);
    res.status(500).json({ message: 'Erro ao obter livros.' });
  }
});

router.post('/', async (req, res) => {
  const livro = req.body;

  try {
    const novoLivro = await livroDAO.incluir(livro);
    res.json({ message: 'Livro incluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao incluir livro:', error);
    res.status(500).json({ message: 'Erro ao incluir livro.' });
  }
});

router.delete('/:id', async (req, res) => {
  const codigo = req.params.id;

  try {
    await livroDAO.excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    res.status(500).json({ message: 'Erro ao excluir livro.' });
  }
});

module.exports = router;