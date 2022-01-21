// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise");

/* describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(({ name: pokeName }) =>
        pokeName === 'Ditto', (err, msg) => {
            try {
                expect(err).toEqual(Error('Não temos esse pokémon para você :('));
                done();
            } catch (error) {
                done(error);
            }
        });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails(({ name: pokeName}) =>
        pokeName === 'Bulbasaur', (err, msg) => {
            try {
                expect(msg).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
                done();
            } catch (error) {
                done(error);
            }
        });
  });
});
 */
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});