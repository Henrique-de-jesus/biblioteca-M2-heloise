const logger = require('./logger.middleware');
const autentificar = require('./auth.middleware');
const erroHandler = require('./errorHandler.middleware')

module.exports = {
    logger,
    autentificar,
    erroHandler
};