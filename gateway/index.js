const app = require('./src/server')

const PORT = 8000

app.listen(PORT, ()=> {
  console.log("Gateway on port " + PORT);
})