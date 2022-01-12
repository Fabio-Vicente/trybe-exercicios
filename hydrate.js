/* function hydrate(str) {
    let allDrinks = str.match(/\d+/g);
    let sumOfDrinks = 0;
    for (const drink of allDrinks) {
      sumOfDrinks += parseInt(drink, 10);
    }
    if (sumOfDrinks === 1) {
      return `${sumOfDrinks} copo de água`;
    }
    return `${sumOfDrinks} copos de água`;
  } */

  const hydrate = str => {
    let allDrinks = str.match(/\d+/g);
    let sumOfDrinks = 0;
    for (const drink of allDrinks) {
      sumOfDrinks += parseInt(drink, 10);
    }
    if (sumOfDrinks === 1) {
      return `${sumOfDrinks} copo de água`;
    }
    return `${sumOfDrinks} copos de água`;
  }

module.exports = hydrate;