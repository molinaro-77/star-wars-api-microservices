const characters = require('./characters.json')

module.exports = {
  list : async () => {
    return characters
  },
  getById : async (id) => {
    return characters.find(character => character.id === id)
  },
  getByName : async (name) => {
    return characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
  }
}