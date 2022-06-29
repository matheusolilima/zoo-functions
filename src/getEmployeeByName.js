const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const getByName = employees.find((employee) => employee.firstName === employeeName);
  const getByLastName = employees.find((employee) => employee.lastName === employeeName);

  if (getByName !== undefined) return getByName;
  if (getByLastName !== undefined) return getByLastName;
}

module.exports = getEmployeeByName;
