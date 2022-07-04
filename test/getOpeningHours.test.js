const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifique se para "Monday" retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('teste de tuesday 9am', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('teste de wednesday 9pm', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('teste do horario como numero', () => {
    let param2 = 'AA:00-PM';
    const outputH = 'The hour should represent a number';
    const outputM = 'The minutes should represent a number';
    const actual = () => getOpeningHours('Wednesday', param2);
    expect(actual).toThrow(new Error(outputH));
    param2 = '09:AA-PM';
    expect(actual).toThrow(new Error(outputM));
  });
  it('teste se a abreviação é AM ou PM', () => {
    const param2 = '10:00-DM';
    const output = 'The abbreviation must be \'AM\' or \'PM\'';
    const actual = () => getOpeningHours('Wednesday', param2);
    expect(actual).toThrow(new Error(output));
  });
  it('teste se a hora está entre 0 e 12', () => {
    const param2 = '25:00-AM';
    const output = 'The hour must be between 0 and 12';
    const actual = () => getOpeningHours('Wednesday', param2);
    expect(actual).toThrow(new Error(output));
  });
  it('teste se os minutos estão entre 0 e 59', () => {
    const param2 = '12:70-AM';
    const output = 'The minutes must be between 0 and 59';
    const actual = () => getOpeningHours('Wednesday', param2);
    expect(actual).toThrow(new Error(output));
  });
  it('teste se o valor do dia da semana é valido', () => {
    const param2 = '12:00-AM';
    const output = 'The day must be valid. Example: Monday';
    const actual = () => getOpeningHours('teste', param2);
    expect(actual).toThrow(new Error(output));
  });
  it('teste se com parametros vazios, o retorno sao os horarios', () => {
    expect(getOpeningHours()).toBe(hours);
  });
});
