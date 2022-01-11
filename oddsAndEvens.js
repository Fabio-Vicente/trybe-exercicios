const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* for (let i = 0; i < oddsAndEvens.length; i += 1) {
    for (let j = 0; j < oddsAndEvens.length - 1 - i; j += 1) {
        if (oddsAndEvens[j] > oddsAndEvens[j + 1]) {
            const change = oddsAndEvens[j];
            oddsAndEvens[j] = oddsAndEvens[j + 1];
            oddsAndEvens[j + 1] = change;
        }
    }
} */

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉