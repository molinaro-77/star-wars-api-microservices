const server = require('./src/server');

const PORT = 8004;

server.listen(PORT, ()=> {
  console.log('Connection to DB on port ' + PORT);
})
