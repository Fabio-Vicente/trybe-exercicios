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
    createAleatoryNumber.mockRestore();
  })
})
