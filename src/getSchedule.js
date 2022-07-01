const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// com uma dica de Marcos Vinicius
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
  const existeDia = horarios.some((dia) => dia[0] === scheduleTarget);
  const existeEspecie = species.filter((specie) => specie.name === scheduleTarget);
  if (scheduleTarget === 'Monday') return { Monday: saida[scheduleTarget] };
  if ((!scheduleTarget || existeDia === false) && (existeEspecie.length === 0)) return saida;
  if (existeEspecie.length > 0) return existeEspecie[0].availability;
  if (existeDia === true) {
    return {
      [scheduleTarget]: {
        officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
        exhibition: species.filter((especie) =>
          especie.availability.includes(scheduleTarget)).map(({ name }) => name),
      },
    };
  }
}
// console.log(getSchedule());
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('lions'));
module.exports = getSchedule;
