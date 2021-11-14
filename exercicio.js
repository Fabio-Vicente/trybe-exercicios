let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (const number of numbers) {
    console.log(number);
};

//2
let sum = 0;

for (const number of numbers) {
    sum += number;
};

console.log(sum);

//3
median = sum/numbers.length;

console.log(median);

//4
if(median>20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
};

//5
let major = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i]>major) {
        major = numbers[i];
    };
};

console.log(major);

//6
let odds = 0;

for (const number of numbers) {
    if (number%2 == 1) {
        odds++;
    };
};

if (odds != 0) {
    console.log(odds);
}
else {
    console.log('nenhum valor ímpar encontrado');
};

//7
let minor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]<minor) {
        minor = numbers[i];
    };
};

console.log(minor);

//8
count = [];

for (let i = 1; i <= 25; i++) {
    count.push(i);
};

console.log(count);

//9
for (const element of count) {
    console.log(element/2);
};

//Bônus

//1. Ordem crescente
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j]>numbers[j + 1]) {
            const aux = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = aux;
        };
    };
};

console.log(numbers);

//2. Ordem decrescente
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j]<numbers[j + 1]) {
            const aux = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = aux;
        };
    };
};

console.log(numbers);

//3. Multiplicação pelo sucessor
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let mult = [];

for (let i = 0; i < numbers.length - 1; i++) {
    mult.push(numbers[i]*numbers[i + 1]);
}
mult.push(numbers[numbers.length-1]*2);

console.log(mult);