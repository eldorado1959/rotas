
const express = require('express');
const router = express.Router();

// POST /comentarios
router.post('/', (req, res) => {
  const { texto } = req.body;

  if (!texto || texto.trim() === '') {
    return res.status(400).json({ erro: 'Texto do comentário está vazio.' });
  }

  return res.status(201).json({ mensagem: 'Comentário recebido com sucesso!' });
});

// DELETE /comentarios/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ erro: 'ID não fornecido.' });
  }

  return res.status(204).send();
});

module.exports = router;

