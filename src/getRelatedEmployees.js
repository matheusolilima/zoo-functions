const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const manager = employees.find((employee) => employee.id === id);
  if (!manager) return false;
  return employees.filter((employee) => employee.managers.includes(manager.id)).length > 0;
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  if (isManager(managerId) === true) {
    const manager = employees.find((employee) => employee.id === managerId);
    const managedList = employees.filter((employee) => employee.managers.includes(manager.id));

    const nameList = [];
    managedList.forEach((managed) => nameList.push(`${managed.firstName} ${managed.lastName}`));
    return nameList;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
