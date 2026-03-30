const express = require('express');
const routes = require('./src/routes/index.routes');
const app = express();
const logger = require('./src/middlewares/logger.middleware')
app.use(express.json());

app.use(logger);

// Utilizando as rotas
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR]: Biblioteca online em http://localhost:${PORT}`);
});
