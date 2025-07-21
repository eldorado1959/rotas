
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    nome: 'Rogério Fernando Machado',
    idade: 35,
    descricao: 'Desenvolvedor apaixonado por tecnologia, sistemas e aprendizado contínuo.'
  });
});

module.exports = router;
