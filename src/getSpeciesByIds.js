const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const answer = [];
  // return (ids.length===0)?[]:species.filter(({id})=> ids.includes(id)); //solução da Larissa

  ids.forEach((id) => { answer.push(...(species.filter((element) => id === element.id))); });

  return answer;
}

// com sugestões de Artur Senna

module.exports = getSpeciesByIds;
