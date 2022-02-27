const createAleatoryNumber = () =>
    Math.floor(Math.random() * 100) + 1;

const toUpperCase = (string) => 
    String.toUpperCase(string);

const firstCharacter = (string) =>
    string[0];

const concatThreeStrings = (string1, string2, string3) =>
    string1 + string2 + string3;

module.exports = { createAleatoryNumber, toUpperCase };