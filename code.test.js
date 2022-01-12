const {encode, decode} = require('./code');

describe('Implementando testes nas funções `encode` e `decode`', () => {
    it('Verifica se enconde e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Verifica se as vogais `a`, `e`, `i`, `o`, `u` são convertidas para `1`, `2`, `3`, `4`, `5` na função `encode`', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    })
    it('Verifica se os valores `1`, `2`, `3`, `4`, `5` são convertidos para as vogais `a`, `e`, `i`, `o`, `u` na função `decode`', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    })
    it('Verifica se outras letras não são convertidas na função `encode`', () => {
        expect(encode('a, b, c, d, e')).toBe('1, b, c, d, 2');
    })
    it('Verifica se outros números não são convertidos na função `decode`', () => {
        expect(decode('1, b, c, d, 2')).toBe('a, b, c, d, e');
    })
    it('Verifica se a string passada tem o mesmo tamanho nas funções`', () => {
        const encTestLength = 'a, b, c, d, e'.length;
        const decTestLength = '1, b, c, d, 2'.length;
        expect(encode('a, b, c, d, e')).toHaveLength(encTestLength)
        expect(decode('1, b, c, d, 2')).toHaveLength(decTestLength);
    })
})