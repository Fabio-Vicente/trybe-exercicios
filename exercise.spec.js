const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

describe('Testes do comportamento da função `uppercase`', () =>
it('Verifica a chamada do parâmetro callback', (done) =>
    uppercase('Fábio', (upperStr) => {
        try {
            expect(upperStr).toBe('FÁBIO');
            done();
        } catch (error) {
            done(error);
        }
    })))