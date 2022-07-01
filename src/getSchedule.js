const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// com uma dica de Marcos Vinicius

function getDay(scheduleTarget, saida) {
  if (scheduleTarget === 'Monday') return { Monday: saida[scheduleTarget] };
  const obj = {};
  obj[scheduleTarget] = {
    officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: species.filter((especie) =>
      especie.availability.includes(scheduleTarget)).map(({ name }) => name),
  };
  return obj;
}

function getSchedule(scheduleTarget) {
  const horarios = Object.entries(hours);
  const saida = {};
  horarios.forEach((dia) =>
    saida[dia[0]] = {
      officeHour: `Open from ${dia[1].open}am until ${dia[1].close}pm`,
      exhibition: species.filter((especie) =>
        especie.availability.includes(dia[0])).map(({ name }) => name),
    });
  saida.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  const existeEspecie = species.filter((specie) => specie.name === scheduleTarget);
  if (existeEspecie.length > 0) return existeEspecie[0].availability;
  if (horarios.some((dia) => dia[0] === scheduleTarget) === true) {
    return getDay(scheduleTarget, saida);
  }
  return saida;
}
// console.log(getSchedule());
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('lions'));
module.exports = getSchedule;
