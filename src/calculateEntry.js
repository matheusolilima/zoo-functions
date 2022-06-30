const data = require('../data/zoo_data');
const prices = data.prices;

function countEntrants(entrants) {
  // seu código aqui
  //console.log(entrants);
  if(!entrants) return 0;
  if(entrants === {}) return 0;
  let saida = {};//child: 0, adult: 0, senior: 0
  saida.child = entrants.filter((entrant) => entrant.age < 18).length;
  saida.adult = entrants.filter((entrant) => (entrant.age >= 18) && (entrant.age < 50)).length;
  saida.senior = entrants.filter((entrant) => entrant.age >= 50).length;
  //console.log(saida);
  return saida;
}

function calculateEntry(entrants) {
  // seu código aqui
  if(!entrants) return 0;
  if(entrants === {}) return 0;
  let obj = countEntrants(entrants);
  let finalPrice = 0;

  finalPrice += obj.adult * prices.adult;
  finalPrice += obj.child * prices.child;
  finalPrice += obj.senior * prices.senior;
  finalPrice = finalPrice.toFixed(2);
  console.log(finalPrice);
  return Number.finalPrice; 
}

let entrada = [
{ name:  'Lara Carvalho', age:  5 },
{ name:  'Frederico Moreira', age:  5 },
{ name:  'Pedro Henrique Carvalho', age:  5 },
{ name:  'Maria Costa', age:  18 },
{ name:  'Núbia Souza', age:  18 },
{ name:  'Carlos Nogueira', age:  50 },]
//calculateEntry(entrada);
console.log(countEntrants(entrada));
module.exports = { calculateEntry, countEntrants };
