const searchEmployee = require('./searchEmployee');

describe('Testes da função `searchEmployee`', () => {
    it('Verifica se searchEmployee está definido', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('Verifica se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Verifica se a searchEmployee(`8579-6`, `firstName`) retorna `Ana`', () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    });
    it('Verifica se a searchEmployee(`4456-4`, `lastName`) retorna `Ana`', () => {
        expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    });
    it('Verifica se a searchEmployee(`1256-4`, `specialities`) retorna [`Hooks`, `Context API`, `Tailwind CSS`]', () => {
        expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
    });
    it('Verifica se a busca por um id inválido retorna `ID não identificada`', () => {
        expect(searchEmployee('1234', 'specialities')).toBe('ID não identificada');
    });
    it('Verifica se a busca por um informação inexistente retorna `Informação indisponível`', () => {
        expect(searchEmployee('1256-4', 'hobby')).toBe('Informação indisponível');
    });
})