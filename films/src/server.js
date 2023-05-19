const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const handlers = require('./utils/errors/handlers');
const server = express();

server.use(morgan("dev"))
server.use(express.json())
server.use("/films",router)
server.use("*", handlers.notFoundHandler)
server.use(handlers.errorHandler);

module.exports = server;