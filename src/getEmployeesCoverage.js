const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getCompleteList() {
  const completeList = [];
  employees.forEach((employee) => {
    completeList.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: (employee.responsibleFor).map((item) =>
        species.find((specie) => specie.id === item).name),
      locations: (employee.responsibleFor).map((item) =>
        species.find((specie) => specie.id === item).location),
    });
  });
  return completeList;
}

function getEmployeesCoverage(obj) {
  const listaCompleta = getCompleteList();
  if (!obj) return listaCompleta;
  let targetEmployee = {};
  let validInput = false;
  targetEmployee = listaCompleta.find((item) => item.id === obj.id);
  if (targetEmployee !== undefined) return targetEmployee;
  targetEmployee = listaCompleta.find((item) => item.fullName.includes(obj.name));
  if (targetEmployee !== undefined) {
    validInput = true;
    return targetEmployee;
  }
  if (validInput === false) throw new Error('Informações inválidas');
}
// seu código aqui
// obj = { name: 'Sharonda' };
// obj = { id:'4b40a139-d4dc-4f09-822d-ec25e819a5ad' };
// getEmployeesCoverage(obj);
module.exports = getEmployeesCoverage;
