const service = require("./service");

describe('Testa a função `createAleatoryNumer', () => {
  test('Verifica se o seu retorno está entre 1 e 100', () => {
    const { createAleatoryNumber } = service;
    const aleatoryNumber = createAleatoryNumber();
    expect(aleatoryNumber).toBeGreaterThan(0);
    expect(aleatoryNumber).toBeLessThanOrEqual(100);
  });
  test('Realizando um mock da função com retorno igual a 10', () => {
    jest.spyOn(service, 'createAleatoryNumber').mockReturnValue(10);
    const { createAleatoryNumber } = service;
    const aleatoryNumber = createAleatoryNumber();
    expect(createAleatoryNumber).toHaveBeenCalled();
    expect(createAleatoryNumber).toHaveBeenCalledTimes(1);
    expect(aleatoryNumber).toBe(10);
    createAleatoryNumber.mockClear();
  })
  test('Realizando um mock com a implementação de divisão de dois números', () => {
    const { createAleatoryNumber } = service;
    createAleatoryNumber.mockImplementation((number1, number2) => number1 / number2);
    const divisionResult = createAleatoryNumber(4, 2);
    expect(createAleatoryNumber).toHaveBeenCalled();
    expect(divisionResult).toBe(2);
    expect(createAleatoryNumber).toHaveBeenCalledTimes(1);
    createAleatoryNumber.mockClear();
  })
})
