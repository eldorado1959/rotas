
const express = require('express');
const app = express();

const logHora = require('./middlewares/logHora');
const bloqueioHorario = require('./middlewares/bloqueioHorario');

const sobreRoute = require('./routes/sobre');
const comentariosRoute = require('./routes/comentarios');

app.use(express.json());

// Middlewares globais
app.use(logHora);
app.use(bloqueioHorario);

// Rotas
app.use('/sobre', sobreRoute);
app.use('/comentarios', comentariosRoute);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
