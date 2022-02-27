const service = require("./service");

describe('Testa a função `createAleatoryNumer', () => {
  test('Verifica se o seu retorno está entre 1 e 100', () => {
    const { createAleatoryNumber } = service;
    const aleatoryNumber = createAleatoryNumber();
    expect(aleatoryNumber).toBeGreaterThan(0);
    expect(aleatoryNumber).toBeLessThanOrEqual(100);
  });
})
