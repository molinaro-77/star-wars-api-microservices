module.exports = (res, statusCode, data) => {
  res.status(statusCode).json({
    error : false,
    length : data.length,
    data : data
  })
}