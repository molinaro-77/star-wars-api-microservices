const express = require('express')
const handlers = require('./utils/errors/handlers')
const { createProxyMiddleware } = require('http-proxy-middleware')
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use("*", handlers.notFoundHandler)
app.use(handlers.errorHandler);

app.use("/characters", createProxyMiddleware({
  target: "http://characters:8001",
  changeOrigin: true
}))
app.use("/films", createProxyMiddleware({
  target: "http://films:8002",
  changeOrigin: true
}))
app.use("/planets", createProxyMiddleware({
  target: "http://planets:8003",
  changeOrigin: true
}))

module.exports = app