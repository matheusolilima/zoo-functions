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
  // seu código aqui
  if (!obj) return getCompleteList();
  let targetEmployee = {};
  const objContainName = Object.keys(obj).includes('name');
  const objContainId = Object.keys(obj).includes('id');
  let nameOnList = false;
  let idOnList = false;
  function criaSaida(targetEmployee) {
    const saida = {
      id: targetEmployee.id,
      fullName: `${targetEmployee.firstName} ${targetEmployee.lastName}`,
      species: (targetEmployee.responsibleFor).map((item) => species.find((specie) => specie.id === item).name),
      locations: (targetEmployee.responsibleFor).map((item) => species.find((specie) => specie.id === item).location),
    }
    return saida;
  }
  if (objContainName) {
    targetEmployee = employees.find((employee) =>
      ((employee.firstName === obj.name) || (employee.lastName === obj.name)));
    if (targetEmployee !== undefined){
      nameOnList = true;
      return criaSaida(targetEmployee);
    }
  }
  // console.log(targetEmployee);
  if (objContainId) {
    targetEmployee = employees.find((employee) => employee.id === obj.id);
    if (targetEmployee !== undefined){
      idOnList = true;
      return criaSaida(targetEmployee);
    }  
  }
  if ((nameOnList || idOnList) === false) {
    throw new Error('Informações inválidas');
  }

}
//getEmployeesCoverage({ name: 'Sharonda' });
module.exports = getEmployeesCoverage;
