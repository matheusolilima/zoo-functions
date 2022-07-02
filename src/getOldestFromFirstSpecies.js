const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// com dica do Marcos Vinicius
function getOldestFromFirstSpecies(id) {
  const colab = employees.find((employee) => employee.id === id);
  const specieId = colab.responsibleFor[0];
  const animals = species.find((specie) => specie.id === specieId);
  const biggest = (bigger, number) => ((bigger.age > number.age) ? bigger : number);
  const oldest = animals.residents.reduce(biggest);
  const saida = Object.values(oldest);
  return saida;
}

module.exports = getOldestFromFirstSpecies;
