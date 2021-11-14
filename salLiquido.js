let bruto = 4000;
let INSS, IR, liq, ded;

const cento = 100;
const aliqINSS1 = 8/cento, faixaINSS1 = 1556.94;
const aliqINSS2 = 9/cento, faixaINSS2 = 2594.92;
const aliqINSSMax = 11/cento, faixaINSSMax = 5189.82;
const taxaINSSMax = faixaINSSMax*aliqINSSMax;
const faixaIRisencao = 1903.98;
const aliqIR1 = 7.5/cento, faixaIR1 = 2826.65;
const parcDed1 = faixaIRisencao*aliqIR1;
const aliqIR2 = 15/cento, faixaIR2 = 3751.06;
const parcDed2 = faixaIR1*(aliqIR2-aliqIR1) + parcDed1;
const aliqIRLim = 22.5/cento, faixaIRLim = 4664.68;
const parcDedLim = faixaIR2*(aliqIRLim - aliqIR2) + parcDed2;
const aliqIRMax = 27.5/cento;
const parcDedMax = faixaIRLim*(aliqIRMax - aliqIRLim) + parcDedLim;


if (bruto<=faixaINSS1) {
    INSS = bruto*aliqINSS1;
}
else if (bruto<=faixaINSS2) {
    INSS = bruto*aliqINSS2;
}
else if (bruto<=faixaINSSMax) {
    INSS = bruto*aliqINSSMax;
}
else {
    INSS = taxaINSSMax;
}

ded = bruto - INSS;

if (ded<=faixaIRisencao) {
    IR = 0;
}
else if (ded<=faixaIR1) {
    IR = ded*aliqIR1 - parcDed1;
}
else if (ded<=faixaIR2) {
    IR = ded*aliqIR2 - parcDed2;
}
else if (ded<=faixaIRLim) {
    IR = ded*aliqIRLim - parcDedLim;
}
else {
    IR = ded*aliqIRMax - parcDedMax;
}

liq = ded - IR;

console.log(liq);
console.log("INSS: ", INSS, "    ", "IR: ", IR);
console.log("Imposto total: ", INSS + IR);
console.log("% líquido: ", liq/bruto);