const data = require('../data/zoo_data');
const prices = data.prices;
// com contribuição de Luis Laporta, Matheus Eduardo, Ivan Martins
function countEntrants(entrants) {
  if(!entrants || Object.keys(entrants).length === 0) return 0;
  let saida = {};
  saida.child = entrants.filter((entrant) => entrant.age < 18).length;
  saida.adult = entrants.filter((entrant) => (entrant.age >= 18) && (entrant.age < 50)).length;
  saida.senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return saida;
}

function calculateEntry(entrants) {
  if(!entrants || Object.keys(entrants).length === 0) return 0;
  let obj = countEntrants(entrants);
  let finalPrice = 0;
  finalPrice += obj.adult * prices.adult;
  finalPrice += obj.child * prices.child;
  finalPrice += obj.senior * prices.senior;
  finalPrice = finalPrice.toFixed(2);
  return Number(finalPrice); 
}

module.exports = { calculateEntry, countEntrants };
