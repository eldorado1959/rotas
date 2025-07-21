
module.exports = (req, res, next) => {
    const hora = new Date().getHours();
    if (hora >= 0 && hora < 6) {
      return res.status(403).json({ mensagem: 'Requisições bloqueadas entre 00h e 06h' });
    }
    next();
  };

  