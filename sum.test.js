const sum = require('./sum');

describe('Testes na função `sum`', () => {
    it('Verifica se sum(4, 5) é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('Verifica se sum(0, 0) é igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Verifica se a função retorna erro quando um dos parâmetros não é um número', () => {
        expect(() => sum (4, '5')).toThrow();
    });
    it('Verifica se a mensagem de erro é `parameters must be numbers`', () => {
        expect(() => sum (4, '5')).toThrowError(new Error ('parameters must be numbers'));
    });
})