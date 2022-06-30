const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  let saida = {};
  if (!animal) {
    species.forEach((specie) => { saida[specie.name] = specie.residents.length; });
    return saida;
  }
  if (!animal.sex) {
    saida = species.find((specie) =>
      specie.name === animal.specie).residents.length;
    return saida;
  }
  saida = species.find((specie) =>
    specie.name === animal.specie).residents.filter((resident) =>
    resident.sex === animal.sex).length;
  return saida;
}
module.exports = countAnimals;
