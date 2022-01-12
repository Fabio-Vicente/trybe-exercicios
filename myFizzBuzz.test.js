function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

describe ('Testa a função `myFizzBuzz`', () => {
    it('Verifica se myFizzBuzz(15) retorna `fizzbuzz`', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Verifica se myFizzBuzz(6) retorna `fizz`', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });
    it('Verifica se myFizzBuzz(10) retorna `buzz`', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('Verifica se myFizzBuzz(16) retorna 16', () => {
        expect(myFizzBuzz(16)).toBe(16);
    });
    it('Verifica se myFizzBuzz(`16`) retorna `false`', () => {
        expect(myFizzBuzz('16')).toBeFalsy();
    });
})