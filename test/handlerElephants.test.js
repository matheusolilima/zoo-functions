const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o argumento "count" faz a função retornar a quantidade de elefantes',() => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se o argumento "names" faz a função retornar um array com a relação dos nomes de todos os elefantes',() => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se o argumento "averageAge" faz a função retornar a média de idade dos elefantes',() => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica se o argumento "location" faz a função retornar a localização dos elefantes dentro do Zoológico',() => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se o argumento "popularity" faz a função retornar a popularidade de elefantes',() => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se o argumento "availability" faz a função retornar um array com a relação de dias em que é possível visitar os elefantes',() => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});