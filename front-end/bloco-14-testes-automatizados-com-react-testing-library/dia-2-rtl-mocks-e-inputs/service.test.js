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
    createAleatoryNumber.mockReset();
  })
  test('Realizando um mock com a implementação de divisão de dois números', () => {
    const { createAleatoryNumber } = service;
    createAleatoryNumber.mockImplementation((number1, number2) => number1 / number2);
    const divisionResult = createAleatoryNumber(4, 2);
    expect(createAleatoryNumber).toHaveBeenCalled();
    expect(divisionResult).toBe(2);
    expect(createAleatoryNumber).toHaveBeenCalledTimes(1);
    createAleatoryNumber.mockReset();
  })
  test('Realizando um mock com a implementação de multiplicação de três números', () => {
    const { createAleatoryNumber } = service;
    createAleatoryNumber.mockImplementation(
      (number1, number2, number3) =>
        number1 * number2 * number3
      );
    const multiplicationResult = createAleatoryNumber(1, 2, 3);
    expect(multiplicationResult).toBe(6);
    createAleatoryNumber.mockReset();
  })
  test('Realizando um mock que retorna o dobro de um número', () => {
    const { createAleatoryNumber } = service;
    createAleatoryNumber.mockImplementation((number) => 2*number)
    const doubleResult = createAleatoryNumber(2);
    expect(doubleResult).toBe(4);
    createAleatoryNumber.mockReset();
  })
})
