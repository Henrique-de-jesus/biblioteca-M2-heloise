const express = require('express');
const routes = require('./src/routes/index.routes');
const { logger, erroHandler, autentificar } = require('./src/middlewares/main.middleware');
const app = express();
const logger = require('./src/middlewares/logger.middleware')
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(logger);

// Utilizando as rotas
app.use(autentificar)
app.use(routes);
app.use(erroHandler)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR]: Biblioteca online em http://localhost:${PORT}`);
});
