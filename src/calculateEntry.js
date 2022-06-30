const data = require('../data/zoo_data');

// com contribuição de Luis Laporta, Matheus Eduardo, Ivan Martins

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const saida = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => (entrant.age >= 18) && (entrant.age < 50)).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return saida;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const obj = countEntrants(entrants);
  let finalPrice = 0;
  finalPrice += obj.adult * data.prices.adult;
  finalPrice += obj.child * data.prices.child;
  finalPrice += obj.senior * data.prices.senior;
  finalPrice = finalPrice.toFixed(2);
  return Number(finalPrice);
}

module.exports = { calculateEntry, countEntrants };
