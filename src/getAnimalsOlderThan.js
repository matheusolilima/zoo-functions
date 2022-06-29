const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let saida = (species.find((element) => element.name === animal));
  saida = saida.residents.every((resident) => resident.age >= age);
  return saida;
}

module.exports = getAnimalsOlderThan;
