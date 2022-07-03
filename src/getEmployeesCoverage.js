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

function criaSaida(targetEmployee) {
  const saida = {
    id: targetEmployee.id,
    fullName: `${targetEmployee.firstName} ${targetEmployee.lastName}`,
    species: (targetEmployee.responsibleFor).map((item) =>
      species.find((specie) => specie.id === item).name),
    locations: (targetEmployee.responsibleFor).map((item) =>
      species.find((specie) => specie.id === item).location),
  };
  return saida;
}

function getEmployeesCoverage(obj) {
  if (!obj) return getCompleteList();
  let targetEmployee = {};
  let validInput = false;
  targetEmployee = employees.find((employee) => employee.id === obj.id);
  if (targetEmployee !== undefined) {
    return criaSaida(targetEmployee);
  }
  targetEmployee = employees.find((employee) =>
    ((employee.firstName === obj.name) || (employee.lastName === obj.name)));
  if (targetEmployee !== undefined) {
    validInput = true;
    return criaSaida(targetEmployee);
  }
  if (validInput === false) {
    throw new Error('Informações inválidas');
  }
}
// seu código aqui
// obj = { name: 'Sharonda' };
// obj = { id:'4b40a139-d4dc-4f09-822d-ec25e819a5ad' };
getEmployeesCoverage();
module.exports = getEmployeesCoverage;
