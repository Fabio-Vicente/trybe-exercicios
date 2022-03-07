let fetch = require('node-fetch');

const createAleatoryNumber = () =>
  Math.floor(Math.random() * 100) + 1;

const toUpperCase = (string) => string.toUpperCase();

const firstCharacter = (string) => string[0];

const concatTwoStrings = (string1, string2) => string1 + string2;

const fetchDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => data);
}

module.exports = {
  createAleatoryNumber,
  toUpperCase,
  firstCharacter,
  concatTwoStrings,
  fetch,
  fetchDog,
};