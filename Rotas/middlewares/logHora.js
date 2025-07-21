
module.exports = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`Requisição feita em: ${now}`);
    next();
  };
  